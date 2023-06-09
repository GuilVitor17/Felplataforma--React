/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'


const CreateAcao = () => {

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
  
  
    

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
        console.log('fui-clicado')


        axios.post(`${process.env.REACT_APP_BASE_URL_GALERY}/logomarcas`, {
            titulo: Titulo,
            diretor: Diretor,
            duracao: Duracao,
             descricaoMin: DescricaoMin,
 descricao: Descricao,
            data: Data,
            img: Img,
            linkLivro: LinkFilme,
            ano: Ano,
            
        })
        .then(async data => {
          let timerInterval
          await Swal.fire({
            title: 'CRIANDO LOGO-MARCA!',
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
          title: `LOGO-MARCA CRIADO`,
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
        // 

    }

    return (
        <section className="formulario">
            <form class="row g-3" onSubmit={aoSalvar}>
            <Link className='Voltar' to='/logomarcasPost'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg></Link>

                <h5>publicar logo</h5>
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
                    <button type="submit" class="btn btn-primary">CRIAR logo</button>

                </div>

            </form>



        </section>
    )
}

export default CreateAcao