import { CarrosselProjetos } from "../components/carrosselProjetos";
import { Marcio } from "../components/marcio";
import { Projetos } from "../components/projetos";



export default function Page() {
  return (
   <div className="pb-40">
    <Marcio />
    <CarrosselProjetos />
   </div>
  );
}
