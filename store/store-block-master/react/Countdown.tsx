import React from 'react'

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
  return (
    <div>
      <div id="container-apresentation" className="container-apresentation">
        <div
          id="container-apresentation-close"
          className="container-apresentation-close"
        >
          <span>X</span>
        </div>
        <div className="box-message">
          <div className="typewriter-text">
            Seja bem vindo(a), estou muito feliz
          </div>
          <div className="typewriter-text">
            que você veio! Meu nome é
            <strong>
              <abbr title="Your System Assistent">Ysa</abbr>
            </strong>{" "}
            e estou
          </div>
          <div className="typewriter-text">
            aqui para auxiliar nas suas compras.
          </div>
          <div className="typewriter-text">
            Quando precisar é só chamar, combinado?
          </div>
          <div className="typewriter-text">
            Estarei no canto direito da sua tela.
          </div>
          <div className="typewriter-text">
            Boas compras!!! &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
            &nbsp &nbsp ;)
          </div>
        </div>

        <div className="container-bot-and-message"></div>
        <div className="imgBot"></div>
      </div>

      <div className="icon-chatbot-head">
        <div className="icon-chatbot-ear">
          <div></div>
          <div></div>
        </div>
        <div className="icon-chatbot-eye">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
        <div className="icon-chatbot-mouth"></div>
      </div>
    </div>
  );
};

Countdown.schema = {
  title: "editor.apresentation.title",
  description: "editor.apresentation.description",
  type: "object",
  properties: {},
};

export default Countdown;
