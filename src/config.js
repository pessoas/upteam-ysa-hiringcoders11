import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";

const config = {
initialMessages: [
    createChatBotMessage("Olá, eu sou a Ysa e estou aqui para ajudá-lo. Qual modelo de TV te interessa?", {
      widget: "LearningOptions",
    }),
  ],
 
 widgets: [
     {
     	widgetName: "LearningOptions",
    	widgetFunc: (props) => <LearningOptions {...props} />,
     },
 ],
}

export default config