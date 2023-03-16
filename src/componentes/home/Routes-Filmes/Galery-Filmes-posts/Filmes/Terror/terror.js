import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './terror-modules.css'
import FilmesTerrorInfomacoes from "./filmesterror";
import { Link } from "react-router-dom";

const Terrorfilmess = () => {

  const [filmes, setFilmes] = useState('')
    


  useEffect(()=>{ 
    const fetchUsers = async () => { 
      try {
  
     await fetch(`${process.env.REACT_APP_BASE_URL_GALERY}/filmeterror`, {
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
    <div className="Terror-filmes">
       
       <Link className="button-criar" to='createterror'><button>CRIAR FILME TERROR</button></Link>

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
                      numberOfSlides: 2
                     }
                   },
                 ]
                 
                }
              }}
            >
     
     {filmes.length > 0 &&
       filmes.map((filmes) => (
         <FilmesTerrorInfomacoes
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
         <FilmesTerrorInfomacoes
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

export default Terrorfilmess;