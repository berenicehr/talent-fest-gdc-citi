import React from 'react'
import { Link } from 'react-router-dom'

export const NavUser = () => {
    return (
  
        <section className="shadow p-3 mb-5 bg-white container-nav-user">  
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
          <i className="bi bi-house-door"></i>
            <p className="nav-home zoom-fx" aria-current="page">
            <Link to="/"> Inicio </Link> 
            </p>
          </li>
          <li className="nav-item">
          <i className="bi bi-coin"></i>
            <p className="nav-transfer zoom-fx">
            <Link to="services"> Transferencias y pagos </Link>
            </p>
          </li>
          <li className="nav-item">
          <i className="bi bi-graph-up-arrow"></i>
            <Link className="nav-investment zoom-fx" to="#">
              Inversiones
            </Link>
          </li>
          <li className="nav-item">
          <i className="bi bi-credit-card"></i>
            <p className="nav-others zoom-fx">
             Otros productos
            </p>
          </li>
          <li className="nav-item">
          <i className="bi bi-gear"></i>
            <p className="nav-setting zoom-fx">
              Configuración
            </p>
          </li>
          <li className="nav-item">
          <i className="bi bi-question-circle zoom-fx"></i>
            <p className="nav-help zoom-fx">
              Ayuda
            </p>
          </li>
        </ul>
      </section>
    )
}
