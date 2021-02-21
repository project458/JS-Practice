const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12"];

const text = document.getElementsByTagName("h2")[0];

const superEventHandler = {
  onMouseHere: function () {
    text.innerText = "The mouse is here!";
    text.style.color = colors[0];
  },
  onMouseLeave: function () {
    text.innerText = "The mouse is gone!";
    text.style.color = colors[1];
  },
  onResize: function () {
    text.innerText = "You just resized!";
    text.style.color = colors[2];
  },
  onRightClick: function () {
    text.innerText = "That was a right click!";
    text.style.color = colors[3];
  },
};

function init() {
  text.addEventListener("mouseenter", superEventHandler.onMouseHere);
  text.addEventListener("mouseleave", superEventHandler.onMouseLeave);
  window.addEventListener("resize", superEventHandler.onResize);
  window.addEventListener("contextmenu", superEventHandler.onRightClick);
}

init();
