import { CarrosselProjetos } from "../components/carrosselProjetos";
import { Marcio } from "../components/marcio";
import SobreSection from "../(sections)/_sobre/page";
import CursosSection from "../(sections)/_cursos/page";
import ContatoSection from "../(sections)/_contato/page";



export default function Page() {
  return (
   <div className="pb-40">
    <Marcio />
    <SobreSection />
    <CarrosselProjetos />
    <CursosSection />
    <ContatoSection />
   </div>
  );
}
