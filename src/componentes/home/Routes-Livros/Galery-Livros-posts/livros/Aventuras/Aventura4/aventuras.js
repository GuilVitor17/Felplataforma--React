import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '../aventuras-modules.css'
import LivrosAventuraInfomacoes from "./LivrosAventura";
import { Link } from "react-router-dom";

const AventuraLivross = () => {

  const [livros, setLivros] = useState('')
    


  useEffect(()=>{ 
    const fetchUsers = async () => { 
      try {
  
     await fetch(`${process.env.REACT_APP_BASE_URL_GALERY}/aventura4`, {
        method:'GET',
        headers:{
          'Content-Type': 'aplication/json',
      }})
    .then(resp => resp.json())
     .then(data => {
      setLivros(data)
      

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
    <div className="Aventura-livros">
       
       <Link className="button-criar" to='/posts/livros/aventuracreatePost4'><button>CRIAR LIVRO Aventura 4</button></Link>

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
     
     {livros.length > 0 &&
       livros.map((livros) => (
         <LivrosAventuraInfomacoes
         titulo={livros.titulo}
         Id={livros._id}
         descricao={livros.descricao}
         descricaoMin={livros.descricaoMin}
         img={livros.img}
         data={livros.data}
         />
       )     

         )}
    
</Carousel>

<div className="carrossel-mobile">


        {livros.length > 0 &&
          livros.map((livros) => (
            <LivrosAventuraInfomacoes
              titulo={livros.titulo}
              Id={livros._id}
              descricaoMin={livros.descricaoMin}
              img={livros.img}
              data={livros.data}

            />
          )

          )}

      </div>
    </div>
  )

}

export default AventuraLivross;