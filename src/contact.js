function createContact() {
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
    address.textContent = 'London, 221B Baker Street'
    const map = document.createElement('img')
    map.src = './map.png'

    contacts.append(getIn, tel, email, address, map)
    container.appendChild(contacts)
}


export default createContact 