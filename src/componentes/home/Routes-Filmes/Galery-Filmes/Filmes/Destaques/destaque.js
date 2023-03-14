import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './destaque-modules.css'
import FilmesDestaqueInfomacoes from "./FilmesDestaque";

const Destaquefilmes = () => {

  const [filmes, setFilmes] = useState('')
    


  useEffect(()=>{ 
    const fetchUsers = async () => { 
      try {
  
     await fetch(`${process.env.REACT_APP_BASE_URL_GALERY}/filmescarrossel`, {
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
    <div className="destaque-filmes">
       <Carousel className="carrossel"
              plugins={[
                'centered',
                'infinite',
                'arrows',
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
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
                      numberOfSlides: 2
                     }
                   },
                 ]
                 
                }
              }}
            >
     
     {filmes.length > 0 &&
       filmes.map((filmes) => (
         <FilmesDestaqueInfomacoes
         titulo={filmes.titulo}
         Id={filmes._id}
         descricaoMin={filmes.descricaoMin}
         img={filmes.img}
         data={filmes.data}
         genero={filmes.genero}
         imgCapa={filmes.imgCapa}
         />
       )     

         )}
    
</Carousel>
    </div>
  )
}

export default Destaquefilmes