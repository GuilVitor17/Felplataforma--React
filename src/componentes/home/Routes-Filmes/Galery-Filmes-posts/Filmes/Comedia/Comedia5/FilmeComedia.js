import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '../comedia-modules.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'


const LivrosComediaInfomacoes = ({titulo, img,Id ,descricaoMin, data}) => {


     const saveId = () =>{

      localStorage.setItem("id", Id)

     }


     const Delete = (e)=>{
      e.preventDefault()
   

 axios.delete(`${process.env.REACT_APP_BASE_URL_GALERY}/filmecomedia5/${Id}`, {
  
})
.then(async response => {
  let timerInterval
          await Swal.fire({
            title: 'EXCLUINDO FILME !',
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
          title: `FILME COMEDIA 5 EXCLUIDO`,
          showConfirmButton: false,
          timer: 3000,
        })
 
})
})
    .catch(function (error) {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'ALGO SAIU ERRADO',
        })
    });


 
}

    

  return (
    <div className="Comedia">

           
              <div className="card">
                <img src={img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{titulo}</h5>
                <h6 className="card-text">{descricaoMin}</h6>
                  <h5 className="card-genero">Comedia</h5>
                  <h5 className="card-date">{data}</h5>
                  <Link className="Btn-livro" to={`/filmes/comedias5/${Id}`}><button type="button" onClick={saveId} className="btn btn-primary">
                    Ver livro
                  </button></Link>
                  <div className="button-crud">
                  <Link className="button-editar" to={`/filmess/comediaedita5/${Id}`}><button>Editar</button></Link>
                  <button onClick={Delete} className="button-apagar">Apagar</button>
                  </div>
                </div>

              
              </div>

            
               

        



    </div>
  )
}

export default LivrosComediaInfomacoes