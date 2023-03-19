import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '../../../routesLogos-modules.css'
import PrivatesForm from "../../../../private-formulario/form-private-home";
import Navbar from "../../../../../Navbar/navbar";
import LogoDestaque from '../Destaques/destaque'
import Img from '../../../../../img/LogoImage.png'


const Logomarcas = () => {


  const { id } = useParams()

  const [livros, setLivros] = useState('');

  const user = localStorage.getItem("id");



  useEffect(() => {

    const fetchUsers = async () => {
      try {

        await fetch(`${process.env.REACT_APP_BASE_URL_GALERY}/logomarcas/${user}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'aplication/json',
          }
        })
          .then(resp => resp.json())
          .then(data => {
            
            setLivros(data)
          })
      } catch (error) {
        console.log({ error: 'Erro ao buscar usuários' })
        console.log(error)
      }
    }
    fetchUsers();

  }, [])




  return (
    <div className="Logomarcas">


      <Navbar />

      <div className="div-Id-livro">

        <div className="div-inf-livro">
        <div className="div-voltar">
          <Link className='Voltar' to='/Logos'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg></Link>
          </div>
          <div className="center-infor-livro">

            <div className="div-caixa-img">

              <div className="div-img-id"><img src={Img} /></div>
              <div className="div-inf-id">
                <p>TITULO - {livros.titulo}</p>
                <p>AUTOR - {livros.autor}</p>
                <p>VETOR - Sim </p>
                <p>ANO - {livros.ano}</p>
                <p>DATA - {livros.data}</p>
                <p>GENERO - Logomarcas</p>
                <p>FORMATO - Pdf</p>
              </div>

            </div>


            <div className="description-id">
              <div className="div-descricao-id">
                <h5>Descrição - <br /> {livros.descricao} </h5>
              </div>
              <a href={livros.linkLivro}><div className="button-livro-id"><button>BAIXAR <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
  <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
</svg></button></div></a>
            </div>



          </div>

        </div>

      </div>




        <PrivatesForm />

      </div>
      )
}

      export default Logomarcas;