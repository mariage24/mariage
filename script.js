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