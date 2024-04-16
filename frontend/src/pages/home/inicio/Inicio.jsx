import './inicio.css';

const Inicio = () => {  

  return (
    <section className="inicio section">
      <div className="inicio__pagina">
        <h1 className="section__title">Bienvenido {localStorage.getItem('nombre')} a Carreteras GT</h1>
        <span className='section__subtitle'>Conocimiento de todas las carreteras de Guatemala en una pagina</span>
      </div>
    </section>
  )
}

export default Inicio;
