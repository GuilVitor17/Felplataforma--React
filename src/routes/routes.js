import { Routes, Route, Navigate, useParams } from "react-router-dom";
import RoutesLogin from "./Rotas/Routeslogin";
import RoutesPost from "./Rotas/RoutesPost";
import RouteLivroId from "./Rotas/routesLivros-Id";
import RouteFilmesId from "./Rotas/routesFilmes-Id";
import RouteGeneroLivros from "./Rotas/routesLivrosGenero";
import RouteGeneroLivrosId from "./Rotas/routesLivrosGeneroId";
import RouteGeneroFilmes from "./Rotas/routesFilmesGenero";
import RouteGeneroFilmesId from "./Rotas/routesFilmesGeneros-Id";
import RouteGenerolivrosBusca from "./Rotas/routesbuscalivros";

function routes() {


    return (

        <>

        <RoutesLogin />
        <RoutesPost />
        <RouteLivroId />
        <RouteFilmesId />
        <RouteGeneroFilmes />
        <RouteGeneroLivros />
        <RouteGeneroLivrosId />
        <RouteGeneroFilmesId />
        <RouteGenerolivrosBusca />
           
        </>
    );
}

export default routes;
