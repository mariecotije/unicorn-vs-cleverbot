//this file imports everything together
import { prepareMessageHtml } from "./function";
import { conversation_json } from "./data";

//1 parse json
const chat = JSON.parse(conversation_json);

//2 target element in HTML
const conversationElement = document.querySelector(".conversation");

//3 iteration
chat.forEach((message, index) => {
    //4 set timeout
    setTimeout(() => {
        conversationElement.innerHTML += prepareMessageHtml(message)
    }, 1000 * index);
});
