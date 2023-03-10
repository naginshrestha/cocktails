import './App.css';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { About } from './Components/About';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
