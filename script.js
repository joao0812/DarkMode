const bt = document.getElementById('bt')
const modo = document.getElementById('status')
const titulo = document.getElementById('titulo')
const body = document.getElementById("body")
const btmodo = document.getElementById('btmodo')


const darkMode = () => {
    body.classList.toggle('darkMode')
    btmodo.classList.toggle('bt-darkMode')
    darktitle()
}

const darktitle = () => {
    if (body.classList.length > 1) {
        modo.textContent = 'ON'
    }
    else {
        modo.textContent = 'OFF'
    }
}

console.log(modo.textContent)
bt.addEventListener("click", darkMode)
