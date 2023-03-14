import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import './Galery-modules.css'
import HistoriasLivros1 from "./livros/Historia/RoutesHistoria1/historia.js";
import HistoriasLivros2 from "./livros/Historia/RoutesHistoria2/historia.js";
import HistoriasLivros3 from "./livros/Historia/RoutesHistoria3/historia.js";
import HistoriasLivros4 from "./livros/Historia/RoutesHistoria4/historia.js";
import HistoriasLivros5 from "./livros/Historia/RoutesHistoria5/historia.js";



const GaleryLivrosRoutes = () => {

    return(
         <div className="Galery">


            <div className="caixaLivros-Historia">
                <div><HistoriasLivros1 /></div>
                <div><HistoriasLivros2 /></div>
                <div> <HistoriasLivros3 /> </div>
                <div><HistoriasLivros4 /></div>
                <div><HistoriasLivros5 /></div>
            </div>
            
         
        </div>
    )
}

export default GaleryLivrosRoutes