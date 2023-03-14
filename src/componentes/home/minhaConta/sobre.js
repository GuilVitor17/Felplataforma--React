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


    return (
       
                    <div class="modal fade" id="staticBackdrop4" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Sobre</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body" id="modal-body-sobre">

                                   <img id="img-sobre" src={ImgSobre} />

                                   <h3>FEL PLATAFORMA</h3>
                                   <h5>A fel, foi criada para facilitar a vida de quem é apaixonado por filmes e livros, e também para aqueles que deseja abrir um negócio e não sabe onde conseguir sua logo marca, aqui na (fel) você poderá assistir qualquer filme disponível, ler qualquer livro na plataforma grátis, e se você deseja abrir uma empresa e não sabe como conseguir sua logo,  esse é o seu lugar, meu nome é Vitor e sou o criador dessa Plataforma, aproveite.</h5>

                                </div>
                                </div>
                               
                            </div>
                            </div>
                            

        
    )
}

export default RoutesPrivatesConfiguracoes