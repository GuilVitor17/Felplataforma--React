import React, { useEffect, useState } from "react"
import './home-modules.css'
import Logomarca from '../img/LogoSiteBranco.png'
import { Link, useNavigate, } from "react-router-dom"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from "axios"



const Home = () => {

    const navigate = useNavigate();
    

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          axios.get(`${process.env.REACT_APP_BASE_URL}`,{

            })
  .then( async resp => resp.json())
   .then(data => {
    
    console.log('api rodando')

   })
   .catch((err) => console.log(err))
  } catch (error) {
    console.log({ error: 'Erro ao buscar usuários' })
    console.log(error)
  }
}
fetchUsers();

}, [])


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
    
    
    const handleButtoninicio = async () =>{
         let timerInterval

         await Swal.fire({
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }

          
         
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
          navigate("/")
          window.location = `/login`
        })

      }

       

    return (
        <div className="div-inicio" onLoad={handleButtoninicio}>

            <div className="div-center">
                <h2>FEL PLATAFORMA</h2>
                <h4>Filmes e Livros </h4>
                <div className="div-image"> <img src={Logomarca} /> </div>
            </div>
        </div>
    )
}

export default Home