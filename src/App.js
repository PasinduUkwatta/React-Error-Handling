import logo from './logo.svg';
import './App.css';
import Hero from "./Hero";
import ErrorBoundry from "./ErrorBoundry";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Pasindu Thiwanka</p>
        <p>Deshan Ukwatta</p>
        <p>😎😋😁</p>
        <ErrorBoundry>
          <Hero heroname="batman"></Hero>
        </ErrorBoundry>

        <ErrorBoundry>
          <Hero heroname="superman"></Hero>
        </ErrorBoundry>
        <ErrorBoundry>
          <Hero heroname="Joker"></Hero>

        </ErrorBoundry>



      </header>
    </div>
  );
}

export default App;
