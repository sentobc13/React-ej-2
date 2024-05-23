import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav class="menu">
      <Link to="/">Home</Link>
      <Link to="/reserva">Rserva</Link>
      <Link to="/sobrenosotros">Sobre Nostros</Link>
    </nav>
  )
}

export default Header