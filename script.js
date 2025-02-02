const messages = [
    "Apakah kamu yakin?",
    "Sangat yakin??",
    "Apakah kamu serius?",
    "Tolong Lah Abangmu ini...",
    "Coba pikirkan!",
    "Jika kamu bilang tidak, Abang akan sangat sedih...",
    "Abang akan sangat sedih...",
    "Abang akan sangat sangat sangat sedih...",
    "Baiklah, Abang akan berhenti bertanya...",
    "Hanya bercanda, katakan ya, tolong! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}