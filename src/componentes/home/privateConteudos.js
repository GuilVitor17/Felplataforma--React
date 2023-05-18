import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import  './privateConteudos-modules.css'
import ConteudoLivros from '../img/ConteudosLivros.png'
import ConteudoFilmes from '../img/ConteudosFilme.png'

const RoutesPrivatesConteudo = () => {

    return(
         <div className="Rota-Privada-Conteudo">

            <div className="Caixa-Conteudos">

                <div className="div-conteudo-livros">
                    <div className="div-conteudo-image"><img src={ConteudoFilmes} /></div>
                    <div className="div-conteudo-nome"><p>FILMES</p></div>
                </div>

                <div className="div-conteudo-filmes">
                  <div className="div-conteudo-image"><img src={ConteudoLivros} /></div>
                  <div className="div-conteudo-nome"><p>LIVROS</p></div>
                </div>

              
            </div> 
            
       
        </div>
    )
}

export default RoutesPrivatesConteudo