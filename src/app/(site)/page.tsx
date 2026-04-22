import { CarrosselProjetos } from "../components/carrosselProjetos";
import { Marcio } from "../components/marcio";
import { Projetos } from "../components/projetos";
import Contato from "../contato/page";
import Cursos from "../cursos/page";
import Sobre from "../sobre/page";



export default function Page() {
  return (
   <div className="pb-40">
    <Marcio />
    <Sobre />
    <CarrosselProjetos />
    <Cursos />
    <Contato />
   </div>
  );
}
