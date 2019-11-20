// fetch(url, {})
// .then(r => r.json())
// .then((theActualResponse) => {
  // Do whatever you want with the theActualResponse
// })

let button = document.querySelector("#hello-button")
let foxesUL = document.querySelector("#foxes")

button.addEventListener('click', (evt) => {
  fetch("http://localhost:3000/foxes/random")
    .then(res => res.json())
    .then((fox) => {
      let newFoxLi = document.createElement("li")
      let newFoxImg = document.createElement("img")

      newFoxImg.src = fox.img_url
      newFoxImg.alt = fox.name

      newFoxLi.append(newFoxImg)
      foxesUL.append(newFoxLi)
    })
})
