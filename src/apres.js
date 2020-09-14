import React from "react";
import "./presentation.css";

function apresentation() {
  return (
    <>
      <div
        id="container-apresentation"
        class="container-apresentation"
        type="button"
      >
        <div
          id="container-apresentation-close"
          class="container-apresentation-close"
        >
          <span>X</span>
        </div>
        <div class="box-message">
          <div class="typewriter-text">
            Seja bem vindo(a), estou muito feliz
          </div>
          <div class="typewriter-text">
            que você veio! Meu nome é
            <strong>
              <abbr title="Your System Assistent">Ysa</abbr>
            </strong>{" "}
            e estou
          </div>
          <div class="typewriter-text">
            aqui para auxiliar nas suas compras.
          </div>
          <div class="typewriter-text">
            Quando precisar é só chamar, combinado?
          </div>
          <div class="typewriter-text">
            Estarei no canto direito da sua tela.
          </div>
          <div class="typewriter-text">Boas compras!!! ;)</div>
        </div>

        <div class="container-bot-and-message"></div>
        <div class="imgBot"></div>
      </div>

      <div class="icon-chatbot-head">
        <div class="icon-chatbot-ear">
          <div></div>
          <div></div>
        </div>
        <div class="icon-chatbot-eye">
          <div class="eye"></div>
          <div class="eye"></div>
        </div>
        <div class="icon-chatbot-mouth"></div>
      </div>
      <script src="js/script.js"></script>
    </>
  );
}
export default apresentation;
