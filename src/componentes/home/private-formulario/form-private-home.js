import axios from "axios";
import React, { useRef } from "react"
import { useParams } from "react-router-dom";
import emailjs from '@emailjs/browser';
import './form-home-modules.css'
import PrivatesInfLogo from "./inf-logo";
import Swal from 'sweetalert2/dist/sweetalert2.js'



const PrivatesForm = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.REACT_APP_BASE_URL_USERSERVICE}`, `${process.env.REACT_APP_BASE_URL_TAMPLATE2}`, form.current, `${process.env.REACT_APP_BASE_URL_TOKEN}`)
      .then(async(result) => {
        let timerInterval
          await Swal.fire({
            title: 'ENVIANDO DADOS!',
            html: 'ENVIANDO <b></b>',
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
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
            }
            Swal.fire(
                'DADOS ENVIADO COM SUCESSO',
                'Você sera notificado quando houver uma publicação na plataforma da (FEL)!',
                'success'
              )
          })
        //   console.log(result.text);
      }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'IMPOSSÍVEL ENVIAR OS DADOS!',
          })
      });
  };

    return (
        <div className="form-contato">

            <div className="div-caixa-form">
                <div className="div-form">
                <p>Envie seu e-mail para ficar por dentro das novidades da plataforma da (FEL), você sera informado...</p>

                    <form ref={form} onSubmit={sendEmail}>
                        <div class="row mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="email" name="email" class="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Nome</label>
                            <div class="col-sm-10">
                                <input type="text" name="nome" class="form-control" id="inputPassword3"  required />
                            </div>
                        </div>
                        
                        <div class="row mb-3">
                            <div class="col-sm-10 offset-sm-20">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck1" value='Usuario quer ficar por dentro de Todas Novidades' name="confirm" required/>
                                    <label class="form-check-label" for="gridCheck1">
                                       Todas Novidades
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" value="Send" class="btn btn-primary">Enviar</button>
                    </form>
                </div>
                <div className="div-inf-logo"> <PrivatesInfLogo /> </div>
            </div>


        </div>
    )
}

export default PrivatesForm