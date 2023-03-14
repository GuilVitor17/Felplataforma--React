import { Routes, Route, Navigate, useParams } from "react-router-dom";

import RoutesPrivatesLivrosAventura from "../../componentes/home/Routes-Livros/routesLivrosAventura";
import RoutesPrivatesLivrosHistoria from "../../componentes/home/Routes-Livros/routesLivrosHistoria";
import RoutesPrivatesLivrosInfantil from "../../componentes/home/Routes-Livros/routesLivrosInfantil";
import RoutesPrivatesLivrosLiteratura from "../../componentes/home/Routes-Livros/routesLivrosLiteratura";
import RoutesPrivatesLivrosReligiao from "../../componentes/home/Routes-Livros/routesLivrosReligiao";
import RoutesPrivatesLivrosRomance from "../../componentes/home/Routes-Livros/routesLivrosRomance";

import RoutesBuscaLivrosAventura from "../../componentes/home/Routes-Livros/routesLivrosBusca";
import RoutesBuscaLivrosHistoria from "../../componentes/home/Routes-Livros/routesLivrosBuscaHistoria";
import RoutesBuscaLivrosInfantil from "../../componentes/home/Routes-Livros/routesLivrosBuscaInfantil";
import RoutesBuscaLivrosLiteratura from "../../componentes/home/Routes-Livros/routesLivrosBuscaLiteratura";
import RoutesBuscaLivrosReligiao from "../../componentes/home/Routes-Livros/routesLivrosBuscaReligiao";
import RoutesBuscaLivrosRomance from "../../componentes/home/Routes-Livros/routesLivrosBuscaRomance";


import RoutesBuscaFilmesAcao from "../../componentes/home/Routes-Filmes/routesFilmesBusca";
import RoutesBuscaFilmesDrama from "../../componentes/home/Routes-Filmes/routesFilmesBuscaDrama";
import RoutesBuscaFilmesTerror from "../../componentes/home/Routes-Filmes/routesFilmesBuscaTerror";
import RoutesBuscaFilmesComedia from "../../componentes/home/Routes-Filmes/routesFilmesBuscaComedia";
import RoutesBuscaFilmesDesenho from "../../componentes/home/Routes-Filmes/routesFilmesBuscaDesenho";
import RoutesBuscaFilmesRomance from "../../componentes/home/Routes-Filmes/routesFilmesBuscaRomance";


import RoutesPrivatesLogoMarcas from "../../componentes/home/Routes-Logos/routesLogo";
import RoutesPrivatesLogoMarcasId from "../../componentes/home/Routes-Logos/Galery-Logos/Logos/Logo-marcas/logoMaracaspoId";
import RoutesPrivatesLogoMarcasDestaqueId from "../../componentes/home/Routes-Logos/Galery-Logos/Logos/Destaques/logoDestaquepoId";
// import RoutesPrivatesLogoMarcasDestaqueId from "../../componentes/home/Routes-Logos/Galery-Logos/Logos/Destaques/Destaques edit/";


function routes() {


    const user = localStorage.getItem("token");




    return (

        <>
            <Routes>
              


                {user && <Route path="/livros/aventuras" element={<RoutesPrivatesLivrosAventura />} />}
                {user && <Route path="/livros/historias" element={<RoutesPrivatesLivrosHistoria />} />}
                {user && <Route path="/livros/infantils" element={<RoutesPrivatesLivrosInfantil />} />}
                {user && <Route path="/livros/literaturas" element={<RoutesPrivatesLivrosLiteratura />} />}
                {user && <Route path="/livros/religiaos" element={<RoutesPrivatesLivrosReligiao />} />}
                {user && <Route path="/livros/romances" element={<RoutesPrivatesLivrosRomance />} />}


                {user && <Route path="/buscalivross" element={<RoutesBuscaLivrosAventura />} />}
                {user && <Route path="/buscalivroshistoria" element={<RoutesBuscaLivrosHistoria />} />}
                {user && <Route path="/buscalivrosinfantil" element={<RoutesBuscaLivrosInfantil />} />}
                {user && <Route path="/buscalivrosliteratura" element={<RoutesBuscaLivrosLiteratura />} />}
                {user && <Route path="/buscalivrosreligiao" element={<RoutesBuscaLivrosReligiao />} />}
                {user && <Route path="/buscalivrosromance" element={<RoutesBuscaLivrosRomance />} />}

                {user && <Route path="/buscafilmes" element={<RoutesBuscaFilmesAcao />} />}
                {user && <Route path="/buscafilmesdrama" element={<RoutesBuscaFilmesDrama />} />}
                {user && <Route path="/buscafilmesterror" element={<RoutesBuscaFilmesTerror />} />}
                {user && <Route path="/buscafilmescomedia" element={<RoutesBuscaFilmesComedia/>} />}
                {user && <Route path="/buscafilmesdesenho" element={<RoutesBuscaFilmesDesenho />} />}
                {user && <Route path="/buscafilmesromance" element={<RoutesBuscaFilmesRomance />} />}



                {user && <Route path="/logos" element={<RoutesPrivatesLogoMarcas />} />}
                {user && <Route path="/logos/:id" element={<RoutesPrivatesLogoMarcasId />} />}
                {user && <Route path="/logosdestaque/:id" element={<RoutesPrivatesLogoMarcasDestaqueId />} />}

                
               


            </Routes>
        </>
    );
}

export default routes;
