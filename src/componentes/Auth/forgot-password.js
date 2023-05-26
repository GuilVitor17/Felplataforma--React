/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import './forgot-modules.css'
import Logomarca from '../img/LogoSite.png'
import Swal from 'sweetalert2/dist/sweetalert2.js'


const forgotPassword = () => {

    const [email, setEmail] = useState('')

    const navigate = useNavigate();




    const handleEmail = (e)=>{
      setEmail(e.target.value)
    }

  

    const AuthLogin = (e)=>{

        e.preventDefault()

        axios.post(`${process.env.REACT_APP_BASE_URL}/auth/forgot_password`,{
  
        email:email,
  
        })
        .then(async response =>{
          let timerInterval
          await Swal.fire({
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
              title: `CÓDIGO ENVIADO`,
              showConfirmButton: false,
              timer: 3000,
            })
            console.log(response)
            navigate("/")
            window.location = `/forgot-password-token`
      })
    })
      .catch(function (error) {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'IMPOSSÍVEL ENVIAR O CÓDIGO!',
        })

        })
    

      }
     

      useEffect(() => {
        const fetchUsers = async () => {
          console.log('acordando api')

           await axios.get(`${process.env.REACT_APP_BASE_URL}`,{
  
              })


            }

  fetchUsers();
  
  }, [])

     


      

    return(
        <div className="div-forgot"> 
        <div className="div-forgot-center">
        <Link className='Voltar' to='/login'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg></Link>
          <div className="div-forgot-image"> <img src={Logomarca} /> </div>
            <form onSubmit={AuthLogin} className="formulario-forgot">    
             <h4>Digiste seu E-mail para trocar senha</h4>
                <label>
                    E-mail:<input type='email' class="form-control" onChange={handleEmail} value={email} id="exampleFormControlInput1" placeholder="Email" required />
                </label>
                <button className="editar-password" type="submit"><b>PROXIMO</b></button>
            </form>
            </div>
        </div>
     )
}

export default forgotPassword