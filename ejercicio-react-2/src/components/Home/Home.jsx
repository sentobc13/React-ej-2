

const Home = (props) => {
    const printDishes = props.dishes.map((dish) => {
    return <div>
        <p>Plato: {dish.name}</p>
        <p>Descripción: {dish.description}</p>
        <p>Precio: {dish.price}€</p>
    </div>
})

  return  <div> {printDishes} </div>
  
}

export default Home
  