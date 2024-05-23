import React from 'react';
import './Home.css';

const Home = (props) => {
    const printDishes = props.dishes.map((dish) => {
    return <div key={dish.id}>
        <p>Plato: {dish.name}</p>
        <p>Descripción: {dish.description}</p>
        <p>Precio: {dish.price}€</p>
    </div>
})

  return  <div> 
    <h2>Menú</h2>
    {printDishes} 
    </div>
  
}

export default Home
  