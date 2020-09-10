import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "./components/LearningOptions/Options";

const config = {
initialMessages: [
    createChatBotMessage("Olá, eu sou a Ysa e estou aqui para ajudá-lo. Qual modelo de TV te interessa?", {
      widget: "Options",
    }),
  ],
 
 widgets: [
     {
     	widgetName: "Options",
    	widgetFunc: (props) => <Options {...props} />,
     },
 ],
}

export default config