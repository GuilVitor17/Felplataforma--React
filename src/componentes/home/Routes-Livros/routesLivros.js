import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/navbar";
import PrivatesForm from "../private-formulario/form-private-home";
import './routesLivros-modules.css'
import GaleryLivros from "./Galery-Livros/GaleryLivros";

const RoutesPrivatesLivros = () => {


    useEffect(() => {
        const fetchUsers = async () => {
          try {
        await fetch(`${process.env.REACT_APP_BASE_URL_GALERY}`, {
        method:'GET',
        headers:{
          'Content-Type': 'aplication/json',
      }})
      .then( async resp => resp.json())
      .then(data => {
      
      
      })
      .catch((err) => console.log(err))
      } catch (error) {
      console.log({ error: 'Erro ao buscar usuários' })
      console.log(error)
      }
      }
      fetchUsers();
      
      }, [])

    return(
         <div className="Rota-Privada">
             <Navbar />
             <div className="Galery-livros">

                <GaleryLivros />

             </div>
             <PrivatesForm />
          
         
        </div>
    )
}

export default RoutesPrivatesLivros