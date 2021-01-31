import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="suril" heroName="Suru"/>
      <Greet name="rishi" heroName="Rishi">
        <p>This is child props</p>
      </Greet>
      <Welcome name="classComponent" heroName="Class Component"/>
    </div>
  );
}

export default App;