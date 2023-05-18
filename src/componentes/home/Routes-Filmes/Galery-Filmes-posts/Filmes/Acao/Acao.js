import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './acao-modules.css'
import FilmesAcaoInfomacoes from "./FilmesAcao";

const FilmesAcao = () => {

  const [filmes, setFilmes] = useState('')
    


  useEffect(()=>{ 
    const fetchUsers = async () => { 
      try {
  
     await fetch(`${process.env.REACT_APP_BASE_URL_GALERY}/filmeacao`, {
        method:'GET',
        headers:{
          'Content-Type': 'aplication/json',
      }})
    .then(resp => resp.json())
     .then(data => {
      setFilmes(data)
      

     })
     .catch((err) => console.log(err))

    
  } catch (error) {
        console.log({ error:'Erro ao buscar usuários'})
        console.log(error)
  }
}
fetchUsers();

},[])





  return (
    <div className="Acao-filmes">

      <Link className="button-criar" to='/posts/filmes/createacao'><button>CRIAR FILMES ACAO</button></Link>

       <Carousel className="carrossel"
              plugins={[
                'centered',
                'infinite',
                'arrows',
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 4,
                  },
                },
              ]}
              breakpoints={{
                600: {
                  plugins: [
                    'centered',
                    'infinite',
                    'arrows',
                   {
                     resolve: slidesToShowPlugin,
                     options: {
                      numberOfSlides: 1
                     }
                   },
                 ],
                },
                900: {
                  plugins: [
                    'centered',
                    'infinite',
                    'arrows',
                   {
                     resolve: slidesToShowPlugin,
                     options: {
                      numberOfSlides: 1
                     }
                   },
                 ]
                 
                }
              }}
            >
     
     {filmes.length > 0 &&
       filmes.map((filmess) => (
         <FilmesAcaoInfomacoes
         titulo={filmess.titulo}
         Id={filmess._id}
         descricao={filmess.descricao}
         descricaoMin={filmess.descricaoMin}
         img={filmess.img}
         data={filmess.data}
         />
       )     

         )}
    
</Carousel>


<div className="carrossel-mobile">


{filmes.length > 0 &&
       filmes.map((filmess) => (
         <FilmesAcaoInfomacoes
         titulo={filmess.titulo}
         Id={filmess._id}
         descricao={filmess.descricao}
         descricaoMin={filmess.descricaoMin}
         img={filmess.img}
         data={filmess.data}
         />
       )     

         )}

      </div>
    </div>
  )

}

export default FilmesAcao;