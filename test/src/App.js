import logo from './logo.svg';
import './App.css';

// import components
import Hello from './component/hello'
import Welcome from './component/welcome'
import World from './component/world'

function App() {
  return (
    <div className='App'>
      <Hello/><World/>
      <div><Welcome/></div>
    </div>
    
  );
}

export default App;
