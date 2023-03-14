import { Routes, Route, Navigate, useParams } from "react-router-dom";
import RoutesPrivatesLivros from '../../componentes/home/Routes-Livros/routesLivros';
import LivrosAventuraPorId from '../../componentes/home/Routes-Livros/Galery-Livros/livros/Aventuras/livropoId';
import LivrosPorIdRomance from '../../componentes/home/Routes-Livros/Galery-Livros/livros/Romance/RomancelivropoId';
import LivrosPorIdReligiao from '../../componentes/home/Routes-Livros/Galery-Livros/livros/Religiao/ReligiaolivropoId';
import LivrosPorIdHistoria from '../../componentes/home/Routes-Livros/Galery-Livros/livros/Historia/HistorialivropoId';
import LivrosPorIdInfantil from '../../componentes/home/Routes-Livros/Galery-Livros/livros/Infantil/InfantilLivropoId';
import LivrosPorIdLiteratura from '../../componentes/home/Routes-Livros/Galery-Livros/livros/Literatura/LiteraturalivropoId';
import LivrosDestaquePorId from '../../componentes/home/Routes-Livros/Galery-Livros/livros/Destaques/livroDestaquepoId';


import RoutesPrivatesContato from '../../componentes/home/Contato/contato';
import RoutesPrivatesMinhaConta from '../../componentes/home/minhaConta/Configuracoes';




function routes() {


    const user = localStorage.getItem("token");




    return (

        <>
            <Routes>
              
                {/* routes homelivros private */}
                {user && <Route path="/livros/destaque" element={<RoutesPrivatesLivros />} />}
                {user && <Route path="/livros/aventura/:id" element={<LivrosAventuraPorId />} />}
                {user && <Route path="/livros/romances/:id" element={<LivrosPorIdRomance />} />}
                {user && <Route path="/livros/religiao/:id" element={<LivrosPorIdReligiao />} />}
                {user && <Route path="/livros/historia/:id" element={<LivrosPorIdHistoria />} />}
                {user && <Route path="/livros/infantil/:id" element={<LivrosPorIdInfantil />} />}
                {user && <Route path="/livros/literatura/:id" element={<LivrosPorIdLiteratura />} />}
                {user && <Route path="/livros/destaque/:id" element={<LivrosDestaquePorId />} />}


                {user && <Route path="/contato/" element={<RoutesPrivatesContato/>} />}
                {user && <Route path="/minhaconta/:id" element={<RoutesPrivatesMinhaConta/>} />}


            </Routes>
        </>
    );
}

export default routes;
