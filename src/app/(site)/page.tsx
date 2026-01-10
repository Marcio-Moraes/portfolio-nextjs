import Image from "next/image";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";
import { Marcio } from "../components/marcio";
import { Projetos } from "../components/projetos";

export default function Page() {
  return (
   <div className="">
    <Header />
    <Marcio />
    <Projetos />
    <Footer />
   </div>
  );
}
