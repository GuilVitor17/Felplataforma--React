import axios from "axios";
import React, { useEffect,  useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Navbar/navbar";
import ImgSobre from '../../img/LogoSite.png'
import PrivatesForm from "../private-formulario/form-private-home";
import './conta-modules.css'
import FormConta from "./form-Conta";
import Swal from 'sweetalert2/dist/sweetalert2.js';

const RoutesPrivatesConfiguracoes = () => {


    const navigate = useNavigate();


const handleremovetoken = async (e) => {
    let timerInterval;
    await Swal.fire({
        title: 'DESCONECTANDO',
        timer: 4000,
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
    }).then( async (result) => {
       
        await Swal.fire({
            icon: 'success',
            title: `Desconectado`,
            showConfirmButton: false,
            timer: 3000,

            
    });

    localStorage.removeItem('token');
    navigate("/login")
    window.location = `/login`
    });


}
    return (
       
                    <div class="modal fade" id="staticBackdrop5" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Sair</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body" id="modal-body-sobre">

                                    <h5>Você sera desconectado da plataforma. Tem certeza?</h5>

                                    <div class="modal-footer">
                                    <button type="button" onClick={handleremovetoken} class="btn btn-danger" data-bs-dismiss="modal">Confirmar</button>
                                    </div>
                                </div>
                                </div>
                               
                            </div>
                            </div>
                            

        
    )
}

export default RoutesPrivatesConfiguracoes