import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './destaque-modules.css'


const FilmesDestaqueInfomacoes = ({ titulo,imgCapa, Id, descricaoMin, data, genero }) => {


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
          <Link className="Btn-filme-destaque" to={`/filmes/destaque/${Id}`}><button type="button" onClick={saveId} className="btn btn-primary">
          Ver filme  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
  <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
</svg>
        </button></Link>
        <h5 class="card-genero">{genero}</h5>

        </div>
      </div>

    </div>
  )
}

export default FilmesDestaqueInfomacoes