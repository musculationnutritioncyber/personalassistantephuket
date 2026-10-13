/* Meta Pixel — set your Pixel ID once below (digits only). Until then, nothing loads. */
(function () {
  var PIXEL_ID = '1347473683378093';
  if (!/^\d+$/.test(PIXEL_ID)) return;

  !function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
    t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
  }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', PIXEL_ID);
  fbq('track', 'PageView');

  // /thank-you/ is only reached after a completed application (Typeform redirect) → conversion event.
  var event = document.documentElement.getAttribute('data-pixel-event');
  if (event === 'Lead') fbq('track', 'Lead');
})();
