import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '../literatura-modules.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'


const LivrosLiteraturaInfomacoes = ({titulo, img,Id ,descricaoMin, data}) => {



     const saveId = () =>{

      localStorage.setItem("id", Id)

     }


     const Delete = (e)=>{
      e.preventDefault()
   

 axios.delete(`${process.env.REACT_APP_BASE_URL_GALERY}/literatura4/${Id}`, {
  
})
.then(async response => {
  let timerInterval
          await Swal.fire({
            title: 'EXCLUINDO LIVRO LITERATURA 4!',
            html: 'AGUARDE <b></b>',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then( async(result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
            }
     
      await Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `LIVRO LITERATURA 4 EXCLUIDO`,
          showConfirmButton: false,
          timer: 3000,
        })
 
})
})

 .catch((err) => console.log(err))

 Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'ALGO SAIU ERRADO',
})
 
 
}
    

  return (
    <div className="Literatura">

           
              <div className="card">
                <img src={img} className="card-img-top" />
                <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <h6 className="card-text">{descricaoMin}</h6>
                  <h5 className="card-genero">Literatura</h5>
                  <h5 className="card-date">{data}</h5>
                  <Link className="Btn-livro" to={`/livros/literatura4/${Id}`}><button type="button" onClick={saveId} className="btn btn-primary">
                    Ver livro
                  </button></Link>
                  <div className="button-crud">
                  <Link className="button-editar" to={`/livros/literaturaedita4/${Id}`}><button>Editar</button></Link>
                  <button className="button-apagar" onClick={Delete}>Apagar</button>
                </div>
                </div>

              
              </div>

            
               

        



    </div>
  )
}

export default LivrosLiteraturaInfomacoes