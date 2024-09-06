function changeColor() {
    const colors = ["#00FF00", "#0000FF", "#FF0000"]; // verde, azul y rojo
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.style.color = randomColor;
  }
  
  // Agrega un evento de clic a todos los títulos <h5>
  document.querySelectorAll("h5").forEach((h5) => {
    h5.addEventListener("click", changeColor);
  });