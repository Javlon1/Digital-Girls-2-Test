import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Ferst from './Components/Ferst/Ferst';
import Result from './Components/Result/Result';
import Second from './Components/Second/Second';
import Test from './Components/Test/Test';
import Third from './Components/Third/Third';

function App() {
  
  const [render, setRender] = useState(false)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Ferst render={render} setRender={setRender} />} />
        <Route path='/second' element={<Second render={render} setRender={setRender} />} />
        <Route path='/third' element={<Third render={render} setRender={setRender} />} />
        <Route path='/test' element={<Test />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
