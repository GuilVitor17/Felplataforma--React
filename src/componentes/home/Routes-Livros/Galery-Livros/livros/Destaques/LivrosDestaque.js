import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './destaque-modules.css'


const LivrosDestaqueInfomacoes = ({ titulo, img,imgCapa, Id, descricaoMin, data, genero }) => {


  const saveId = () => {

    localStorage.setItem("id", Id)

  }


  return (
    <div className="Destaque">

      <div class="card text-bg-dark">
        <img src={imgCapa} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h5 class="card-textt">{titulo}</h5>
          <h6 class="card-titlee"><b>DESTAQUES</b></h6>
          <h5 class="card-text">{descricaoMin}</h5>
          <h5 class="card-textt-data"><small>{data}</small></h5>
          <Link className="Btn-filme-destaque" to={`/livros/destaque/${Id}`}><button type="button" onClick={saveId} className="btn btn-primary">
          Ver livro  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-bookmark-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
</svg>
        </button></Link>
        <h5 class="card-genero">{genero}</h5>

        </div>
      </div>

    </div>
  )
}

export default LivrosDestaqueInfomacoes