
import './App.css'
import Home from './components/Home/Home.jsx'
import Header from './components/Header/Header.jsx'



function App() {
  const dishes = [
    {
      id: 1,
      name: 'Spaghetti Carbonara',
      description: 'Un clásico plato italiano que combina espaguetis con una salsa cremosa hecha con huevos, queso Pecorino Romano, panceta y pimienta negra.',
      price: 12
    },
    {
      id: 2,
      name: 'Tacos al Pastor',
      description: 'Deliciosos tacos mexicanos rellenos de carne de cerdo marinada en una mezcla de chiles, achiote y jugo de piña, servidos con piña, cebolla y cilantro en una tortilla de maíz.',
      price: 8
    },
    {
      id: 3,
      name: 'Sushi Nigiri',
      description: 'Un plato japonés tradicional que consiste en una pequeña bola de arroz de sushi cubierta con una lámina de pescado fresco, como salmón, atún o camarón, a veces con un poco de wasabi entre el arroz y el pescado.',
      price: 15
    },
    {
      id: 4,
      name: 'Paella Valenciana',
      description: 'Un famoso plato español de la región de Valencia, hecho con arroz, azafrán, pollo, conejo, judías verdes, garrofón (judión) y a veces mariscos.',
      price: 20
    },
    {
      id: 5,
      name: 'Butter Chicken (Murgh Makhani)',
      description: 'Un plato indio popular que consiste en trozos de pollo cocidos en una rica y cremosa salsa de tomate con mantequilla, especias y nata.',
      price: 18
    },
    {
      id: 6,
      name: 'Bouillabaisse',
      description: 'Una tradicional sopa de pescado originaria de Marsella, Francia, hecha con una variedad de pescados y mariscos, cocidos en un caldo sabroso con tomate, hinojo, ajo, azafrán y hierbas.',
      price: 25
    },
    {
      id: 7,
      name: 'Pad Thai',
      description: 'Un plato tailandés muy conocido que mezcla fideos de arroz salteados con tofu o pollo, gambas, huevo, brotes de soja, cacahuetes triturados y lima.',
      price: 14
    },
    {
      id: 8,
      name: 'Feijoada',
      description: 'Un abundante guiso brasileño hecho con frijoles negros y una variedad de carnes de cerdo, como costillas, salchichas y panceta, acompañado de arroz, naranjas y col rizada.',
      price: 22
    },
    {
      id: 9,
      name: 'Moussaka',
      description: 'Un plato griego que consiste en capas de berenjena asada, carne de cordero sazonada, patatas y una salsa bechamel cremosa, horneado hasta que esté dorado.',
      price: 17
    },
    {
      id: 10,
      name: 'Peking Duck',
      description: 'Un icónico plato chino que presenta pato laqueado crujiente servido con crepes finos, cebolla verde, pepino y una salsa dulce de hoisin.',
      price: 30
    }
  ]
  
  return (
      <div>
        <Header/>
        <Home dishes={dishes} />
   
      </div>
  )
}

export default App
