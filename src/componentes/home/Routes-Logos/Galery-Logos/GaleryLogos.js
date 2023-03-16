import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import '../routesLogos-modules.css'
import LogosMarcas from "./Logos/Logo-marcas/Logo";


const GaleryLogos = () => {

    return(
         <div className="Galery">

<div className="carrossel-livro-destaque">
           
           </div>
            
            <div className="caixaLogos">
                <div className="Aventuras"><LogosMarcas /></div>
            </div>
            
         
        </div>
    )
}

export default GaleryLogos