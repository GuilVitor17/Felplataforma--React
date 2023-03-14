import { Routes, Route, Navigate, useParams } from "react-router-dom";
import RoutesPrivatesPosts from '../../componentes/Auth/loginPost/RoutePostsPrivate';
import CreateAventura from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Aventuras/crud-livro/createAventura';
import LivrosUpdateAventura from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Aventuras/crud-livro/updateAventura';
import CreateHistoria from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Historia/crud-historia/createhistoria';
import LivrosUpdateHistoria from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Historia/crud-historia/updatehistoria';
import LivrosUpdateInfantil from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Infantil/crud-Infantil/updateInfantil';
import CreateInfantil from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Infantil/crud-Infantil/createInfantil';
import Createliteratura from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Literatura/crud-literatura/createliteratura';
import LivrosUpdateliteratura from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Literatura/crud-literatura/updateliteratura';
import Createreligiao from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Religiao/crud-Religiao/createReligiao';
import LivrosUpdatereligiao from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Religiao/crud-Religiao/updateReligiao';
import Createromance from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Romance/crud-romance/createRomance';
import LivrosUpdateromance from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Romance/crud-romance/updateRomance';
import LivrosUpdateDestaque from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Destaques edit/edit/updateDestaque';
import LoginPost from '../../componentes/Auth/loginPost/login-Post';
import GaleryFilmesPosts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/GaleryFilmesPosts";



import CreateComedia from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Comedia/crud-filme/createComedia";
import FilmeUpdateComedia from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Comedia/crud-filme/updateComedia";
import CreateAcao from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Acao/crud-Acao/createAcao";
import FilmessUpdateAcao from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Acao/crud-Acao/updateAcao";
import FilmesUpdateDestaque from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Destaques edit/edit/updateDestaque";
import FilmesUpdateDrama from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Drama/crud-Drama/updateDrama";
import CreateDrama from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Drama/crud-Drama/createDrama";
import Createromancefilmes from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Romance/crud-romance/createRomance";
import FilmesUpdateromance from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Romance/crud-romance/updateRomance";
import FilmessUpdateTerror from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Terror/crud-terror/updateterror";
import CreateTerror from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Terror/crud-terror/createterror";
import FilmessUpdateInfantil from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Desenho/crud-Infantil/updateInfantil";
import CreateInfantilFilmes from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Desenho/crud-Infantil/createInfantil";



import GaleryAcaoFilmesPosts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/GaleryAcaoFilmesPosts";
import GaleryComediaFilmesPosts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/GaleryComediaFilmesPosts";
import GaleryDesenhoFilmesPosts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/GaleryDesenhoFilmesPosts";
import GaleryDramaFilmesPosts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/GaleryDramaFilmesPosts";
import GaleryRomanceFilmesPosts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/GaleryRomanceFilmesPosts";
import GaleryTerrorFilmesPosts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/GaleryTerrorFilmesPosts";




import CreateAcao1FilmesPosts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Acao/AcaoPost1/crudPost/createPostAcao1";
import CreateAcao2FilmesPosts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Acao/AcaoPost2/crudPost/createPostAcao1";
import CreateAcao3FilmesPosts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Acao/AcaoPost3/crudPost/createPostAcao1";
import CreateAcao4FilmesPosts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Acao/AcaoPost4/crudPost/createPostAcao1";
import CreateAcao5FilmesPosts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Acao/AcaoPost5/crudPost/createPostAcao1";


import UpdateAcao1Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Acao/AcaoPost1/crudPost/updateAcao";
import UpdateAcao2Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Acao/AcaoPost2/crudPost/updateAcao";
import UpdateAcao3Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Acao/AcaoPost3/crudPost/updateAcao";
import UpdateAcao4Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Acao/AcaoPost4/crudPost/updateAcao";
import UpdateAcao5Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Acao/AcaoPost5/crudPost/updateAcao";



import CreateComedia1FilmesPosts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Comedia/Comedia1/crud-filme/createComedia";
import CreateComedia2FilmesPosts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Comedia/Comedia2/crud-filme/createComedia";
import CreateComedia3FilmesPosts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Comedia/Comedia3/crud-filme/createComedia";
import CreateComedia4FilmesPosts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Comedia/Comedia4/crud-filme/createComedia";
import CreateComedia5FilmesPosts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Comedia/Comedia5/crud-filme/createComedia";


import UpdateComedia1Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Comedia/Comedia1/crud-filme/updateComedia";
import UpdateComedia2Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Comedia/Comedia2/crud-filme/updateComedia";
import UpdateComedia3Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Comedia/Comedia3/crud-filme/updateComedia";
import UpdateComedia4Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Comedia/Comedia4/crud-filme/updateComedia";
import UpdateComedia5Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Comedia/Comedia5/crud-filme/updateComedia";



import UpdateDesenho1Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Desenho/Desenho1/crud-Infantil/updateInfantil";
import UpdateDesenho2Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Desenho/Desenho2/crud-Infantil/updateInfantil";
import UpdateDesenho3Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Desenho/Desenho3/crud-Infantil/updateInfantil";
import UpdateDesenho4Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Desenho/Desenho4/crud-Infantil/updateInfantil";
import UpdateDesenho5Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Desenho/Desenho5/crud-Infantil/updateInfantil";


import CreateDesenho1Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Desenho/Desenho1/crud-Infantil/createInfantil";
import CreateDesenho2Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Desenho/Desenho2/crud-Infantil/createInfantil";
import CreateDesenho3Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Desenho/Desenho3/crud-Infantil/createInfantil";
import CreateDesenho4Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Desenho/Desenho4/crud-Infantil/createInfantil";
import CreateDesenho5Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Desenho/Desenho5/crud-Infantil/createInfantil";


import CreateDrama1Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Drama/Drama1/crud-Drama/createDrama";
import CreateDrama2Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Drama/Drama2/crud-Drama/createDrama";
import CreateDrama3Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Drama/Drama3/crud-Drama/createDrama";
import CreateDrama4Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Drama/Drama4/crud-Drama/createDrama";
import CreateDrama5Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Drama/Drama5/crud-Drama/createDrama";


import UpdateDrama1Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Drama/Drama1/crud-Drama/updateDrama";
import UpdateDrama2Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Drama/Drama2/crud-Drama/updateDrama";
import UpdateDrama3Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Drama/Drama3/crud-Drama/updateDrama";
import UpdateDrama4Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Drama/Drama4/crud-Drama/updateDrama";
import UpdateDrama5Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Drama/Drama5/crud-Drama/updateDrama";




import CreateRomance1Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Romance/Romance1/crud-romance/createRomance";
import CreateRomance2Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Romance/Romance2/crud-romance/createRomance";
import CreateRomance3Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Romance/Romance3/crud-romance/createRomance";
import CreateRomance4Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Romance/Romance4/crud-romance/createRomance";
import CreateRomance5Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Romance/Romance5/crud-romance/createRomance";



import UpdateRomance1Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Romance/Romance1/crud-romance/updateRomance";
import UpdateRomance2Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Romance/Romance2/crud-romance/updateRomance";
import UpdateRomance3Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Romance/Romance3/crud-romance/updateRomance";
import UpdateRomance4Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Romance/Romance4/crud-romance/updateRomance";
import UpdateRomance5Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Romance/Romance5/crud-romance/updateRomance";




import UpdateTerror1Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Terror/Terror1/crud-terror/updateterror";
import UpdateTerror2Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Terror/Terror2/crud-terror/updateterror";
import UpdateTerror3Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Terror/Terror3/crud-terror/updateterror";
import UpdateTerror4Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Terror/Terror4/crud-terror/updateterror";
import UpdateTerror5Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Terror/Terror5/crud-terror/updateterror";



import CreateTerror1Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Terror/Terror1/crud-terror/createterror";
import CreateTerror2Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Terror/Terror2/crud-terror/createterror";
import CreateTerror3Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Terror/Terror3/crud-terror/createterror";
import CreateTerror4Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Terror/Terror4/crud-terror/createterror";
import CreateTerror5Posts from "../../componentes/home/Routes-Filmes/Galery-Filmes-posts/Filmes/Terror/Terror5/crud-terror/createterror";



// rotas de livros
import GaleryLivrosAventuraPost from '../../componentes/home/Routes-Livros/Galery-Livros-posts/GaleryLivrosAventurasPosts'
import GaleryLivrosHistoriaPost from '../../componentes/home/Routes-Livros/Galery-Livros-posts/GaleryLivrosHistoriaPosts'
import GaleryLivrosInfantilPost from '../../componentes/home/Routes-Livros/Galery-Livros-posts/GaleryLivrosInfantilPosts'
import GaleryLivrosLiteraturaPost from '../../componentes/home/Routes-Livros/Galery-Livros-posts/GaleryLivrosLiteraturaPosts'
import GaleryLivrosReligiaoPost from '../../componentes/home/Routes-Livros/Galery-Livros-posts/GaleryLivrosReligiaoPosts'
import GaleryLivrosRomancePost from '../../componentes/home/Routes-Livros/Galery-Livros-posts/GaleryLivrosRomancePosts'
import GaleryLogoMarcasPost from '../../componentes/home/Routes-Logos/GaleryLogosPost/GaleryLogos'


import CreateLivrosAventura1 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Aventuras/Aventura1/crud-livro/createAventura'
import CreateLivrosAventura2 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Aventuras/Aventura2/crud-livro/createAventura'
import CreateLivrosAventura3 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Aventuras/Aventura3/crud-livro/createAventura'
import CreateLivrosAventura4 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Aventuras/Aventura4/crud-livro/createAventura'
import CreateLivrosAventura5 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Aventuras/Aventura5/crud-livro/createAventura'


import UpdateLivrosAventura1 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Aventuras/Aventura1/crud-livro/updateAventura'
import UpdateLivrosAventura2 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Aventuras/Aventura2/crud-livro/updateAventura'
import UpdateLivrosAventura3 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Aventuras/Aventura3/crud-livro/updateAventura'
import UpdateLivrosAventura4 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Aventuras/Aventura4/crud-livro/updateAventura'
import UpdateLivrosAventura5 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Aventuras/Aventura5/crud-livro/updateAventura'


import CreateLivrosHistoria1 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Historia/Historia1/crud-historia/createhistoria'
import CreateLivrosHistoria2 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Historia/Historia2/crud-historia/createhistoria'
import CreateLivrosHistoria3 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Historia/Historia3/crud-historia/createhistoria'
import CreateLivrosHistoria4 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Historia/Historia4/crud-historia/createhistoria'
import CreateLivrosHistoria5 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Historia/Historia5/crud-historia/createhistoria'


import UpdateLivrosHistoria1 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Historia/Historia1/crud-historia/updatehistoria'
import UpdateLivrosHistoria2 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Historia/Historia2/crud-historia/updatehistoria'
import UpdateLivrosHistoria3 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Historia/Historia3/crud-historia/updatehistoria'
import UpdateLivrosHistoria4 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Historia/Historia4/crud-historia/updatehistoria'
import UpdateLivrosHistoria5 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Historia/Historia5/crud-historia/updatehistoria'


import CreateLivrosInfantil1 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Infantil/Infantil1/crud-Infantil/createInfantil'
import CreateLivrosInfantil2 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Infantil/Infantil2/crud-Infantil/createInfantil'
import CreateLivrosInfantil3 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Infantil/Infantil3/crud-Infantil/createInfantil'
import CreateLivrosInfantil4 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Infantil/Infantil4/crud-Infantil/createInfantil'
import CreateLivrosInfantil5 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Infantil/Infantil5/crud-Infantil/createInfantil'


import UpdateLivrosInfantil1 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Infantil/Infantil1/crud-Infantil/updateInfantil'
import UpdateLivrosInfantil2 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Infantil/Infantil2/crud-Infantil/updateInfantil'
import UpdateLivrosInfantil3 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Infantil/Infantil3/crud-Infantil/updateInfantil'
import UpdateLivrosInfantil4 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Infantil/Infantil4/crud-Infantil/updateInfantil'
import UpdateLivrosInfantil5 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Infantil/Infantil5/crud-Infantil/updateInfantil'


import UpdateLivrosLiteratura1 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Literatura/Literatura1/crud-literatura/updateliteratura'
import UpdateLivrosLiteratura2 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Literatura/Literatura2/crud-literatura/updateliteratura'
import UpdateLivrosLiteratura3 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Literatura/Literatura3/crud-literatura/updateliteratura'
import UpdateLivrosLiteratura4 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Literatura/Literatura4/crud-literatura/updateliteratura'
import UpdateLivrosLiteratura5 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Literatura/Literatura5/crud-literatura/updateliteratura'



import CreateLivrosLiteratura1 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Literatura/Literatura1/crud-literatura/createliteratura'
import CreateLivrosLiteratura2 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Literatura/Literatura2/crud-literatura/createliteratura'
import CreateLivrosLiteratura3 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Literatura/Literatura3/crud-literatura/createliteratura'
import CreateLivrosLiteratura4 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Literatura/Literatura4/crud-literatura/createliteratura'
import CreateLivrosLiteratura5 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Literatura/Literatura5/crud-literatura/createliteratura'


import UpdateLivrosReligiao1 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Religiao/Religiao1/crud-Religiao/updateReligiao'
import UpdateLivrosReligiao2 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Religiao/Religiao2/crud-Religiao/updateReligiao'
import UpdateLivrosReligiao3 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Religiao/Religiao3/crud-Religiao/updateReligiao'
import UpdateLivrosReligiao4 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Religiao/Religiao4/crud-Religiao/updateReligiao'
import UpdateLivrosReligiao5 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Religiao/Religiao5/crud-Religiao/updateReligiao'

import CreateLivrosReligiao1 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Religiao/Religiao1/crud-Religiao/updateReligiao'
import CreateLivrosReligiao2 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Religiao/Religiao2/crud-Religiao/updateReligiao'
import CreateLivrosReligiao3 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Religiao/Religiao3/crud-Religiao/updateReligiao'
import CreateLivrosReligiao4 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Religiao/Religiao4/crud-Religiao/updateReligiao'
import CreateLivrosReligiao5 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Religiao/Religiao5/crud-Religiao/updateReligiao'


import CreateLivrosRomance1 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Romance/Romance1/crud-romance/createRomance'
import CreateLivrosRomance2 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Romance/Romance2/crud-romance/createRomance'
import CreateLivrosRomance3 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Romance/Romance3/crud-romance/createRomance'
import CreateLivrosRomance4 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Romance/Romance4/crud-romance/createRomance'
import CreateLivrosRomance5 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Romance/Romance5/crud-romance/createRomance'


import UpdateLivrosRomance1 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Romance/Romance1/crud-romance/updateRomance'
import UpdateLivrosRomance2 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Romance/Romance2/crud-romance/updateRomance'
import UpdateLivrosRomance3 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Romance/Romance3/crud-romance/updateRomance'
import UpdateLivrosRomance4 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Romance/Romance4/crud-romance/updateRomance'
import UpdateLivrosRomance5 from '../../componentes/home/Routes-Livros/Galery-Livros-posts/livros/Romance/Romance5/crud-romance/updateRomance'


import RoutesPrivateslogoUpdate from '../../componentes/home/Routes-Logos/GaleryLogosPost/Logos/LogoMarcas/crudPost/updateLogo'
import RoutesPrivateslogoDestaqueUpdate from '../../componentes/home/Routes-Logos/GaleryLogosPost/Logos/Destaquesedit/edit/updateDestaque'
import RoutesPrivateslogoCreate from '../../componentes/home/Routes-Logos/GaleryLogosPost/Logos/LogoMarcas/crudPost/createPostLogo'

function routesPost() {


    const userPost = localStorage.getItem("tokenPost");




    return (

        <>
            <Routes>
                
                {/* routesPostPrivate-AVENTURA */}
                {userPost && <Route path="/posts/createAventura" element={<CreateAventura />} />}
                {userPost && <Route path="/posts/updateAventura/:id" element={<LivrosUpdateAventura />} />}

                {/* routesPostPrivate-historia */}
                {userPost && <Route path="/posts/createhistoria" element={<CreateHistoria />} />}
                {userPost && <Route path="/posts/updatehistoria/:id" element={<LivrosUpdateHistoria />} />}

                {/* routesPostPrivate-Infantil */}
                {userPost && <Route path="/posts/createinfantil" element={<CreateInfantil />} />}
                {userPost && <Route path="/posts/updateinfantil/:id" element={<LivrosUpdateInfantil />} />}

                 {/* routesPostPrivate-Literatura */}
                 {userPost && <Route path="/posts/createliteratura" element={<Createliteratura />} />}
                {userPost && <Route path="/posts/updateliteratura/:id" element={<LivrosUpdateliteratura />} />}

                {/* routesPostPrivate-religiao */}
                {userPost && <Route path="/posts/createreligiao" element={<Createreligiao />} />}
                {userPost && <Route path="/posts/updatereligiao/:id" element={<LivrosUpdatereligiao />} />}


                {/* routesPostPrivate-romance */}
                {userPost && <Route path="/posts/createromance" element={<Createromance />} />}
                {userPost && <Route path="/posts/updateromance/:id" element={<LivrosUpdateromance />} />}

                {/* routesPostPrivate-Destaque */}
                {userPost && <Route path="/posts/updatedestaque/:id" element={<LivrosUpdateDestaque />} />}

                {/* routes login Post private */}
                <Route path="/userPosts" element={<LoginPost />} />
                {userPost && <Route path="/posts" element={<RoutesPrivatesPosts />} />}


                {/* filmes */}
                {userPost && <Route path="/posts/filmes" element={<GaleryFilmesPosts />} />}

                {/* routesPostPrivate--filmes-Comedia */}
                {userPost && <Route path="/posts/filmes/createcomedia" element={<CreateComedia />} />}
                {userPost && <Route path="/posts/filmes/updatecomedia/:id" element={<FilmeUpdateComedia/>} />}

                 {/* routesPostPrivate--filmes-Comedia */}
                 {userPost && <Route path="/posts/filmes/createacao" element={<CreateAcao />} />}
                 {userPost && <Route path="/posts/filmes/updateacao/:id" element={<FilmessUpdateAcao/>} />}
                 {userPost && <Route path="/posts/filmes/updatedestaquefilmes/:id" element={<FilmesUpdateDestaque/>} />}
                 {userPost && <Route path="/posts/filmes/updatedrama/:id" element={<FilmesUpdateDrama/>} />}
                 {userPost && <Route path="/posts/filmes/createdrama" element={<CreateDrama/>} />}
                 {userPost && <Route path="/posts/filmes/createromancefilmes" element={<Createromancefilmes />} />}
                 {userPost && <Route path="/posts/filmes/updateromancefilmes/:id" element={<FilmesUpdateromance />} />}
                 {userPost && <Route path="/posts/filmes/updateterrorfilmes/:id" element={<FilmessUpdateTerror />} />}
                 {userPost && <Route path="/posts/filmes/createterror" element={<CreateTerror />} />}
                 {userPost && <Route path="/posts/filmes/createinfantilfilmes" element={<CreateInfantilFilmes />} />}
                 {userPost && <Route path="/posts/filmes/updateinfantilfilme/:id" element={<FilmessUpdateInfantil />} />}
                 
                 
                 {/* rota de posatgem acao */}                 
                 {userPost && <Route path="/posts/filmes/acaoPost" element={<GaleryAcaoFilmesPosts />} />}
                 {userPost && <Route path="/posts/filmes/comediaPost" element={<GaleryComediaFilmesPosts />} />}
                 {userPost && <Route path="/posts/filmes/desenhoPost" element={<GaleryDesenhoFilmesPosts />} />}
                 {userPost && <Route path="/posts/filmes/dramaPost" element={<GaleryDramaFilmesPosts />} />}
                 {userPost && <Route path="/posts/filmes/romancePost" element={<GaleryRomanceFilmesPosts />} />}
                 {userPost && <Route path="/posts/filmes/terrorPost" element={<GaleryTerrorFilmesPosts />} />}
                 {userPost && <Route path="/logomarcasPost" element={<GaleryLogoMarcasPost/>} />}
                 

                 {userPost && <Route path="/posts/filmes/acaocreatePost1" element={<CreateAcao1FilmesPosts />} />}
                 {userPost && <Route path="/posts/filmes/acaocreatePost2" element={<CreateAcao2FilmesPosts />} />}
                 {userPost && <Route path="/posts/filmes/acaocreatePost3" element={<CreateAcao3FilmesPosts />} />}
                 {userPost && <Route path="/posts/filmes/acaocreatePost4" element={<CreateAcao4FilmesPosts />} />}
                 {userPost && <Route path="/posts/filmes/acaocreatePost5" element={<CreateAcao5FilmesPosts />} />}
                 
                 {userPost && <Route path="/filmess/edita1/:id" element={<UpdateAcao1Posts />} />}
                 {userPost && <Route path="/filmess/edita2/:id" element={<UpdateAcao2Posts />} />}
                 {userPost && <Route path="/filmess/edita3/:id" element={<UpdateAcao3Posts />} />}
                 {userPost && <Route path="/filmess/edita4/:id" element={<UpdateAcao4Posts />} />}
                 {userPost && <Route path="/filmess/edita5/:id" element={<UpdateAcao5Posts />} />}


                 
                 
                 {userPost && <Route path="/posts/filmes/comediacreatePost1" element={<CreateComedia1FilmesPosts />} />}
                 {userPost && <Route path="/posts/filmes/comediacreatePost2" element={<CreateComedia2FilmesPosts />} />}
                 {userPost && <Route path="/posts/filmes/comediacreatePost3" element={<CreateComedia3FilmesPosts />} />}
                 {userPost && <Route path="/posts/filmes/comediacreatePost4" element={<CreateComedia4FilmesPosts />} />}
                 {userPost && <Route path="/posts/filmes/comediacreatePost5" element={<CreateComedia5FilmesPosts />} />}
                 
                 
                 {userPost && <Route path="/filmess/comediaedita1/:id" element={<UpdateComedia1Posts />} />}
                 {userPost && <Route path="/filmess/comediaedita2/:id" element={<UpdateComedia2Posts />} />}
                 {userPost && <Route path="/filmess/comediaedita3/:id" element={<UpdateComedia3Posts />} />}
                 {userPost && <Route path="/filmess/comediaedita4/:id" element={<UpdateComedia4Posts />} />}
                 {userPost && <Route path="/filmess/comediaedita5/:id" element={<UpdateComedia5Posts />} />}

                 
                 {userPost && <Route path="/posts/filmes/infantilcreatePost1" element={<CreateDesenho1Posts />} />}
                 {userPost && <Route path="/posts/filmes/infantilcreatePost2" element={<CreateDesenho2Posts />} />}
                 {userPost && <Route path="/posts/filmes/infantilcreatePost3" element={<CreateDesenho3Posts />} />}
                 {userPost && <Route path="/posts/filmes/infantilcreatePost4" element={<CreateDesenho4Posts />} />}
                 {userPost && <Route path="/posts/filmes/infantilcreatePost5" element={<CreateDesenho5Posts />} />}

                 {userPost && <Route path="/filmess/infantiledita1/:id" element={<UpdateDesenho1Posts />} />}
                 {userPost && <Route path="/filmess/infantiledita2/:id" element={<UpdateDesenho2Posts />} />}
                 {userPost && <Route path="/filmess/infantiledita3/:id" element={<UpdateDesenho3Posts />} />}
                 {userPost && <Route path="/filmess/infantiledita4/:id" element={<UpdateDesenho4Posts />} />}
                 {userPost && <Route path="/filmess/infantiledita5/:id" element={<UpdateDesenho5Posts />} />}


                 
                 {userPost && <Route path="/posts/filmes/dramacreatePost1" element={<CreateDrama1Posts />} />}
                 {userPost && <Route path="/posts/filmes/dramacreatePost2" element={<CreateDrama2Posts />} />}
                 {userPost && <Route path="/posts/filmes/dramacreatePost3" element={<CreateDrama3Posts />} />}
                 {userPost && <Route path="/posts/filmes/dramacreatePost4" element={<CreateDrama4Posts />} />}
                 {userPost && <Route path="/posts/filmes/dramacreatePost5" element={<CreateDrama5Posts />} />}
                 
                 
                 
                 {userPost && <Route path="/filmess/dramaedita1/:id" element={<UpdateDrama1Posts />} />}
                 {userPost && <Route path="/filmess/dramaedita2/:id" element={<UpdateDrama2Posts />} />}
                 {userPost && <Route path="/filmess/dramaedita3/:id" element={<UpdateDrama3Posts />} />}
                 {userPost && <Route path="/filmess/dramaedita4/:id" element={<UpdateDrama4Posts />} />}
                 {userPost && <Route path="/filmess/dramaedita5/:id" element={<UpdateDrama5Posts />} />}

                 {userPost && <Route path="/filmess/romanceedita1/:id" element={<UpdateRomance1Posts />} />}
                 {userPost && <Route path="/filmess/romanceedita2/:id" element={<UpdateRomance2Posts />} />}
                 {userPost && <Route path="/filmess/romanceedita3/:id" element={<UpdateRomance3Posts />} />}
                 {userPost && <Route path="/filmess/romanceedita4/:id" element={<UpdateRomance4Posts />} />}
                 {userPost && <Route path="/filmess/romanceedita5/:id" element={<UpdateRomance5Posts />} />}

                 {userPost && <Route path="/posts/filmes/romancecreatePost1" element={<CreateRomance1Posts />} />}
                 {userPost && <Route path="/posts/filmes/romancecreatePost2" element={<CreateRomance2Posts />} />}
                 {userPost && <Route path="/posts/filmes/romancecreatePost3" element={<CreateRomance3Posts />} />}
                 {userPost && <Route path="/posts/filmes/romancecreatePost4" element={<CreateRomance4Posts />} />}
                 {userPost && <Route path="/posts/filmes/romancecreatePost5" element={<CreateRomance5Posts />} />}

                 {userPost && <Route path="/posts/filmes/terrorcreatePost1" element={<CreateTerror1Posts />} />}
                 {userPost && <Route path="/posts/filmes/terrorcreatePost2" element={<CreateTerror2Posts />} />}
                 {userPost && <Route path="/posts/filmes/terrorcreatePost3" element={<CreateTerror3Posts />} />}
                 {userPost && <Route path="/posts/filmes/terrorcreatePost4" element={<CreateTerror4Posts />} />}
                 {userPost && <Route path="/posts/filmes/terrorcreatePost5" element={<CreateTerror5Posts />} />}

                 {userPost && <Route path="/filmess/terroredita1/:id" element={<UpdateTerror1Posts />} />}
                 {userPost && <Route path="/filmess/terroredita2/:id" element={<UpdateTerror2Posts />} />}
                 {userPost && <Route path="/filmess/terroredita3/:id" element={<UpdateTerror3Posts />} />}
                 {userPost && <Route path="/filmess/terroredita4/:id" element={<UpdateTerror4Posts />} />}
                 {userPost && <Route path="/filmess/terroredita5/:id" element={<UpdateTerror5Posts />} />}


                 {userPost && <Route path="/posts/livros/aventuraPost" element={<GaleryLivrosAventuraPost />} />}
                 {userPost && <Route path="/posts/livros/historiaPost" element={<GaleryLivrosHistoriaPost />} />}
                 {userPost && <Route path="/posts/livros/infantilPost" element={<GaleryLivrosInfantilPost />} />}
                 {userPost && <Route path="/posts/livros/literaturaPost" element={<GaleryLivrosLiteraturaPost />} />}
                 {userPost && <Route path="/posts/livros/religiaoPost" element={<GaleryLivrosReligiaoPost />} />}
                 {userPost && <Route path="/posts/livros/romancePost" element={<GaleryLivrosRomancePost />} />}



                 {userPost && <Route path="/livros/aventuraedita1/:id" element={<UpdateLivrosAventura1 />} />}
                 {userPost && <Route path="/livros/aventuraedita2/:id" element={<UpdateLivrosAventura2 />} />}
                 {userPost && <Route path="/livros/aventuraedita3/:id" element={<UpdateLivrosAventura3 />} />}
                 {userPost && <Route path="/livros/aventuraedita4/:id" element={<UpdateLivrosAventura4 />} />}
                 {userPost && <Route path="/livros/aventuraedita5/:id" element={<UpdateLivrosAventura5 />} />}


                 {userPost && <Route path="/posts/livros/aventuracreatePost1" element={<CreateLivrosAventura1 />} />}
                 {userPost && <Route path="/posts/livros/aventuracreatePost2" element={<CreateLivrosAventura2 />} />}
                 {userPost && <Route path="/posts/livros/aventuracreatePost3" element={<CreateLivrosAventura3 />} />}
                 {userPost && <Route path="/posts/livros/aventuracreatePost4" element={<CreateLivrosAventura4 />} />}
                 {userPost && <Route path="/posts/livros/aventuracreatePost5" element={<CreateLivrosAventura5 />} />}

                 {userPost && <Route path="/posts/livros/historiacreatePost1" element={<CreateLivrosHistoria1 />} />}
                 {userPost && <Route path="/posts/livros/historiacreatePost2" element={<CreateLivrosHistoria2 />} />}
                 {userPost && <Route path="/posts/livros/historiacreatePost3" element={<CreateLivrosHistoria3 />} />}
                 {userPost && <Route path="/posts/livros/historiacreatePost4" element={<CreateLivrosHistoria4 />} />}
                 {userPost && <Route path="/posts/livros/historiacreatePost5" element={<CreateLivrosHistoria5 />} />}

                 {userPost && <Route path="/livros/historiaedita1/:id" element={<UpdateLivrosHistoria1 />} />}
                 {userPost && <Route path="/livros/historiaedita2/:id" element={<UpdateLivrosHistoria2 />} />}
                 {userPost && <Route path="/livros/historiaedita3/:id" element={<UpdateLivrosHistoria3 />} />}
                 {userPost && <Route path="/livros/historiaedita4/:id" element={<UpdateLivrosHistoria4 />} />}
                 {userPost && <Route path="/livros/historiaedita5/:id" element={<UpdateLivrosHistoria5 />} />}



                 {userPost && <Route path="/livros/infantiledita1/:id" element={<UpdateLivrosInfantil1 />} />}
                 {userPost && <Route path="/livros/infantiledita2/:id" element={<UpdateLivrosInfantil2 />} />}
                 {userPost && <Route path="/livros/infantiledita3/:id" element={<UpdateLivrosInfantil3 />} />}
                 {userPost && <Route path="/livros/infantiledita4/:id" element={<UpdateLivrosInfantil4 />} />}
                 {userPost && <Route path="/livros/infantiledita5/:id" element={<UpdateLivrosInfantil5 />} />}

                 {userPost && <Route path="/posts/livros/infantilcreatePost1" element={<CreateLivrosInfantil1 />} />}
                 {userPost && <Route path="/posts/livros/infantilcreatePost2" element={<CreateLivrosInfantil2 />} />}
                 {userPost && <Route path="/posts/livros/infantilcreatePost3" element={<CreateLivrosInfantil3 />} />}
                 {userPost && <Route path="/posts/livros/infantilcreatePost4" element={<CreateLivrosInfantil4 />} />}
                 {userPost && <Route path="/posts/livros/infantilcreatePost5" element={<CreateLivrosInfantil5 />} />}


                 {userPost && <Route path="/posts/livros/literaturacreatePost1" element={<CreateLivrosLiteratura1 />} />}
                 {userPost && <Route path="/posts/livros/literaturacreatePost2" element={<CreateLivrosLiteratura2 />} />}
                 {userPost && <Route path="/posts/livros/literaturacreatePost3" element={<CreateLivrosLiteratura3 />} />}
                 {userPost && <Route path="/posts/livros/literaturacreatePost4" element={<CreateLivrosLiteratura4 />} />}
                 {userPost && <Route path="/posts/livros/literaturacreatePost5" element={<CreateLivrosLiteratura5 />} />}

                 {userPost && <Route path="/livros/literaturaedita1/:id" element={<UpdateLivrosLiteratura1 />} />}
                 {userPost && <Route path="/livros/literaturaedita2/:id" element={<UpdateLivrosLiteratura2 />} />}
                 {userPost && <Route path="/livros/literaturaedita3/:id" element={<UpdateLivrosLiteratura3 />} />}
                 {userPost && <Route path="/livros/literaturaedita4/:id" element={<UpdateLivrosLiteratura4 />} />}
                 {userPost && <Route path="/livros/literaturaedita5/:id" element={<UpdateLivrosLiteratura5 />} />}


                 {userPost && <Route path="/livros/religiaoedita1/:id" element={<UpdateLivrosReligiao1 />} />}
                 {userPost && <Route path="/livros/religiaoedita2/:id" element={<UpdateLivrosReligiao2 />} />}
                 {userPost && <Route path="/livros/religiaoedita3/:id" element={<UpdateLivrosReligiao3 />} />}
                 {userPost && <Route path="/livros/religiaoedita4/:id" element={<UpdateLivrosReligiao4 />} />}
                 {userPost && <Route path="/livros/religiaoedita5/:id" element={<UpdateLivrosReligiao5 />} />}

                 {userPost && <Route path="/posts/livros/religiaocreatePost1" element={<CreateLivrosReligiao1 />} />}
                 {userPost && <Route path="/posts/livros/religiaocreatePost2" element={<CreateLivrosReligiao2 />} />}
                 {userPost && <Route path="/posts/livros/religiaocreatePost3" element={<CreateLivrosReligiao3 />} />}
                 {userPost && <Route path="/posts/livros/religiaocreatePost4" element={<CreateLivrosReligiao4 />} />}
                 {userPost && <Route path="/posts/livros/religiaocreatePost5" element={<CreateLivrosReligiao5 />} />}


                 {userPost && <Route path="/posts/livros/romancecreatePost1" element={<CreateLivrosRomance1 />} />}
                 {userPost && <Route path="/posts/livros/romancecreatePost2" element={<CreateLivrosRomance2 />} />}
                 {userPost && <Route path="/posts/livros/romancecreatePost3" element={<CreateLivrosRomance3 />} />}
                 {userPost && <Route path="/posts/livros/romancecreatePost4" element={<CreateLivrosRomance4 />} />}
                 {userPost && <Route path="/posts/livros/romancecreatePost5" element={<CreateLivrosRomance5 />} />}

                 {userPost && <Route path="/livros/romanceedita1/:id" element={<UpdateLivrosRomance1 />} />}
                 {userPost && <Route path="/livros/romanceedita2/:id" element={<UpdateLivrosRomance2 />} />}
                 {userPost && <Route path="/livros/romanceedita3/:id" element={<UpdateLivrosRomance3 />} />}
                 {userPost && <Route path="/livros/romanceedita4/:id" element={<UpdateLivrosRomance4 />} />}
                 {userPost && <Route path="/livros/romanceedita5/:id" element={<UpdateLivrosRomance5 />} />}


                {userPost && <Route path="/logo/edita/:id" element={<RoutesPrivateslogoUpdate />} />}
                {userPost && <Route path="/logo/destaqueedita/:id" element={<RoutesPrivateslogoDestaqueUpdate />} />}
                {userPost && <Route path="/posts/logo/LogocreatePost1" element={<RoutesPrivateslogoCreate />} />}

















                


















            </Routes>
        </>
    );
}

export default routesPost;
