import { prepareMessageHtml } from "./function";

export class Conversation {
    constructor(parentElement) {
        this.parentElement = parentElement;
    }

    addMessage(message) {
        this.parentElement.innerHTML += prepareMessageHtml(message)
    }
}