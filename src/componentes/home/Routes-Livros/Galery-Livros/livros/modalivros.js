import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './aventuras-modules.css'
import PrivatesForm from "../../../private-formulario/form-private-home";


const ModalLivrosAventura = ({titulo, img, descricao, ano, autor, pagina, nameImg, genero, linkLivro}) => {


  return (

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <img src={img} />
                    <div className="InfomacoesLivro">
                      <h5 className="modal-title fs-6" id="staticBackdropLabel">TITULO - {titulo}</h5>
                      <h5 className="modal-title fs-6" id="staticBackdropLabel">AUTOR - {autor} </h5>
                      <h5 className="modal-title fs-6" id="staticBackdropLabel">PAGINAS - {pagina}</h5>
                      <h5 className="modal-title fs-6" id="staticBackdropLabel">ANO - {ano}</h5>
                      <h5 className="modal-title fs-6" id="staticBackdropLabel">FORMATO - PDF</h5>
                      <h5 className="modal-title fs-6" id="staticBackdropLabel">GENERO - {genero}</h5>
                      <h5 className="modal-title fs-6" id="staticBackdropLabel">NOME IMAGE {nameImg}</h5>
                    </div>

                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="DescricaoLivro">
                      <h6 className="modal-title fs-7" id="staticBackdropLabel">
                        DESCRIÇÃO - <br /> {descricao} 
                      </h6>

                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
                   <a href={linkLivro}><button type="button" className="btn btn-primary">Baixar</button></a>
                  </div>
                </div>

              </div>

            </div>

        



  )
}

export default ModalLivrosAventura