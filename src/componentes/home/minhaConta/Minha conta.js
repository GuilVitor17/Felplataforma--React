import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/navbar";
import PrivatesForm from "../private-formulario/form-private-home";
import './conta-modules.css'
import FormContato from "./form-contato";

const RoutesPrivatesLogos = () => {

    return(
         <div className="Rota-Privada">

             <Navbar />
             <div className="contato">

                <FormContato />

             </div>
             <PrivatesForm />
          
         
        </div>
    )
}

export default RoutesPrivatesLogos