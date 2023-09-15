import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { handleTheme } = useContext(ContextGlobal);

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="contact">Contact</Link>
          </li>
          <li>
              <Link to="favs">Favs</Link>
          </li>
      </ul>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar