//Efeito Carrosel

let radio = document.querySelector('.manual-btn')
let cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)


function proximaImg() {
    cont++

    if (cont > 3) {
        cont = 1
    }

    document.getElementById('radio' + cont).checked = true
}

// Movimento do Scroll
// lógica de programação, que pode ser reutilizada, MOVIMENTO DO SCROLL
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
})


const elements = document.querySelectorAll('.hidden')
elements.forEach((element) => myObserver.observe(element))


// Menu mobile

let menuDiv = document.getElementById('menu-mobile')
let btnAnimar = document.getElementById('btn-menu')

menuDiv.addEventListener('click', animarMenu)

function animarMenu (){
    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativo')

  
}
