import { Link } from 'react-router-dom'
import './menu.css'

const Menu = () =>{
  return(
    <ul className="menu">
      <li className='item'>
        <Link className="link" to="/">Sobre</Link>
      </li>
      <li className='item'>
        <Link  className="link" to="/diario">Diario</Link>
      </li>
      <li className='item'>
        <Link className="link" to="/portfolio">Portfolio</Link>
      </li>
      <li className='item'>
        <Link className="link" to="/comentarios">Comentários</Link>
      </li>
    </ul>
  )
}

export default Menu