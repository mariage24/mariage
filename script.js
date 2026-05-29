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

  // Correct answer
  if (input === "cm24042027") {

    message.innerHTML =
      "Correct. The event has been revealed.";

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

  } else {

    message.innerHTML =
      "Wrong answer.";

    message.style.color =
      "#fca5a5";
  }
}