function toggleChat() {
    const box = document.getElementById("chatBox");
    box.style.display =
        box.style.display === "none" || box.style.display === ""
        ? "flex"
        : "none";
}

function sendMessage() {
    const input = document.getElementById("input");
    const messages = document.getElementById("messages");

    if (!input.value.trim()) return;

    const user = document.createElement("div");
    user.className = "message user";
    user.textContent = input.value;
    messages.appendChild(user);

    setTimeout(() => {
        const bot = document.createElement("div");
        bot.className = "message bot";
        bot.textContent = "We're building powerful tools — stay tuned 🚀";
        messages.appendChild(bot);

        messages.scrollTop = messages.scrollHeight;
    }, 500);

    input.value = "";
}
