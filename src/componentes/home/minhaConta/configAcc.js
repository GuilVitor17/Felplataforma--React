import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Navbar/navbar";
import ImgSobre from '../../img/LogoSite.png'
import PrivatesForm from "../private-formulario/form-private-home";
import './conta-modules.css'
import FormConta from "./form-Conta";
import Swal from 'sweetalert2/dist/sweetalert2.js';

const RoutesPrivatesConfiguracoes = () => {

    const IdUser = localStorage.getItem("id")

    const navigate = useNavigate();

    const handleEditaAcc = async (e)=>{
         
        e.preventDefault()

        let timerInterval

        await Swal.fire({
         timer: 3000,
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
       })
             navigate("/forgot-password")
             window.location = `/forgot-password`
       

       
   
      

     }  

     const handleEditaAccLogin = async (e)=>{
         
        e.preventDefault()

        let timerInterval

        await Swal.fire({
         timer: 3000,
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
       })
             navigate("/login")
             window.location = `/login`
       

       
   
      

     }  

    return (

        <div class="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Ajuda</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="modal-body-config-ajuda">


                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Id do Usuario
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#"><b>Não compartilhe esses dados.</b></a></li>
                                <li><a class="dropdown-item" href="#"><b>{IdUser}</b></a></li>
            
                            </ul>

                        </div>


                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Como recuperar sua Conta da FEL 
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#"><b>Esqueceu a senha?.</b></a></li>
                                <li><a class="dropdown-item" href="#"><b>Siga as etapas para <Link onClick={handleEditaAcc} to={`/forgot-password`}>recupera-Senha</Link></b></a></li>
            
                            </ul>
                        </div>

                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Ainda não consigo fazer login
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#"><b>Criar uma nova conta</b></a></li>
                                <li><a class="dropdown-item" href="#"><b>Se ainda não conseguir recuperar sua conta, você poderá <Link onClick={handleEditaAccLogin} to={`/create`}>criar uma nova Conta da FEL</Link></b></a></li>
            
                            </ul>
                        </div>

                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Evitar serviços de recuperação de conta e senha
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#"><b>Para sua segurança, não é possível ligar para o FEL para receber ajuda com o login na sua conta. <br/>
                                    Não trabalhamos com nenhum serviço que alegue fornecer suporte à conta ou senha. <br/> 
                                    Nunca forneça suas senhas ou códigos de verificação.</b></a></li>
            
                            </ul>
                        </div>

                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Quem pode ver seus dados
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#"><b>As informações da sua conta são particulares</b></a></li>
            
                            </ul>
                        </div>



                    </div>
                </div>

            </div>
        </div>



    )
}

export default RoutesPrivatesConfiguracoes