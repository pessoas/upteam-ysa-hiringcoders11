import React, {useState} from 'react'

/*

interface CountdownProps { }

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ }) => {
  return (
    <div>
      <h1>Teste</h1>
    </div>
  )
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {},
}

export default Countdown

*/
interface ApresentationProps {}

{
  /* <script src="js/script.js"></script>
<link rel="stylesheet" href="/css/styles.css" /> */
}

const Countdown: StorefrontFunctionComponent<ApresentationProps> = ({}) => {

  const [chatActive, setChatActive] = useState(false);

  const toggleChat = () => {
    chatActive ? setChatActive(false) : setChatActive(true);
    console.log(chatActive)
  }
/*
  const chat = () => {
    if(chatActive) {
      console.log('hi')
      return (
        <div>
          <h1>hi</h1>
        </div>
      )
    }
    return(
      <div>
        <img src="https://upteam-ysa-chatbot.s3.amazonaws.com/photo_2020-09-12_10-22-01.jpg"/>
      </div>
    );
  }*/


  const imgStyle = {
      width: "100p",
      height: "70px"
  }

  if(chatActive) {
    return (
      <div>
        <button  onClick={() => toggleChat()}>
          <img style={imgStyle} src="https://upteam-ysa-chatbot.s3.amazonaws.com/headbot.png" />
        </button>

      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => toggleChat()}> <h1> ola </h1> </button>
      </div>
      )
  }
/*
  return (
    <div>
      <button  onClick={() => toggleChat()}>
        <img style={imgStyle} src="https://upteam-ysa-chatbot.s3.amazonaws.com/headbot.png" />
      </button>

    </div>
  );*/
};

Countdown.schema = {
  title: "editor.apresentation.title",
  description: "editor.apresentation.description",
  type: "object",
  properties: {},
};

export default Countdown;
