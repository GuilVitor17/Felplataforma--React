import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import './login-module.css'
import Logomarca from '../img/LogoSite.png'
import Swal from 'sweetalert2/dist/sweetalert2.js'


const Login = () => {

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('')
      // const [Id, setId] = useState('')

      // const { id } = useParams();

       const navigate = useNavigate();




      const handleEmail = (e)=>{
        setEmail(e.target.value)
      }

      const handlePassword = (e)=>{
        setPassword(e.target.value)
      }

      const AuthLogin = async (e)=>{

        e.preventDefault()

        let timerInterval

        await  await Swal.fire({
          title: 'Aguarde Verificando dados!',
          timer: 15000,
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
         


        axios.post(`${process.env.REACT_APP_BASE_URL}/auth/authenticate`,{

        email:email,
        password: password

        })
        .then(async response =>{
          let timerInterval
          await Swal.fire({
            title: 'Entrando!',
            timer: 10000,
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
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
            }
           await Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `BEM-VINDO! - ${email}`,
              showConfirmButton: false,
              timer: 5000,
            })
            navigate("/")
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("id", response.data.user._id)
            window.location = `/livros/user`
        })
      })
        .catch(function (error) {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'SENHA OU E-MAIL INCORRETOS!',
          })
      });

      }

      useEffect(() => {
        const fetchUsers = async () => {
          try {
        await fetch(`${process.env.REACT_APP_BASE_URL_GALERY}`, {
        method:'GET',
        headers:{
          'Content-Type': 'aplication/json',
      }})
      .then( async resp => resp.json())
      .then(data => {
      
      
      })
      .catch((err) => console.log(err))
      } catch (error) {
      console.log({ error: 'Erro ao buscar usuários' })
      console.log(error)
      }
      }
      fetchUsers();
      
      }, [])


      useEffect(() => {
        const fetchUsers = async () => {
          console.log('acordando api')

           await axios.get(`${process.env.REACT_APP_BASE_URL}`,{
  
              })


            }

  fetchUsers();
  
  }, [])



    return(
        <div className="div-login"> 
        <div className="div-login-center">
        <Link className='Voltar' to='/'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg></Link>
          <div className="div-login-image"> <img src={Logomarca} /> </div>
            <form onSubmit={AuthLogin} className="formulario-Login">
    
                <label>
                    E-mail:<input type='email' class="form-control" id="exampleFormControlInput1" placeholder="Email" required value={email} onChange={handleEmail} />
                </label>
                <label>
                    Senha:<input type='password' class="form-control" id="exampleFormControlInput1" placeholder="Senha" required value={password} onChange={handlePassword} />
                </label>
                <button type="submit"><b>ENTRAR</b></button>     
            </form>
            <div className="div-login-link"> 
                <Link className="Link1" to='/create'>Criar conta</Link>
                <Link className="Link2" to='/forgot-password'>Editar senha</Link>
            </div>
            </div>
        </div>
     )
}

export default Login