import './App.css';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Axios Pokemon API</h1>
      </header>
      <section>
        <PokemonList/>
      </section>
    </div>
  );
}

export default App;
