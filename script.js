function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}

//pegar a tag img

//subistituir a imagem
//se tiver lightmode adicionar a imagem light
//se tiver sem lightmode, manter a imagem normal
