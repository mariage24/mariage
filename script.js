function checkAnswer() {

  const input =
    document
      .getElementById("answer")
      .value
      .toLowerCase()
      .trim();

  const message =
    document.getElementById("message");

  const eventPanel =
    document.getElementById("eventPanel");

  const logementPanel =
    document.getElementById("logementPanel");

  const domainePanel =
    document.getElementById("domainePanel");

  // Correct answer
  if (input === "cm24042027") {

    message.innerHTML =
      "Bravo. Tu es devenu un vrai cryptographe ! Scroll en bas pour découvrir les détails.";

    message.style.color =
      "#86efac";

    if (eventPanel) {
      eventPanel.classList.remove("locked");
      eventPanel.classList.add("unlocked");
    }

    if (logementPanel) {
      logementPanel.classList.remove("locked");
      logementPanel.classList.add("unlocked");
    }

    if (domainePanel) {
      domainePanel.classList.remove("locked");
      domainePanel.classList.add("unlocked");
    }

  } else {

    message.innerHTML =
      "Pas de chance. Réessaie !";

    message.style.color =
      "#fca5a5";
  }
}

// Initialize Leaflet map for logement if available
document.addEventListener("DOMContentLoaded", function () {
  if (typeof L === "undefined") return;

  const mapEl = document.getElementById("map");
  if (!mapEl) return;

  const places = [
    { name: "La Ciotat", coords: [43.1736, 5.6050] },
    { name: "Cyreste", coords: [43.1769, 5.6190] },
    { name: "Saint-Cyr-sur-Mer", coords: [43.1709, 5.7048] },
    { name: "Cuges-Les-Pins", coords: [43.3205, 5.6144] }
  ];

  const map = L.map(mapEl).setView([43.22, 5.66], 11);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const markers = places.map(p => L.marker(p.coords).addTo(map).bindPopup(p.name));
  const group = L.featureGroup(markers);
  map.fitBounds(group.getBounds().pad(0.3));
});