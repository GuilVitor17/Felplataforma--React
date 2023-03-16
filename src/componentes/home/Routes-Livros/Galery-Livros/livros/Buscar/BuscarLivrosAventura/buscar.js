/* eslint-disable no-undef */
import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '../buscalivros-modules.css'
import LivrosAventuraInfomacoesBusca from "./buscarLivrosAventuradestaque";
import LivrosAventuraInfomacoesBusca1 from "./buscarLivrosAventura1";
import LivrosAventuraInfomacoesBusca2 from "./buscarLivrosAventura2";
import LivrosAventuraInfomacoesBusca3 from "./buscarLivrosAventura3";
import LivrosAventuraInfomacoesBusca4 from "./buscarLivrosAventura4";
import LivrosAventuraInfomacoesBusca5 from "./buscarLivrosAventura5";

const Buscarlivro = () => {

    const [livros, setLivros] = useState([])
    const [livrosinitial, setLivrosinitial] = useState([])


    const [livros1, setLivros1] = useState([])
    const [livrosinitial1, setLivrosinitial1] = useState([])

    const [livros2, setLivros2] = useState([])
    const [livrosinitial2, setLivrosinitial2] = useState([])

    const [livros3, setLivros3] = useState([])
    const [livrosinitial3, setLivrosinitial3] = useState([])

    const [livros4, setLivros4] = useState([])
    const [livrosinitial4, setLivrosinitial4] = useState([])

    const [livros5, setLivros5] = useState([])
    const [livrosinitial5, setLivrosinitial5] = useState([])




    useEffect(() => {
        const fetchUsers = async () => {
            try {

                await fetch(`${process.env.REACT_APP_BASE_URL_GALERY}/aventura`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'aplication/json',
                    }
                    
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setLivros(data)
                        setLivrosinitial(data)
                        

                    })
                    .catch((err) => console.log(err))


            } catch (error) {
                console.log({ error: 'Erro ao buscar usuários' })
                console.log(error)
            }

            try {

                await fetch(`${process.env.REACT_APP_BASE_URL_GALERY}/aventura1`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'aplication/json',
                    }
                    
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setLivros1(data)
                        setLivrosinitial1(data)
                        

                    })
                    .catch((err) => console.log(err))


            } catch (error) {
                console.log({ error: 'Erro ao buscar usuários' })
                console.log(error)
            }


            try {

                await fetch(`${process.env.REACT_APP_BASE_URL_GALERY}/aventura2`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'aplication/json',
                    }
                    
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setLivros2(data)
                        setLivrosinitial2(data)
                        

                    })
                    .catch((err) => console.log(err))


            } catch (error) {
                console.log({ error: 'Erro ao buscar usuários' })
                console.log(error)
            }

            try {

                await fetch(`${process.env.REACT_APP_BASE_URL_GALERY}/aventura3`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'aplication/json',
                    }
                    
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setLivros3(data)
                        setLivrosinitial3(data)
                        

                    })
                    .catch((err) => console.log(err))


            } catch (error) {
                console.log({ error: 'Erro ao buscar usuários' })
                console.log(error)
            }

            try {

                await fetch(`${process.env.REACT_APP_BASE_URL_GALERY}/aventura4`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'aplication/json',
                    }
                    
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setLivros4(data)
                        setLivrosinitial4(data)
                        

                    })
                    .catch((err) => console.log(err))


            } catch (error) {
                console.log({ error: 'Erro ao buscar usuários' })
                console.log(error)
            }


            try {

                await fetch(`${process.env.REACT_APP_BASE_URL_GALERY}/aventura5`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'aplication/json',
                    }
                    
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setLivros5(data)
                        setLivrosinitial5(data)
                        

                    })
                    .catch((err) => console.log(err))


            } catch (error) {
                console.log({ error: 'Erro ao buscar usuários' })
                console.log(error)
            }
        }
        fetchUsers();

    }, [])

    const handlechange = ({ target }) => {
        if (!target.value) {
            setLivros(livrosinitial)
            setLivros1(livrosinitial1)
            setLivros2(livrosinitial2)
            setLivros3(livrosinitial3)
            setLivros4(livrosinitial4)
            setLivros5(livrosinitial5)
            return
        }

        const filterlivros = livros.filter(({ titulo }) => titulo.includes(target.value))
        const filterlivros1 = livros1.filter(({ titulo }) => titulo.includes(target.value))
        const filterlivros2 = livros2.filter(({ titulo }) => titulo.includes(target.value))
        const filterlivros3 = livros3.filter(({ titulo }) => titulo.includes(target.value))
        const filterlivros4 = livros4.filter(({ titulo }) => titulo.includes(target.value))
        const filterlivros5 = livros5.filter(({ titulo }) => titulo.includes(target.value))

        setLivros(filterlivros)
        setLivros1(filterlivros1)
        setLivros2(filterlivros2)
        setLivros3(filterlivros3)
        setLivros4(filterlivros4)
        setLivros5(filterlivros5)

    }
    return (

        <div className="BuscarLivro">
        
            <div class="container-fluid">
                <input class="form-control me-2" type="search" onChange={handlechange} placeholder="Buscar Livro Aventura" aria-label="Search" />
            </div>

            <div className="buscaname">
                <Carousel className="carrossel"
                    plugins={[
                        'centered',
                        'infinite',
                        'arrows',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 2,
                            },
                        },
                    ]}
                    breakpoints={{
                        600: {
                            plugins: [
                                'centered',
                                'infinite',
                                'arrows',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1
                                    }
                                },
                            ],
                        },
                        900: {
                            plugins: [
                                'centered',
                                'infinite',
                                'arrows',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1
                                    }
                                },
                            ]

                        }
                    }}
                >

                    {livros.length > 0 &&
                        livros.map((livros) => (
                            <LivrosAventuraInfomacoesBusca
                                titulo={livros.titulo}
                                Id={livros._id}
                                descricaoMin={livros.descricaoMin}
                                img={livros.img}
                                data={livros.data}

                            />
                        )

                        )}
                </Carousel>

                <div className="carrossel-mobile">


        {livros.length > 0 &&
          livros.map((livros) => (
            <LivrosAventuraInfomacoesBusca
              titulo={livros.titulo}
              Id={livros._id}
              descricaoMin={livros.descricaoMin}
              img={livros.img}
              data={livros.data}

            />
          )

          )}

      </div>



                <Carousel className="carrossel"
                    plugins={[
                        'centered',
                        'infinite',
                        'arrows',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 2,
                            },
                        },
                    ]}
                    breakpoints={{
                        600: {
                            plugins: [
                                'centered',
                                'infinite',
                                'arrows',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1
                                    }
                                },
                            ],
                        },
                        900: {
                            plugins: [
                                'centered',
                                'infinite',
                                'arrows',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1
                                    }
                                },
                            ]

                        }
                    }}
                >

                    {livros1.length > 0 &&
                        livros1.map((livros1) => (
                            <LivrosAventuraInfomacoesBusca1
                                titulo={livros1.titulo}
                                Id={livros1._id}
                                descricaoMin={livros1.descricaoMin}
                                img={livros1.img}
                                data={livros1.data}

                            />
                        )

                        )}
                </Carousel>

                <div className="carrossel-mobile">


{livros1.length > 0 &&
  livros1.map((livros1) => (
    <LivrosAventuraInfomacoesBusca1
      titulo={livros1.titulo}
      Id={livros1._id}
      descricaoMin={livros1.descricaoMin}
      img={livros1.img}
      data={livros1.data}

    />
  )

  )}

</div>

                

                <Carousel className="carrossel"
                    plugins={[
                        'centered',
                        'infinite',
                        'arrows',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 2,
                            },
                        },
                    ]}
                    breakpoints={{
                        600: {
                            plugins: [
                                'centered',
                                'infinite',
                                'arrows',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1
                                    }
                                },
                            ],
                        },
                        900: {
                            plugins: [
                                'centered',
                                'infinite',
                                'arrows',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1
                                    }
                                },
                            ]

                        }
                    }}
                >

                    {livros2.length > 0 &&
                        livros2.map((livros2) => (
                            <LivrosAventuraInfomacoesBusca2
                                titulo={livros2.titulo}
                                Id={livros2._id}
                                descricaoMin={livros2.descricaoMin}
                                img={livros2.img}
                                data={livros2.data}

                            />
                        )

                        )}
                </Carousel>

                <div className="carrossel-mobile">


{livros2.length > 0 &&
  livros2.map((livros2) => (
    <LivrosAventuraInfomacoesBusca2
      titulo={livros2.titulo}
      Id={livros2._id}
      descricaoMin={livros2.descricaoMin}
      img={livros2.img}
      data={livros2.data}

    />
  )

  )}

</div>

                <Carousel className="carrossel"
                    plugins={[
                        'centered',
                        'infinite',
                        'arrows',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 2,
                            },
                        },
                    ]}
                    breakpoints={{
                        600: {
                            plugins: [
                                'centered',
                                'infinite',
                                'arrows',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1
                                    }
                                },
                            ],
                        },
                        900: {
                            plugins: [
                                'centered',
                                'infinite',
                                'arrows',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1
                                    }
                                },
                            ]

                        }
                    }}
                >

                    {livros3.length > 0 &&
                        livros3.map((livros3) => (
                            <LivrosAventuraInfomacoesBusca3
                                titulo={livros3.titulo}
                                Id={livros3._id}
                                descricaoMin={livros3.descricaoMin}
                                img={livros3.img}
                                data={livros3.data}

                            />
                        )

                        )}
                </Carousel>

                <div className="carrossel-mobile">


{livros3.length > 0 &&
  livros3.map((livros3) => (
    <LivrosAventuraInfomacoesBusca3
      titulo={livros3.titulo}
      Id={livros3._id}
      descricaoMin={livros3.descricaoMin}
      img={livros3.img}
      data={livros3.data}

    />
  )

  )}

</div>

                <Carousel className="carrossel"
                    plugins={[
                        'centered',
                        'infinite',
                        'arrows',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 2,
                            },
                        },
                    ]}
                    breakpoints={{
                        600: {
                            plugins: [
                                'centered',
                                'infinite',
                                'arrows',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1
                                    }
                                },
                            ],
                        },
                        900: {
                            plugins: [
                                'centered',
                                'infinite',
                                'arrows',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1
                                    }
                                },
                            ]

                        }
                    }}
                >

                    {livros4.length > 0 &&
                        livros4.map((livros4) => (
                            <LivrosAventuraInfomacoesBusca4
                                titulo={livros4.titulo}
                                Id={livros4._id}
                                descricaoMin={livros4.descricaoMin}
                                img={livros4.img}
                                data={livros4.data}

                            />
                        )

                        )}
                </Carousel>

                <div className="carrossel-mobile">


{livros4.length > 0 &&
  livros4.map((livros4) => (
    <LivrosAventuraInfomacoesBusca1
      titulo={livros4.titulo}
      Id={livros4._id}
      descricaoMin={livros4.descricaoMin}
      img={livros4.img}
      data={livros4.data}

    />
  )

  )}

</div>

                <Carousel className="carrossel"
                    plugins={[
                        'centered',
                        'infinite',
                        'arrows',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 2,
                            },
                        },
                    ]}
                    breakpoints={{
                        600: {
                            plugins: [
                                'centered',
                                'infinite',
                                'arrows',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1
                                    }
                                },
                            ],
                        },
                        900: {
                            plugins: [
                                'centered',
                                'infinite',
                                'arrows',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1
                                    }
                                },
                            ]

                        }
                    }}
                >

                    {livros5.length > 0 &&
                        livros5.map((livros5) => (
                            <LivrosAventuraInfomacoesBusca5
                                titulo={livros5.titulo}
                                Id={livros5._id}
                                descricaoMin={livros5.descricaoMin}
                                img={livros5.img}
                                data={livros5.data}

                            />
                        )

                        )}
                </Carousel>

                <div className="carrossel-mobile">


{livros5.length > 0 &&
  livros5.map((livros5) => (
    <LivrosAventuraInfomacoesBusca5
      titulo={livros5.titulo}
      Id={livros5._id}
      descricaoMin={livros5.descricaoMin}
      img={livros5.img}
      data={livros5.data}

    />
  )

  )}

</div>
            </div>

        </div>





    )
}

export default Buscarlivro