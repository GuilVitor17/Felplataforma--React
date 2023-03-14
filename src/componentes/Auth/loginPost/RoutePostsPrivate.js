import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import '../privateRoutes-module.css'
import GaleryLivrosPosts from "../../home/Routes-Livros/Galery-Livros-posts/GaleryLivrosPosts";

const RoutesPrivatesPosts = () => {


    useEffect(() => {
        const fetchUsers = async () => {
          console.log('acordando api')

           await axios.get(`${process.env.REACT_APP_BASE_URL}`,{
  
              })


            }

  fetchUsers();
  
  }, [])


    return(
         <div className="Rota-Privada"> 
         <GaleryLivrosPosts />
        </div>
    )
}

export default RoutesPrivatesPosts