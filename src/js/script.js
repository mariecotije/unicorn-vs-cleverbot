//this file imports everything together

import { conversation_json } from "./data";
import { Conversation } from "./conversation";

//1 parse json
const chat = JSON.parse(conversation_json);

//2 target element in HTML
const conversationElement = document.querySelector(".conversation");
//taking container element
const conversation = new Conversation(conversationElement);

//3 iteration
chat.forEach((message, index) => {
    //4 set timeout
    setTimeout(() => {
        conversation.addMessage(message);  //using method from class Conversation
    }, 500 * index);
});
