import { Route, Routes } from 'react-router-dom';

import Player from './Components/Player';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
