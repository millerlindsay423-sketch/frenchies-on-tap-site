// "Wear the Mission" collab tee pop-up. Shows once per visitor, on whichever page they land on,
// until END. Closing it (X, Esc, backdrop or "Maybe later") keeps it closed on later visits.
(function () {
  var KEY = 'promo-wear-the-mission-2026';
  var END = new Date('2026-12-01T00:00:00-05:00'); // last day: Nov 30 (Eastern)
  if (new Date() >= END) return;

  function seen() {
    try { return localStorage.getItem(KEY) === '1'; } catch (e) { return false; }
  }
  function remember() {
    try { localStorage.setItem(KEY, '1'); } catch (e) {}
  }
  if (seen()) return;

  var TEES = [
    { name: 'Buck Bald Brewing', where: 'Copperhill, TN &amp; Murphy, NC', slug: 'buckbald-brewing', img: 'buck-bald' },
    { name: 'Lazy Guy Distillery', where: 'Kennesaw, GA', slug: 'lazy-guy-distillery', img: 'lazy-guy' },
    { name: 'Horned Owl Brewing', where: 'Kennesaw, GA', slug: 'horned-owl-brewing', img: 'horned-owl' }
  ];

  function open() {
    var lastFocus = document.activeElement;
    var overlay = document.createElement('div');
    overlay.className = 'promo-overlay';
    overlay.innerHTML =
      '<div class="promo" role="dialog" aria-modal="true" aria-labelledby="promo-title">' +
        '<button type="button" class="promo-close" aria-label="Close">&times;</button>' +
        '<div class="promo-kicker">Collab tees &middot; November only</div>' +
        '<h2 id="promo-title">Wear the Mission</h2>' +
        '<p class="promo-blurb">Palmer and Rosie teamed up with 3 of their favorite pitstops on a set of collaboration tees. Every shirt raises money for the SHARE Military Initiative.</p>' +
        '<div class="promo-tees">' +
          TEES.map(function (t) {
            return '<a class="promo-tee" href="/breweries/' + t.slug + '.html">' +
              '<img src="/images/merch/collab-tee-' + t.img + '.jpg" alt="' + t.name + ' collab tee: Two Frenchies Walk Into a ' + (t.img === 'lazy-guy' ? 'Distillery' : 'Brewery') + '" loading="lazy">' +
              '<strong>' + t.name + '</strong><span>' + t.where + '</span></a>';
          }).join('') +
        '</div>' +
        '<p class="promo-price"><strong>$30 each.</strong> Pick one up at any of the 3 spots through November 30.</p>' +
        '<div class="promo-actions">' +
          '<a class="btn-primary" href="/brewery-directory.html">Find a pitstop</a>' +
          '<button type="button" class="promo-later">Maybe later</button>' +
        '</div>' +
      '</div>';

    function close() {
      remember();
      document.removeEventListener('keydown', onKey);
      document.documentElement.classList.remove('promo-open');
      overlay.remove();
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    function onKey(e) {
      if (e.key === 'Escape') close();
      if (e.key === 'Tab') { // keep focus inside the dialog
        var f = overlay.querySelectorAll('a, button');
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target.closest('.promo-close, .promo-later')) close();
      else if (e.target.closest('a')) remember(); // following a link counts as seen
    });
    document.addEventListener('keydown', onKey);
    document.documentElement.classList.add('promo-open');
    document.body.appendChild(overlay);
    overlay.querySelector('.promo-close').focus();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(open, 1200); });
  } else {
    setTimeout(open, 1200);
  }
})();
