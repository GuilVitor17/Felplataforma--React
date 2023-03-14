/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './infantil-modules.css'
import PrivatesForm from "../../../../private-formulario/form-private-home";
import Navbar from "../../../../../Navbar/navbar";


const filmesPorIdInfantil = () => {


    const { id } = useParams()

    const [filmes, setfilmes] = useState('');

    const user = localStorage.getItem("id");



    useEffect(()=>{ 

      const fetchUsers = async () => { 
        try {
    
       await fetch(`${process.env.REACT_APP_BASE_URL_GALERY}/filmedesenho/${user}`, {
           method:'GET',
           headers:{
             'Content-Type': 'aplication/json',
         }})
        .then(resp => resp.json())
        .then(data => {
        
        setfilmes(data)
        })   
      } catch (error) {
        console.log({ error:'Erro ao buscar usuários'})
        console.log(error)
  }
}
fetchUsers();
       
 },[])



     
  return (
    <div className="Infantil">
               
          
          <Navbar />

          <div className="div-Id-filmes">

            <div className="div-inf-filmes">

              <div className="center-infor-filmes">

                <div className="div-caixa-img">

                  <div className="div-img-id"><img src={filmes.img}/></div>
                  <div className="div-inf-id">
                    <p>TITULO - {filmes.titulo}</p>
                    <p>AUTOR - {filmes.autor}</p>
                    <p>PAGINA - {filmes.pagina} </p>
                    <p>ANO - {filmes.ano}</p>
                    <p>DATA - {filmes.data}</p>
                    <p>GENERO - Infantil</p>
                    <p>FORMATO - Pdf</p>
                  </div>

                </div>


                <div className="description-id">
                  <div className="div-descricao-id">
                    <h5>Descrição - <br /> {filmes.descricao} </h5>
                  </div>
                 <a href={filmes.linkfilmes}><div className="button-filmes-id"><button>link</button></div></a> 
                </div>



              </div>

            </div>

          </div>
            
<PrivatesForm />

    </div>
  )
}

export default filmesPorIdInfantil;