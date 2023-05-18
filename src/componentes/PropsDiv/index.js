import './props.css'
import React, { useEffect, useState } from 'react';
import Livros from './livros.js';
import { Link, useParams } from 'react-router-dom';



 const Props = () => {


    const [livros, setLivros] = useState('')
    


  useEffect(()=>{ 
    const fetchUsers = async () => { 
      try {
  
     await fetch(`${process.env.REACT_APP_BASE_URL_GALERY}/livros`, {
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




// useEffect (()=>{

//  fetch('http://localhost:3000/livros',{
//   method:'GET',
//   headers:{
//     'Content-Type': 'aplication/json',
//  },
// })
//  .then(resp => resp.json())
//  .then(data =>{
//   setLivros(data.id)
//   
//  })
//  .catch((err) => console.log(err))

// },[]);
 
  

    return(
      <section className='props' id='divs'>
        <Link to='/createlivros'><button>Criar</button></Link>
       <div> 
       {livros.length > 0 &&
       livros.map((livros) => (
         <Livros
         titulo={livros.titulo}
         editora={livros.editora}
         pagina={livros.pagina}
         descricao={livros.descricao}
         descricaoMin={livros.descricaoMin}        
          nameImage={livros.nameImage}
         img={livros.img}
         />   
       )              
          
         )}
     </div>
       
      </section>
     )


}

export default Props