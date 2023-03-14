import { Routes, Route, Navigate, useParams } from "react-router-dom";

import LivrosPorIdReligiao1 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Religiao/RoutesReligiao1/ReligiaopoIdRoutes";
import LivrosPorIdReligiao2 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Religiao/RoutesReligiao2/ReligiaopoIdRoutes";
import LivrosPorIdReligiao3 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Religiao/RoutesReligiao3/ReligiaopoIdRoutes";
import LivrosPorIdReligiao4 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Religiao/RoutesReligiao4/ReligiaopoIdRoutes";
import LivrosPorIdReligiao5 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Religiao/RoutesReligiao5/ReligiaopoIdRoutes";

import LivrosPorIdHistoria1 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Historia/RoutesHistoria1/historiapoIdRoutes";
import LivrosPorIdHistoria2 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Historia/RoutesHistoria2/historiapoIdRoutes";
import LivrosPorIdHistoria3 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Historia/RoutesHistoria3/historiapoIdRoutes";
import LivrosPorIdHistoria4 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Historia/RoutesHistoria4/historiapoIdRoutes";
import LivrosPorIdHistoria5 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Historia/RoutesHistoria5/historiapoIdRoutes";


import LivrosPorIdAventura1 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Aventuras/RoutesAventura1/livroAventurapoIdRoutes";
import LivrosPorIdAventura2 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Aventuras/RoutesAventura2/livroAventurapoIdRoutes";
import LivrosPorIdAventura3 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Aventuras/RoutesAventura3/livroAventurapoIdRoutes";
import LivrosPorIdAventura4 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Aventuras/RoutesAventura4/livroAventurapoIdRoutes";
import LivrosPorIdAventura5 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Aventuras/RoutesAventura5/livroAventurapoIdRoutes";


import LivrosPorIdLiteratura1 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Literatura/RoutesLiteratura1/LiteraturapoIdRoutes";
import LivrosPorIdLiteratura2 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Literatura/RoutesLiteratura2/LiteraturapoIdRoutes";
import LivrosPorIdLiteratura3 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Literatura/RoutesLiteratura3/LiteraturapoIdRoutes";
import LivrosPorIdLiteratura4 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Literatura/RoutesLiteratura4/LiteraturapoIdRoutes";
import LivrosPorIdLiteratura5 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Literatura/RoutesLiteratura5/LiteraturapoIdRoutes";


import LivrosPorIdInfantil1 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Infantil/RoutesInfantil1/InfantilpoIdRoutes";
import LivrosPorIdInfantil2 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Infantil/RoutesInfantil2/InfantilpoIdRoutes";
import LivrosPorIdInfantil3 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Infantil/RoutesInfantil3/InfantilpoIdRoutes";
import LivrosPorIdInfantil4 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Infantil/RoutesInfantil4/InfantilpoIdRoutes";
import LivrosPorIdInfantil5 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Infantil/RoutesInfantil5/InfantilpoIdRoutes";

import LivrosPorIdRomance1 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Romance/RoutesRomance1/RomancepoIdRoutes";
import LivrosPorIdRomance2 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Romance/RoutesRomance2/RomancepoIdRoutes";
import LivrosPorIdRomance3 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Romance/RoutesRomance3/RomancepoIdRoutes";
import LivrosPorIdRomance4 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Romance/RoutesRomance4/RomancepoIdRoutes";
import LivrosPorIdRomance5 from "../../componentes/home/Routes-Livros/Galery-Livros/livros/Romance/RoutesRomance5/RomancepoIdRoutes";





function routes() {


    const user = localStorage.getItem("token");




    return (

        <>
            <Routes>

                {/* rota id de religiao */}
                {user && <Route path="/livros/religiao1/:id" element={<LivrosPorIdReligiao1 />} />}
                {user && <Route path="/livros/religiao2/:id" element={<LivrosPorIdReligiao2 />} />}
                {user && <Route path="/livros/religiao3/:id" element={<LivrosPorIdReligiao3 />} />}
                {user && <Route path="/livros/religiao4/:id" element={<LivrosPorIdReligiao4 />} />}
                {user && <Route path="/livros/religiao5/:id" element={<LivrosPorIdReligiao5 />} />}

                {/* rota id de aventura */}
                {user && <Route path="/livros/aventuras1/:id" element={<LivrosPorIdAventura1 />} />}
                {user && <Route path="/livros/aventuras2/:id" element={<LivrosPorIdAventura2 />} />}
                {user && <Route path="/livros/aventuras3/:id" element={<LivrosPorIdAventura3 />} />}
                {user && <Route path="/livros/aventuras4/:id" element={<LivrosPorIdAventura4 />} />}
                {user && <Route path="/livros/aventuras5/:id" element={<LivrosPorIdAventura5 />} />}

                {/* rota id de historia */}
                {user && <Route path="/livros/historia1/:id" element={<LivrosPorIdHistoria1 />} />}
                {user && <Route path="/livros/historia2/:id" element={<LivrosPorIdHistoria2 />} />}
                {user && <Route path="/livros/historia3/:id" element={<LivrosPorIdHistoria3 />} />}
                {user && <Route path="/livros/historia4/:id" element={<LivrosPorIdHistoria4 />} />}
                {user && <Route path="/livros/historia5/:id" element={<LivrosPorIdHistoria5 />} />}

                {/* rota id de romance */}
                {user && <Route path="/livros/romance1/:id" element={<LivrosPorIdRomance1 />} />}
                {user && <Route path="/livros/romance2/:id" element={<LivrosPorIdRomance2 />} />}
                {user && <Route path="/livros/romance3/:id" element={<LivrosPorIdRomance3 />} />}
                {user && <Route path="/livros/romance4/:id" element={<LivrosPorIdRomance4 />} />}
                {user && <Route path="/livros/romance5/:id" element={<LivrosPorIdRomance5 />} />}

                {/* rota id de infantil */}
                {user && <Route path="/livros/infantils1/:id" element={<LivrosPorIdInfantil1 />} />}
                {user && <Route path="/livros/infantils2/:id" element={<LivrosPorIdInfantil2 />} />}
                {user && <Route path="/livros/infantils3/:id" element={<LivrosPorIdInfantil3 />} />}
                {user && <Route path="/livros/infantils4/:id" element={<LivrosPorIdInfantil4 />} />}
                {user && <Route path="/livros/infantils5/:id" element={<LivrosPorIdInfantil5 />} />}

                {/* rota id de literatura */}
                {user && <Route path="/livros/literatura1/:id" element={<LivrosPorIdLiteratura1 />} />}
                {user && <Route path="/livros/literatura2/:id" element={<LivrosPorIdLiteratura2 />} />}
                {user && <Route path="/livros/literatura3/:id" element={<LivrosPorIdLiteratura3 />} />}
                {user && <Route path="/livros/literatura4/:id" element={<LivrosPorIdLiteratura4 />} />}
                {user && <Route path="/livros/literatura5/:id" element={<LivrosPorIdLiteratura5 />} />}


            </Routes>
        </>
    );
}

export default routes;
