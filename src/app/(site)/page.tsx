import { Marcio } from "../components/marcio";
import SobreSection from "../(sections)/_sobre/page";
import CursosSection from "../(sections)/_cursos/page";
import ContatoSection from "../(sections)/_contato/page";
import ProjetosSection from "../(sections)/_projetos/page";



export default function Page() {
  return (
   <div className="pb-40">
    <Marcio />
    <SobreSection />
    <ProjetosSection />
    <CursosSection />
    <ContatoSection />
   </div>
  );
}
