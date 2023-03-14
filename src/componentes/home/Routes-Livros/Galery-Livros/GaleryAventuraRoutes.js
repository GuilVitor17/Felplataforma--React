import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import './Galery-modules.css'
import AventurasLivros1Routes from "./livros/Aventuras/RoutesAventura1/aventurasRoutes";
import AventurasLivros2Routes from "./livros/Aventuras/RoutesAventura2/aventurasRoutes";
import AventurasLivros3Routes from "./livros/Aventuras/RoutesAventura3/aventurasRoutes";
import AventurasLivros4Routes from "./livros/Aventuras/RoutesAventura4/aventurasRoutes";
import AventurasLivros5Routes from "./livros/Aventuras/RoutesAventura5/Aventuras";






const GaleryLivrosRoutes = () => {

    return(
         <div className="Galery">


            <div className="caixaLivros-aventura">
                <div><AventurasLivros1Routes /></div>
                <div><AventurasLivros2Routes /></div>
                <div><AventurasLivros3Routes /></div>
                <div><AventurasLivros4Routes /></div>
                <div><AventurasLivros5Routes /></div>
            </div>
            
         
        </div>
    )
}

export default GaleryLivrosRoutes