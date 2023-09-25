//this file imports everything together
import { greetUser } from "./function";
import { conversation } from "./data";

//1 parse json
//const chat = JSON.parse(conversation_json);

//2 target element in HTML
const conversationElement = document.querySelector(".conversation");

//3 iteration
conversation.forEach((message, index) => {

    //4 set timeout
    setTimeout(() => {
        conversationElement.innerHTML +=
            `<div class="message message--${message.side}">
        <div class="message__text">
            ${message.text}
        </div>
    </div>`
    }, 1000 * index);
});

greetUser();