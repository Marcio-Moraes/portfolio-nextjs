export const rolarPara = (id: string) => {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento?.addEventListener('click', (e) => {
            e.preventDefault();
        });
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  };