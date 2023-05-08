function createHome() {
    const container = document.getElementById('content')
    container.replaceChildren()  // clear dom

    const introduction = document.createElement('div')
    introduction.classList.add('introduction')

    const name = document.createElement('h1')
    name.textContent = 'Pizza You'
    const since = document.createElement('p')
    since.textContent = 'Since: 1992'
    const description = document.createElement('p')
    description.classList.add('description')
    description.textContent = 'Pizza You is a family owned business pruducing high quality, hand-made pizzas. We are proud that our food makes our customers come back for another serving. All pizzas are made from fresh, locally sourced ingredients.'

    introduction.append(name, since, description)
    container.appendChild(introduction)
}

export default createHome