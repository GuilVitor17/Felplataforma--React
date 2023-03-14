import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './romance-modules.css'
import PrivatesForm from "../../../../private-formulario/form-private-home";
import Navbar from "../../../../../Navbar/navbar";


const LivrosPorIdRomance= () => {


    const { id } = useParams()

    const [livros, setLivros] = useState('');

    const user = localStorage.getItem("id");



    useEffect(()=>{ 

      const fetchUsers = async () => { 
        try {
    
       await fetch(`${process.env.REACT_APP_BASE_URL_GALERY}/filmeromance/${user}`, {
           method:'GET',
           headers:{
             'Content-Type': 'aplication/json',
         }})
        .then(resp => resp.json())
        .then(data => {
        
        setLivros(data)
        })   
      } catch (error) {
        console.log({ error:'Erro ao buscar usuários'})
        console.log(error)
  }
}
fetchUsers();
       
 },[])



     
  return (
    <div className="Romance">
               
          
          <Navbar />

          <div className="div-Id-livro">

            <div className="div-inf-livro">

              <div className="center-infor-livro">

                <div className="div-caixa-img">

                  <div className="div-img-id"><img src={livros.img}/></div>
                  <div className="div-inf-id">
                    <p>TITULO - {livros.titulo}</p>
                    <p>AUTOR - {livros.autor}</p>
                    <p>PAGINA - {livros.pagina} </p>
                    <p>ANO - {livros.ano}</p>
                    <p>DATA - {livros.data}</p>
                    <p>GENERO - Romance</p>
                    <p>FORMATO - Pdf</p>
                  </div>

                </div>


                <div className="description-id">
                  <div className="div-descricao-id">
                    <h5>Descrição - <br /> {livros.descricao} </h5>
                  </div>
                 <a href={livros.linkLivro}><div className="button-livro-id"><button>link</button></div></a> 
                </div>



              </div>

            </div>

          </div>
           

<PrivatesForm />

    </div>
  )
}

export default LivrosPorIdRomance