class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  
  greet() {
    const greetingMessage = this.createChatBotMessage("Olá, em que posso ajudar?")
    this.updateChatbotState(greetingMessage)
  }
  
  updateChatbotState(message) {
 

    
   this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider;
