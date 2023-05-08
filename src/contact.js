import locationMap from './map.jpg'
function createContacts() {
    const container = document.getElementById('content')
    container.replaceChildren()  // clear dom

    const contacts = document.createElement('div')
    contacts.classList.add('contacts')

    const getIn = document.createElement('h1')
    getIn.textContent = 'Get in touch!'
    const tel = document.createElement('p')
    tel.textContent = '+99 999 99 99'
    const email = document.createElement('p')
    email.textContent = 'pizzayou@email.com'
    const address = document.createElement('p')
    address.textContent = '221B Baker Street, London'
    const map = document.createElement('img')
    map.src = locationMap
    map.alt = 'map of location'

    contacts.append(getIn, tel, email, address, map)
    container.appendChild(contacts)
}


export default createContacts 