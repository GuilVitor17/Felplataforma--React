import { Routes, Route, Navigate, useParams } from "react-router-dom";

import Routesbuscalivros from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Buscar/BuscarLivrosAventura/buscar";

function routes() {


    const user = localStorage.getItem("token");




    return (

        <>
            <Routes>
              
            

                {/* {user && <Route path="/buscalivros" element={<Routesbuscalivros/>} />} */}
             

              
            </Routes>
        </>
    );
}

export default routes;
