import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Props from '../../componentes/PropsDiv';
import './navbar-modules.css'
import Logomarca from '../img/LogoSiteBranco.png'
import { Link } from "react-router-dom";

const Navbar = () => {

  const IdUser = localStorage.getItem("id")

 
  return (
    <div className="div-navbar">
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={Logomarca} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to={'/userPosts'} className="post"><s>link</s></Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="nav-link" to='/livros/user'><li className="nav-item">
                <a id="homepage" aria-current="page">Home</a>
              </li></Link>
              {/* <li className="nav-item dropdown">
              <Link className="dropdown-item" to='/livros/destaque'><a>
                 Livros 
                </a></Link>
                <ul className="dropdown-menu">
                  <Link className="dropdown-item" to='/livros/destaque'><li><a>Destaques</a></li></Link>
                  <Link className="dropdown-item" to='/livros/aventuras'><li><a>Livros - Aventura</a></li></Link>
                  <Link className="dropdown-item" to='/livros/romances'><li><a>Livros - Romance</a></li></Link>
                  <Link className="dropdown-item" to='/livros/religiaos'><li><a>Livros - Religiao</a></li></Link>
                  <Link className="dropdown-item" to='/livros/infantils'><li><a>Livros - Infantil</a></li></Link>
                  <Link className="dropdown-item" to='/livros/historias'><li><a>Livros - Historia</a></li></Link>
                  <Link className="dropdown-item" to='/livros/literaturas'><li><a>Livros - Literatura</a></li></Link>
                </ul>
              </li> */}
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Filmes
                </a>
                <ul className="dropdown-menu">
                  <Link className="dropdown-item" to='/filmes/destaques'><li><a>Destaques</a></li></Link>
                  <Link className="dropdown-item" to='/filmes/acaos'><li><a>Filmes - Acao</a></li></Link>
                  <Link className="dropdown-item" to='/filmes/Dramas'><li><a>Filmes - Drama</a></li></Link>
                  <Link className="dropdown-item" to='/filmes/terrors'><li><a>Filmes - Terror</a></li></Link>
                  <Link className="dropdown-item" to='/filmes/comedias'><li><a>Filmes - Comedia</a></li></Link>
                  <Link className="dropdown-item" to='/filmes/infantils'><li><a>Filmes - Desenho</a></li></Link>
                  <Link className="dropdown-item" to='/filmes/romances'><li><a>Filmes - Romance</a></li></Link>
                </ul>
              </li> */}
               {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Logo
                </a>
                <ul className="dropdown-menu">
                 <Link className="dropdown-item" to='/logos'><li><a>Logos Marcas</a></li></Link> 
                </ul>
              </li>  */}
               <li className="nav-item">
                <Link className="nav-link" to='/livros/destaque'><a>Livros</a></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/filmes/destaques'><a>Filmes</a></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/contato/'><a>Contato</a></Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to={`/minhaconta/${IdUser}`}><button type="button" id="buttonlogin" class="btn btn-primary">Minha Conta <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg></button> </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar