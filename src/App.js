
import React from "react";
import Amplify from "aws-amplify";
import {AmplifyChatbot as Chatbot} from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {



  return (
      <Chatbot
        title="Ysa"
        botName="ShoppingAssitant"
        welcomeMessage="Bem vindo, diga oi para começar"
        clearOnComplete={true}
        conversationModeOn={false}
        textEnabled={true}
        voiceEnabled={true}
      />
  );
}

export default App;