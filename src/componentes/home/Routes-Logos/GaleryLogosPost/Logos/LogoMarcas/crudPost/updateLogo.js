/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'

const filmessUpdateAcao = (filmessUpdate) => {


    const { id } = useParams()


    console.log(filmessUpdate.div)


    const [Titulo, setTitulo] = useState()
    const [Diretor, setDiretor] = useState()
    const [Data, setData] = useState()
    const [Duracao, setDuracao] = useState()
    const [DescricaoMin, setDescricaoMin] = useState()
    const [Descricao, setDescricao] = useState()
    const [Img, setImg] = useState()
    const [LinkFilme, setLinkFilme] = useState()
    const [Ano, setAno] = useState()
    
  
  
    const user = localStorage.getItem("id")
  
    const handleTitulo = (e) => {
      setTitulo(e.target.value)
    }
    const handleDiretor = (e) => {
      setDiretor(e.target.value)
    }
    const handleAno = (e) => {
      setAno(e.target.value)
    }
    const handleDuracao = (e) => {
      setDuracao(e.target.value)
    }
    const handleDescricao = (e) => {
      setDescricao(e.target.value)
    }
    const handleDescricaoMin = (e) => {
      setDescricaoMin(e.target.value)
    }
    const handleData = (e) => {
      setData(e.target.value)
    }
    const handleImg = (e) => {
      setImg(e.target.value)
  
    }
  
    const handleLinkFilme= (e) => {
      setLinkFilme(e.target.value)
  
    }
  
  
    

    const Update = (e) => {
        e.preventDefault()


        axios.put(`${process.env.REACT_APP_BASE_URL_GALERY}/logomarcas/${id}`, {
            titulo: Titulo,
            diretor: Diretor,
            duracao: Duracao,
             descricaoMin: DescricaoMin,
 descricao: Descricao,
            data: Data,
            img: Img,
            linkFilme: LinkFilme,
            ano: Ano,
            
        })
        .then(async data => {
          let timerInterval
          await Swal.fire({
            title: 'ATUALIZANDO LOGO-MARCA !',
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
          title: `LOGO-MARCA ATUALIZADO`,
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
        <section className="formulario">
            <div>
                <form class="row g-3" onSubmit={Update}>
                    <Link className='Voltar' to='/logomarcasPost'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                    </svg></Link>

                    <h5>Editar Logo </h5>
                    <div class="col-md-4">
          <label for="inputEmail4" class="form-label">Titulo</label>
          <input type="text" onChange={handleTitulo} required placeholder="TITULO DO FILME" value={Titulo} class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-3">
          <label for="inputPassword4" class="form-label">Diretor</label>
          <input type="text" onChange={handleDiretor} placeholder="DIRETOR DO FILME" value={Diretor} class="form-control" id="inputPassword4" />
        </div>
        <div class="col-md-2">
          <label for="inputEmail4" class="form-label">Data de Publicação</label>
          <input type="date" onChange={handleData} placeholder="DATA DO filme" value={Data} class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-3">
          <label for="inputPassword4" class="form-label">Ano do filme</label>
          <input type="text" class="form-control" onChange={handleAno} placeholder='ANO DE LANÇAMENTO' value={Ano} id="inputPassword4" />
        </div>
        <div class="col-md-4">
          <label for="inputEmail4" class="form-label">Descrição minima</label>
          <input type="text" onChange={handleDescricaoMin} placeholder='DESCRIÇÃO MINIMA DO LIVRO' value={DescricaoMin} maxlength={70} class="form-control" id="inputEmail4" />
        </div>
        
        <div class="col-5">
          <label for="inputAddress2" class="form-label">Descrição Detalhada</label>
   <input type="text" class="form-control" onChange={handleDescricao} required placeholder="DESCRIÇAO DETALHADA DO LIVRO" maxLength={150}  value={Descricao} id="inputAddress2" />
        </div>
        <div class="col-md-3">
          <label for="inputCity" class="form-label">Link do FILME</label>
          <input type="text" onChange={handleLinkFilme} placeholder='LINK DO FILME' value={LinkFilme} class="form-control" id="inputCity" />
        </div>

        <div class="col-md-3">
          <label for="inputCity" class="form-label">DURACAO DO FILME </label>
          <input type="text" onChange={handleDuracao} required placeholder="DURACAO DO FILME" value={Duracao} class="form-control" id="inputCity" />
        </div>

       

                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">EDITAR  Logo</button>

                    </div>

                </form>

            </div>
        </section>
    )
}

export default filmessUpdateAcao