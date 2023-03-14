import axios from "axios";
import React, { useRef } from "react"
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/navbar";
import emailjs from '@emailjs/browser';
import PrivatesForm from "../private-formulario/form-private-home";
import './contato-modules.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'


const FormContato = () => {


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(`${process.env.REACT_APP_BASE_URL_USERSERVICE}`, `${process.env.REACT_APP_BASE_URL_TAMPLATE}`, form.current, `${process.env.REACT_APP_BASE_URL_TOKEN}`)
        .then(async(result) => {
            let timerInterval
          await Swal.fire({
            title: 'ENVIANDO DADOS DE CONTATO!',
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
                'Sua mensagem foi enviada corretamente em até 24h nós retornaremos!!',
                'success'
              )
          })
        }, (error) => {
            console.log(error.text);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'IMPOSSÍVEL ENVIAR OS DADOS DE CONTATO!',
              })
        });
    };
  

    return (
        <div className="Rota-Privada-form">


            <form class="row g-3" ref={form} onSubmit={sendEmail}>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Nome</label>
                    <input type="text" class="form-control" name="nome" minLength={3} id="inputEmail4" placeholder="Nome" required />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Sobre Nome</label>
                    <input type="text" class="form-control" name="sobrenome" minLength={3} id="inputPassword4" placeholder="Sobre nome" required />
                </div>
                <div class="col-6">
                    <label for="inputAddress" class="form-label">E-mail</label>
                    <input type="email" class="form-control" name="email" id="inputAddress" minLength={10} placeholder="@gmail.com" required />
                </div>
                <div class="col-6">
                    <label for="inputAddress2" class="form-label">Telefone</label>
                    <input type="text" class="form-control" name="telefone" id="inputAddress2" placeholder="+55" minLength={10} required />
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">Localidade</label>
                    <input type="text" class="form-control" name="localidade" id="inputCity" minLength={3} placeholder="Cidade - SP" required/>
                </div>
                <div class="col-md-6">
                    <label for="inputState" class="form-label">Assunto</label>
                    <select name="select" id="inputState" class="form-select" required>
                        <option selected>Selecione ...</option>
                        <option value='Livros'>Livros</option>
                        <option value='Filmes'>Filmes</option>
                        <option value='LogoMarcas'>LogoMarcas</option>
                    </select>
                </div>
               

                <div class="col-md-12">
                    <label for="inputEmail4" class="form-label">Mensagem</label>
                    <input type="text" name="mensagem" class="form-control" id="inputEmail4" minLength={3} placeholder="Envie uma mensagem" required />
                </div>

                
                <div class="col-12">
                    <button type="submit" value="Send" class="btn btn-primary">Enviar</button>
                </div>
            </form>

        </div>
    )
}

export default FormContato