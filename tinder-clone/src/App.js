import './App.css';
import Header from "./Header"
import TinderCards from './TinderCards.js';
import SwipButtons from './SwipButtons.js'

function App() {
  return (
    <div className="app">
      
      <Header />
      <TinderCards />
      <SwipButtons/>
      
    </div>
  );
}

export default App;
