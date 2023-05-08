import './styles.sass'
import createHome from './home'
import createMenu from './menu'
import createContact from './contact'

createHome()    // start on home page

const home = document.getElementById('homeButton')
const menu = document.getElementById('menuButton')
const contact = document.getElementById('contactButton')

home.addEventListener('click', createHome)
menu.addEventListener('click', createMenu)
contact.addEventListener('click', createContact)