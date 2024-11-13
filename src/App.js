import logo from './logo.svg';
import './App.css';

import Heading from './components/Heading';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Heading text='Aplikacja Licznika w ReactJS' classValue='gray' />

      </header>
      <Counter />
    </div>
  );
}

export default App;
