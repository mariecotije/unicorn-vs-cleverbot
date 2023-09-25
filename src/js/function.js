//exports functions

export const prepareMessageHtml = (message) => {
    return `
    <div class="message message--${message.side}" >
        <div class="message__text">
            ${message.text}
        </div>
    </div>
    `
};