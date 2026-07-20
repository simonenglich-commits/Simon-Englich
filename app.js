/* Dealmaker Podcast — Klick-Tracking, Spotify-Embed nach Klick, Reveals, Naht-Zug, Gold-Swipe, leichter Parallax. */
(function () {
  "use strict";

  var ruhig = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
    if (!ruhig && ziel.classList.contains("plattform")) {
      ziel.classList.remove("klick-swipe");
      void ziel.offsetWidth;
      ziel.classList.add("klick-swipe");
      setTimeout(function () { ziel.classList.remove("klick-swipe"); }, 600);
    }
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

  /* Sanfte Scroll-Reveals, gestaffelt über data-delay */
  var verdeckte = document.querySelectorAll("[data-reveal]");
  if (!ruhig && "IntersectionObserver" in window) {
    var beobachter = new IntersectionObserver(function (eintraege) {
      eintraege.forEach(function (eintrag) {
        if (eintrag.isIntersecting) {
          var el = eintrag.target;
          el.style.transitionDelay = (parseInt(el.getAttribute("data-delay"), 10) || 0) + "ms";
          el.classList.add("sichtbar");
          beobachter.unobserve(el);
        }
      });
    }, { rootMargin: "0px 0px -4% 0px", threshold: 0.05 });
    verdeckte.forEach(function (el) { beobachter.observe(el); });
  } else {
    verdeckte.forEach(function (el) { el.classList.add("sichtbar"); });
  }

  /* Naht zieht sich pro Sektion, sobald sie ins Bild kommt */
  var sektionen = document.querySelectorAll("main .seg");
  if (!ruhig && "IntersectionObserver" in window) {
    var nahtBeobachter = new IntersectionObserver(function (eintraege) {
      eintraege.forEach(function (eintrag) {
        if (eintrag.isIntersecting) {
          eintrag.target.classList.add("naht-an");
          nahtBeobachter.unobserve(eintrag.target);
        }
      });
    }, { threshold: 0.12 });
    sektionen.forEach(function (s) { nahtBeobachter.observe(s); });
  } else {
    sektionen.forEach(function (s) { s.classList.add("naht-an"); });
  }

  /* Leichter Parallax: Bühne im Hero und die Porträts, nur Transforms */
  var buehnenBild = document.querySelector(".buehne-bild");
  var fotos = Array.prototype.slice.call(document.querySelectorAll(".foto-innen"));
  if ((buehnenBild || fotos.length) && !ruhig) {
    var geplant = false;
    var parallax = function () {
      geplant = false;
      var vh = window.innerHeight;
      if (buehnenBild) {
        var y = Math.min(window.scrollY, vh);
        buehnenBild.style.setProperty("--par", (y * 0.18).toFixed(1) + "px");
      }
      fotos.forEach(function (innen) {
        var r = innen.parentNode.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        var versatz = ((r.top + r.height / 2 - vh / 2) / vh) * -14;
        innen.style.transform = "translateY(" + versatz.toFixed(1) + "px)";
      });
    };
    window.addEventListener("scroll", function () {
      if (!geplant) {
        geplant = true;
        window.requestAnimationFrame(parallax);
      }
    }, { passive: true });
    parallax();
  }
})();
