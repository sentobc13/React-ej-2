import { Link } from "react-router-dom"
import './Header.css';

const Header = () => {
  return (
    <nav className="menu">
      <Link to="/">Home</Link>
      <Link to="/reserva">Reserva</Link>
      <Link to="/sobrenosotros">Sobre Nostros</Link>
    </nav>
  )
}

export default Header