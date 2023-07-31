let btn = document.querySelector(".btn");

btn.addEventListener("mouseover", event => {
  let xPosition = event.pageX - btn.offsetLeft;
  let yPosition = event.pageY - btn.offsetTop;

  btn.style.setProperty("--xPos", xPosition + "px");
  btn.style.setProperty("--yPos", yPosition + "px");
});
