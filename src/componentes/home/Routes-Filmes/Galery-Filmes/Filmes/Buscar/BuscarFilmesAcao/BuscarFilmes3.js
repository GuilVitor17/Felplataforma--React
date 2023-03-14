import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import '@brainhubeu/react-carousel/lib/style.css';
import '../../Acao/acao-modules.css'


const FilmesAcaoInfomacoes = ({titulo, img,Id ,descricaoMin, data}) => {

    const { id } = useParams()


     const saveId = () =>{

      localStorage.setItem("id", Id)

     }
    

  return (
    <div className="Acao">

           
              <div className="card">
                <img src={img} className="card-img-top" />
                <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <h6 className="card-text">{descricaoMin}</h6>
                  <h5 className="card-genero-1"><b>Ação</b></h5>
                  <h5 className="card-date">{data}</h5>
                  <Link className="Btn-livro" to={`/filmes/acaos3/${Id}`}><button type="button" onClick={saveId} className="btn btn-primary">
                    Ver filme  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
  <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
</svg>
                  </button></Link>
                </div>

              
              </div>

            
               

        



    </div>
  )
}

export default FilmesAcaoInfomacoes