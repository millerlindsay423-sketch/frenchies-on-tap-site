// Brewery Directory map. Reads data/breweries.json + data/towns.json directly —
// no build step, no new fields on the brewery data. A new brewery in an
// already-mapped town just works; a new brewery in a new town needs one
// coordinate added to data/towns.json.
(function () {
  const mapEl = document.getElementById('brewery-map');
  if (!mapEl || typeof L === 'undefined') return;

  function paws(rating) {
    const whole = Math.floor(rating);
    const hasHalf = rating - whole >= 0.5;
    return '🐾'.repeat(whole) + (hasHalf ? '½' : '');
  }

  // Pulls the first "City, ST" pair out of a location string, ignoring
  // street numbers, zips, and "(also X & Y)" / "& Murphy, NC" trailers —
  // matches the primary town the brewery is reviewed under.
  function extractTown(location) {
    const parts = location.split(',').map((s) => s.trim());
    for (let i = 1; i < parts.length; i++) {
      const m = parts[i].match(/^(GA|NC|TN|FL|SC)\b/);
      if (m) return `${parts[i - 1]}, ${m[1]}`;
    }
    return null;
  }

  // Keeps the map locked to the Southeast — covers FL, GA, AL, TN, NC, SC
  // with a little padding. Leaflet won't let you pan past this box or zoom
  // out further than the point where the box fills the view, so the map
  // can't ever wander out to a whole-country/whole-world view.
  const SOUTHEAST_BOUNDS = L.latLngBounds([24.5, -89.0], [37.0, -75.0]);

  Promise.all([
    fetch('data/breweries.json').then((r) => r.json()),
    fetch('data/towns.json').then((r) => r.json())
  ]).then(([breweries, towns]) => {
    const map = L.map('brewery-map', {
      scrollWheelZoom: false,
      maxBounds: SOUTHEAST_BOUNDS,
      maxBoundsViscosity: 1.0
    });
    // maxBounds alone stops panning past the box, but doesn't stop zooming
    // out past it — that needs an explicit minZoom, computed from the
    // container's actual size so it isn't a guessed magic number.
    map.setMinZoom(map.getBoundsZoom(SOUTHEAST_BOUNDS));
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(map);

    const byTown = {};
    breweries.forEach((b) => {
      const town = extractTown(b.location);
      if (!town || !towns[town]) return;
      (byTown[town] = byTown[town] || []).push(b);
    });

    const bounds = [];
    Object.keys(byTown).forEach((town) => {
      const coords = towns[town];
      bounds.push(coords);
      const list = byTown[town];

      const popupHtml = `<div class="map-popup">
        <div class="map-popup-town">${town}</div>
        ${list.map((b) => `
          <div class="map-popup-brewery">
            <div class="map-popup-name">${b.name}</div>
            <div class="map-popup-paws">${paws(b.rating)}</div>
            <p class="map-popup-quip">&ldquo;${b.quip}&rdquo;</p>
            <a class="map-popup-link" href="breweries/${b.slug}.html">Read the review &rarr;</a>
          </div>`).join('')}
      </div>`;

      const marker = L.marker(coords).addTo(map);
      marker.bindPopup(popupHtml, { maxWidth: 260, maxHeight: 260 });
      // Hover opens on desktop, tap opens on mobile (tap fires 'click').
      // No mouseout-close: it would fire as soon as the cursor leaves the
      // pin en route to the popup, before a "Read the review" link is
      // clickable. Leaflet already closes the previous popup when another
      // marker opens or the map background is clicked.
      marker.on('mouseover', () => marker.openPopup());
      marker.on('click', () => marker.openPopup());
    });

    if (bounds.length === 1) {
      map.setView(bounds[0], 11);
    } else if (bounds.length) {
      map.fitBounds(bounds, { padding: [30, 30] });
    }
  });
})();
