/* Dealmaker Podcast — drei Aufgaben: Klick-Tracking, Spotify-Embed nach Klick, sonst nichts. */
(function () {
  "use strict";

  var puffer = [];

  function track(event, props) {
    var geliefert = false;
    if (window.dataLayer && typeof window.dataLayer.push === "function") {
      window.dataLayer.push(Object.assign({ event: event }, props));
      geliefert = true;
    }
    if (typeof window.plausible === "function") {
      window.plausible(event, { props: props });
      geliefert = true;
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", event, props);
      geliefert = true;
    }
    if (!geliefert) {
      puffer.push({ event: event, props: props });
    }
  }

  document.addEventListener("click", function (e) {
    if (!(e.target instanceof Element)) return;
    var ziel = e.target.closest("[data-track]");
    if (!ziel) return;
    track(ziel.getAttribute("data-track"), {
      plattform: ziel.getAttribute("data-plattform"),
      position: ziel.getAttribute("data-position")
    });
  });

  var knopf = document.getElementById("spotify-laden");
  if (knopf) {
    knopf.addEventListener("click", function () {
      var flaeche = document.getElementById("spotify-embed");
      if (!flaeche) return;
      var rahmen = document.createElement("iframe");
      rahmen.src = "https://open.spotify.com/embed/show/7ryUYTBmHIFeHBkuj0K6Xt?theme=0";
      rahmen.title = "Spotify: Dealmaker Podcast";
      rahmen.setAttribute("loading", "lazy");
      rahmen.setAttribute("allow", "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture");
      flaeche.replaceChildren(rahmen);
      track("embed_load", { plattform: "spotify" });
    });
  }
})();
