import { Routes, Route, Navigate, useParams } from "react-router-dom";

import FilmesPorIdAcao1 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Acao/RoutesAcao1/filmepoIdRoutes";
import FilmesPorIdAcao2 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Acao/RoutesAcao2/filmepoIdRoutes";
import FilmesPorIdAcao3 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Acao/RoutesAcao3/filmepoIdRoutes";
import FilmesPorIdAcao4 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Acao/RoutesAcao4/filmepoIdRoutes";
import FilmesPorIdAcao5 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Acao/RoutesAcao5/filmepoIdRoutes";


import FilmesPorIdComedia1 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Comedia/RoutesComedia1/filmepoIdRoutes";
import FilmesPorIdComedia2 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Comedia/RoutesComedia2/filmepoIdRoutes";
import FilmesPorIdComedia3 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Comedia/RoutesComedia3/filmepoIdRoutes";
import FilmesPorIdComedia4 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Comedia/RoutesComedia4/filmepoIdRoutes";
import FilmesPorIdComedia5 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Comedia/RoutesComedia5/filmepoIdRoutes";

import FilmesPorIdDrama1 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Drama/RoutesDrama1/filmepoIdRoutes";
import FilmesPorIdDrama2 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Drama/RoutesDrama2/filmepoIdRoutes";
import FilmesPorIdDrama3 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Drama/RoutesDrama3/filmepoIdRoutes";
import FilmesPorIdDrama4 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Drama/RoutesDrama4/filmepoIdRoutes";
import FilmesPorIdDrama5 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Drama/RoutesDrama5/filmepoIdRoutes";


import FilmesPorIdTerror1 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Terror/RoutesTerror1/filmepoIdRoutes";
import FilmesPorIdTerror2 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Terror/RoutesTerror2/filmepoIdRoutes";
import FilmesPorIdTerror3 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Terror/RoutesTerror3/filmepoIdRoutes";
import FilmesPorIdTerror4 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Terror/RoutesTerror4/filmepoIdRoutes";
import FilmesPorIdTerror5 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Terror/RoutesTerror5/filmepoIdRoutes";


import FilmesPorIdDesenho1 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Desenho/RoutesDesenho1/DesenhopoIdRoutes";
import FilmesPorIdDesenho2 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Desenho/RoutesDesenho2/DesenhopoIdRoutes";
import FilmesPorIdDesenho3 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Desenho/RoutesDesenho3/DesenhopoIdRoutes";
import FilmesPorIdDesenho4 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Desenho/RoutesDesenho4/DesenhopoIdRoutes";
import FilmesPorIdDesenho5 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Desenho/RoutesDesenho5/DesenhopoIdRoutes";

import FilmesPorIdRomance1 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Romance/RoutesRomance1/filmepoIdRoutes";
import FilmesPorIdRomance2 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Romance/RoutesRomance2/filmepoIdRoutes";
import FilmesPorIdRomance3 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Romance/RoutesRomance3/filmepoIdRoutes";
import FilmesPorIdRomance4 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Romance/RoutesRomance4/filmepoIdRoutes";
import FilmesPorIdRomance5 from "../../componentes/home/Routes-Filmes/Galery-Filmes/Filmes/Romance/RoutesRomance5/filmepoIdRoutes";

function routes() {


    const user = localStorage.getItem("token");




    return (

        <>
            <Routes>          

                {user && <Route path="/filmes/acaos1/:id" element={<FilmesPorIdAcao1 />} />}
                {user && <Route path="/filmes/acaos2/:id" element={<FilmesPorIdAcao2 />} />}
                {user && <Route path="/filmes/acaos3/:id" element={<FilmesPorIdAcao3 />} />}
                {user && <Route path="/filmes/acaos4/:id" element={<FilmesPorIdAcao4 />} />}
                {user && <Route path="/filmes/acaos5/:id" element={<FilmesPorIdAcao5 />} />}


                {user && <Route path="/filmes/comedias1/:id" element={<FilmesPorIdComedia1 />} />}
                {user && <Route path="/filmes/comedias2/:id" element={<FilmesPorIdComedia2 />} />}
                {user && <Route path="/filmes/comedias3/:id" element={<FilmesPorIdComedia3 />} />}
                {user && <Route path="/filmes/comedias4/:id" element={<FilmesPorIdComedia4 />} />}
                {user && <Route path="/filmes/comedias5/:id" element={<FilmesPorIdComedia5 />} />}


                {user && <Route path="/filmes/dramas1/:id" element={<FilmesPorIdDrama1 />} />}
                {user && <Route path="/filmes/dramas2/:id" element={<FilmesPorIdDrama2 />} />}
                {user && <Route path="/filmes/dramas3/:id" element={<FilmesPorIdDrama3 />} />}
                {user && <Route path="/filmes/dramas4/:id" element={<FilmesPorIdDrama4 />} />}
                {user && <Route path="/filmes/dramas5/:id" element={<FilmesPorIdDrama5 />} />}


                {user && <Route path="/filmes/terror1/:id" element={<FilmesPorIdTerror1 />} />}
                {user && <Route path="/filmes/terror2/:id" element={<FilmesPorIdTerror2 />} />}
                {user && <Route path="/filmes/terror3/:id" element={<FilmesPorIdTerror3 />} />}
                {user && <Route path="/filmes/terror4/:id" element={<FilmesPorIdTerror4 />} />}
                {user && <Route path="/filmes/terror5/:id" element={<FilmesPorIdTerror5 />} />}


                {user && <Route path="/filmes/desenhos1/:id" element={<FilmesPorIdDesenho1 />} />}
                {user && <Route path="/filmes/desenhos2/:id" element={<FilmesPorIdDesenho2 />} />}
                {user && <Route path="/filmes/desenhos3/:id" element={<FilmesPorIdDesenho3 />} />}
                {user && <Route path="/filmes/desenhos4/:id" element={<FilmesPorIdDesenho4 />} />}
                {user && <Route path="/filmes/desenhos5/:id" element={<FilmesPorIdDesenho5 />} />}

                {user && <Route path="/filmes/romances1/:id" element={<FilmesPorIdRomance1 />} />}
                {user && <Route path="/filmes/romances2/:id" element={<FilmesPorIdRomance2 />} />}
                {user && <Route path="/filmes/romances3/:id" element={<FilmesPorIdRomance3 />} />}
                {user && <Route path="/filmes/romances4/:id" element={<FilmesPorIdRomance4 />} />}
                {user && <Route path="/filmes/romances5/:id" element={<FilmesPorIdRomance5 />} />}


            </Routes>
        </>
    );
}

export default routes;
