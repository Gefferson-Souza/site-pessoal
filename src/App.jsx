import './App.scss'
import Habilidades from './components/Habilidades'
import NavBar from './components/NavBar';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import HabilidadesSegundoFrame from './components/HabilidadesSegundoFrame';


function App() {

  return (
    <>
      <NavBar />
      <main className='app'>
        <section id='sobre-mim'>
          <div className='pessoal-info'>
            <h1>Gefferson Teodoro de Souza</h1>
            <h2>Desenvolvedor Front-End</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor odit expedita culpa repudiandae maiores! Architecto dignissimos sapiente porro perspiciatis vel sequi sint libero. Repellat, possimus dolor non assumenda sunt provident!</p>
          </div>
          <div>
            <img alt='abc' src='' />
          </div>
        </section>
        <section id='habilidades' className='habilidades'>
          <Habilidades />
        </section>
        <section id='portifolio'>
          <Projetos />
        </section>
        <section id='contato'>
          <Contato />
        </section>
        <section>
          <HabilidadesSegundoFrame />
        </section>
      </main>
    </>
  );
}

export default App;
