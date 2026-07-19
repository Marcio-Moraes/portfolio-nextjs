import { Marcio } from "../components/marcio";
import SobreSection from "../(sections)/_sobre/page";
import EducacaoSection from "../(sections)/_cursos/page";
import ContatoSection from "../(sections)/_contato/page";
import ProjetosSection from "../(sections)/_projetos/page";
import SkilsSection from "../(sections)/_skills/page";



export default function Page() {
  return (
   <div className="">
    <Marcio />
    <SobreSection />
    <SkilsSection />
    <ProjetosSection />
    <EducacaoSection />
    <ContatoSection />
   </div>
  );
}
