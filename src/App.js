import logo from './logo.svg';
import './App.css';
import './index.css';
import GameContainer from './components/GameContainer';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div className="App bg-dark">
      <GameContainer />
      <GameBoard />
    </div>
  );
}

export default App;
