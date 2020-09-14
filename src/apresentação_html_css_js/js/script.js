document
  .getElementById("container-apresentation-close")
  .addEventListener("click", closeContainerApresentation);

function closeContainerApresentation() {
  startAnimation();
  setTimeout(function () {
    let container = document.getElementById("container-apresentation");
    container.remove();
  }, 2100);
}

function startAnimation() {
  let imgBot = document.getElementsByClassName("imgBot");
  imgBot[0].style.animationPlayState = "running";

  let container = document.getElementById("container-apresentation");
  container.style.animationPlayState = "running";

  setTimeout(function () {
    let iconChatbotHead = document.getElementsByClassName("icon-chatbot-head ");
    iconChatbotHead[0].style.animationPlayState = "running, running";

    let eye = document.getElementsByClassName("eye");
    eye[0].style.animationPlayState = "running";
    eye[1].style.animationPlayState = "running";
  }, 2000);
}
