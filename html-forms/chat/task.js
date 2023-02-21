'use strict'

const chat = document.querySelector('.chat-widget');
const chatContainer = document.querySelector('.chat-widget__messages-container');
const messages = document.querySelector('.chat-widget__messages');
const input = document.querySelector('.chat-widget__input');
let i = 0;

function scrollChat() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function answerRobot() {
    const messagesRobot = [
        'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
        'Вы не купили ни одного товара, чтобы так с нами разговаривать!',
        'Кто тут?',
        'Вы о чем?',
        'Мы устали, ответим позже',
    ]
    i = (i + 1) % messagesRobot.length;
    let time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    messages.innerHTML += `
        <div class="message">
            <div class="message__time">${time}</div>
            <div class="message__text">
                ${messagesRobot[i]}
            </div>
        </div>`;
    scrollChat();
}

function chatActive(e) {
    let value = input.value.trim();
    if(e.key === "Enter" && value !== '') {
        let time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        messages.innerHTML += `
            <div class="message_client">
                <div class="message__time">${time}</div>
                <div class="message__text">
                    ${value}
                </div>
            </div>`;
        input.value = '';
        scrollChat();
        setTimeout(answerRobot, 1000);
    }
}

chat.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');
});

input.addEventListener('keydown', chatActive);