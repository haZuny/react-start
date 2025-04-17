import logo from './logo.svg';
import './App.css';

// import components
import Hello from './component/hello'

function App() {
  return (
    <div className='App'>
      <Hello age={20} name={'Hayden'}/>
    </div>
    
  );
}

export default App;
