import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './drama-modules.css'
import FilmesDramaInfomacoes from "./DramaFilmes";

const Dramafilmes = () => {

  const [filmes, setFilmes] = useState('')
    


  useEffect(()=>{ 
    const fetchUsers = async () => { 
      try {
  
     await fetch(`${process.env.REACT_APP_BASE_URL_GALERY}/filmedrama`, {
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
    <div className="Drama-filmes">

   <Link className="button-criar" to='createdrama'><button>CRIAR FILME DRAMA</button></Link>

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
       filmes.map((filmes) => (
         <FilmesDramaInfomacoes
         titulo={filmes.titulo}
         Id={filmes._id}
         descricao={filmes.descricao}
         descricaoMin={filmes.descricaoMin}
         img={filmes.img}
         data={filmes.data}
         />
       )     

         )}
    
</Carousel>

<div className="carrossel-mobile">


{filmes.length > 0 &&
       filmes.map((filmes) => (
         <FilmesDramaInfomacoes
         titulo={filmes.titulo}
         Id={filmes._id}
         descricao={filmes.descricao}
         descricaoMin={filmes.descricaoMin}
         img={filmes.img}
         data={filmes.data}
         />
       )     

         )}
    
    </div>
    </div>
  )

}

export default Dramafilmes;