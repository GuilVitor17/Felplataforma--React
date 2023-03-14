import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/navbar";
import PrivatesForm from "../private-formulario/form-private-home";
import './contato-modules.css'
import FormContato from "./form-contato";

const RoutesPrivatesLogos = () => {


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
           }
      }
      fetchUsers();
      
      }, [])


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

             <Navbar />
             <div className="contato">

                <FormContato />

             </div>
             <PrivatesForm />
          
         
        </div>
    )
}

export default RoutesPrivatesLogos