import axios from "axios";
import React, { useRef, useState } from "react"
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/navbar";
import emailjs from '@emailjs/browser';
import PrivatesForm from "../private-formulario/form-private-home";
import './conta-modules.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'


const Formcontato = () => {


    const  [idade, setIdade] = useState('')
    const  [telefone, setTelefone] = useState('')
    const  [Genero, setGenero] = useState('')
    const  [cidade, setCidade] = useState('')


    const handleidade = (e)=>{
        setIdade(e.target.value)
        


    }
    const handleTelefone = (e)=>{
        setTelefone(e.target.value)
       

    }
    const handleGenero = (e)=>{
        setGenero(e.target.value)
        

    }
    const handleCidade = (e)=>{
        setCidade(e.target.value)
        

    }

     
    async function FormDadosedit(e) {
        e.preventDefault();
        let timerInterval;
        await Swal.fire({
            title: 'EDITANDO DADOS',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer().querySelector('b');
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft();
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
            }
            setCidade(cidade)
            setGenero(Genero)
            setIdade(idade)
            setTelefone(telefone)
            localStorage.setItem("cidade", cidade)
            localStorage.setItem("genero", Genero)
            localStorage.setItem("telefone", telefone)
            localStorage.setItem("idade", idade)
            Swal.fire({
                icon: 'success',
                title: `DADOS EDITADO`,
                showConfirmButton: false,
                timer: 3000,

                
        });
        });
    // eslint-disable-next-line no-unused-expressions
    } (error) => {
            console.log(error.text);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'IMPOSSÍVEL EDITAR DADOS!',
              })
            
        };
    
  

    return (

   <form onSubmit={FormDadosedit}>
        <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Meus Dados</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">


                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">TELEFONE</span>
                        <input type="text"  onChange={handleTelefone} class="form-control" id="inputeditconta"  value={telefone} placeholder={telefone} aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">IDADE</span>
                        <input type="number" onChange={handleidade} class="form-control" id="inputeditconta"  value={idade} placeholder={idade} aria-label="Username" aria-describedby="basic-addon1" />
                        
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">GENERO</span>
                        <input type="text" onChange={handleGenero} class="form-control" id="inputeditconta"  value={Genero} placeholder={Genero} aria-label="Username" aria-describedby="basic-addon1" />
                        
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">CIDADE</span>
                        <input type="text" class="form-control" onChange={handleCidade} id="inputeditconta"  value={cidade} placeholder={`${cidade}`} aria-label="Username" aria-describedby="basic-addon1" />
                        
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-secondary">EDITAR</button>
                </div>
            </div>
            </div>
            </div>
            </form>
    )
}

export default Formcontato