//Navbar
const toggle_btn = document.getElementsByClassName('toggle-btn')[0]
const nav_links = document.getElementsByClassName('navbar-links')[0]

toggle_btn.addEventListener('click', () =>{
    nav_links.classList.toggle('actv')
})