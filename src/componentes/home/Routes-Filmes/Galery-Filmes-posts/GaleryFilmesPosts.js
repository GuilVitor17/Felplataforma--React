import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import './Galery-modules.css'
import Comediasfilmes from "./Filmes/Comedia/Comedia";
import FilmesAcao from "./Filmes/Acao/Acao";
import Infantilfilmes from "./Filmes/Desenho/Infantil";
import Dramafilmes from "./Filmes/Drama/Drama";
import Romancefilmes from "./Filmes/Romance/Romance";
import Terrorfilmess from "./Filmes/Terror/terror";


const GaleryFilmesPosts = () => {

    return (
        <div className="Galery">

            

            <div className="carrossel-Filme-destaque-edit">

            <div className="generoPostFilmes">
                    <Link className="linkpostfilme" to={'/posts/filmes/acaoPost'}><b>Filmes-Acao</b></Link>
                    <Link className="linkpostfilme" to={'/posts/filmes/comediaPost'}><b>Filmes-Comedia</b></Link>
                    <Link className="linkpostfilme" to={'/posts/filmes/romancePost'}><b>Filmes-Romance</b></Link>
                    <Link className="linkpostfilme" to={'/posts/filmes/dramaPost'}><b>Filmes-Drama</b></Link>
                    <Link className="linkpostfilme" to={'/posts/filmes/terrorPost'}><b>Filmes-Terror</b></Link>
                    <Link className="linkpostfilme" to={'/posts/filmes/desenhoPost'}><b>Filmes-Desenho</b></Link>
            </div>
            <Link className='Voltar' to='/posts'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg></Link>
            <Link className='Voltar' to='/logomarcasPost'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg></Link>
            </div>

            <div className="caixaFilmes">
                <div className="Aventuras"><Comediasfilmes /></div>
                <div className="Romance"><FilmesAcao /></div>
                <div className="Religiao"><Infantilfilmes/></div>
                <div className="Infantil"><Dramafilmes/></div>
                <div className="Historia"><Romancefilmes /></div>
                {/* <div className="Literatura"><Terrorfilmess /></div> */}
            </div>


        </div>
    )
}

export default GaleryFilmesPosts