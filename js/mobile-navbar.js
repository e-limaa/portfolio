const menuMobile = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('btn-menu')

menuMobile.addEventListener('click', animar)

function animar(){
  menuMobile.classList.toggle('abrir')
  btnAnimar.classList.toggle('ativar')
}