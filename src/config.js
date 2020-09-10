import { createChatBotMessage } from 'react-chatbot-kit';

const config = { 
  botName: "YsaBot",
  initialMessages: [createChatBotMessage("Oi, eu sou a Ysa e esou aqui para ajudá-lo em sua compra de TV's.")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
}

export default config