import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import './Galery-modules.css'
import FilmesTerror1 from "./Filmes/Terror/Terror1/terror";
import FilmesTerror2 from "./Filmes/Terror/Terror2/terror";
import FilmesTerror3 from "./Filmes/Terror/Terror3/terror";
import FilmesTerror4 from "./Filmes/Terror/Terror4/terror";
import FilmesTerror5 from "./Filmes/Terror/Terror5/terror";







const GaleryFilmesPosts = () => {

    return (
        <div className="Galery">

            <Link className='Voltarr' to='/posts'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg></Link>

            <div className="caixaFilmes">
                <div><FilmesTerror1 /></div>
                <div><FilmesTerror2 /></div>
                <div><FilmesTerror3 /></div>
                <div><FilmesTerror4 /></div>
                <div><FilmesTerror5 /></div>
                
                
               
                
            </div>


        </div>
    )
}

export default GaleryFilmesPosts