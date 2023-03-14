import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '../infantil-modules.css'
import LivrosInfantilInfomacoes from "./LivrosInfantil";
import { Link } from "react-router-dom";

const InfantilLivross = () => {

  const [livros, setLivros] = useState('')
    


  useEffect(()=>{ 
    const fetchUsers = async () => { 
      try {
  
     await fetch(`${process.env.REACT_APP_BASE_URL_GALERY}/infantil3`, {
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
    <div className="Infantil-livros">
       
       <Link className="button-criar" to='/posts/livros/infantilcreatePost3'><button>CRIAR LIVRO Infantil 3</button></Link>

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
         <LivrosInfantilInfomacoes
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
    </div>
  )

}

export default InfantilLivross;