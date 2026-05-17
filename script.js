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

  // Correct answer
  if (input === "moon") {

    message.innerHTML =
      "Correct. The event has been revealed.";

    message.style.color =
      "#86efac";

    eventPanel.classList.remove("locked");

    eventPanel.classList.add("unlocked");

  } else {

    message.innerHTML =
      "Wrong answer.";

    message.style.color =
      "#fca5a5";
  }
}