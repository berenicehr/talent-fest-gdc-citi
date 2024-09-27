import React from "react";
import logOut from "../assets/img/logOut.png";
import { NavUser } from "./NavUser";

export const HeaderNav = () => {
  const date = new Date();
  return (
    <header className="header-nav">
      <section className="section-nav">
        <p className="zoom-fx">{date.toUTCString()}</p>

        <ul className="nav nav-pills ">
          <li className="nav-item ">
            <a
              className="nav-link active zoom-fx"
              aria-current="page"
              href="https://www.banamex.com/es/localizador-sucursales.html"
            >
              SUCURSALES
            </a>
          </li>
          <li className="float-left">|</li>
          <li className="nav-item dropdown">
          
            <a
              className="nav-link dropdown-toggle zoom-fx"
              data-bs-toggle="dropdown"
              href="algo"
              role="button"
              aria-expanded="false"
            >
              CONTÁCTANOS
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="https://bancanet.banamex.com/contacto/llamanos.html"
                >
                  <i className="bi bi-chat-right-fill"></i>Llámanos
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item zoom-fx"
                  href="https://bancanet.banamex.com/contacto/queremos-escucharte.html"
                >
                  <i className="bi bi-telephone-outbound-fill"></i>Queremos
                  escucharte
                </a>
              </li>
            </ul>
          </li>
          <li className="float-left">|</li>
          <li className="nav-item">
            <a
              className="nav-link nav-help zoom-fx"
              href="https://www.banamex.com/SoporteBanamex/index.html?lid=MX|BNP3|MULTISALDOS-TextoBotton-02102017-AyudaBNP-irLearningCenter-ES"
            >
              AYUDA
            </a>
          </li>
        </ul>
      </section>
      <section className="conteiner-nav-bar">
        <img
          src="https://bancanet.banamex.com/JFP/regional/images/layout/brand-citibanamex-full-color-reversed.svg"
          alt="link-Citibanamex"
          className="Brand-citibanamex"
        />
        <ul>
          <li className="float">
            |
            <a className="bancanet zoom-fx" href="https://www.banamex.com/">
              BancaNet
            </a>
          </li>
        </ul>
        <img src={logOut} alt="logOut" className="logo-out" />
        <p className="text-logout zoom-fx">Cerrar sesión</p>
      </section>
      <section className="container-welcome">
        <h1 className="welcome zoom-fx"> ¡Hola usuario!</h1>
        <p className="last-access zoom-fx">último acceso {date.toDateString()}</p>
      </section>
      <NavUser />
    </header>
  );
};
