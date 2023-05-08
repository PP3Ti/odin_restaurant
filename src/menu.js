const Pizza = (name, toppings) => {
    return {name, toppings}
}

function createMenu() {
    const container = document.getElementById('content')
    container.replaceChildren()  // clear dom

    let pizzas = []
    const margherita = Pizza('Pizza Margherita', 'tomato sauce, mozzarella, basil')
    const funghi = Pizza('Pizza al Funghi', 'tomato sauce, mushrooms, mozzarella, parsley')
    const prosciutto = Pizza('Pizza Porsciutto', 'tomato sauce, prosciutto ham, mozzarella, basil')
    const primavera = Pizza('Pizza Primavera', 'tomato sauce, prosciutto ham, cherry tomatoes, mozzarella')
    const diavola = Pizza('Pizza Diavola', 'tomato sauce, spicy salami, hot peppers, mozzarella')
    const fruttiDiMare = Pizza('Pizza frutti di mare', 'tomato sauce, mixed seafood, mozzarella')
    pizzas.push(margherita, funghi, prosciutto, primavera, diavola, fruttiDiMare)  

    for (let i = 0; i < pizzas.length; i++) {
        const pizza = document.createElement('div')
        pizza.classList.add('pizza')
        const pizzaName = document.createElement('h1')
        pizzaName.textContent = pizzas[i].name
        const pizzaDescription = document.createElement('p')
        pizzaDescription.textContent = pizzas[i].toppings

        pizza.append(pizzaName, pizzaDescription)
        container.appendChild(pizza)
    }
}


export default createMenu