import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Greet name="suril" heroName="Suru"/>
      <Greet name="rishi" heroName="Rishi">
        <p>This is child props</p>
      </Greet>
      <Welcome name="classComponent" heroName="Class Component"/>
      <Message />
    </div>
  );
}

export default App;