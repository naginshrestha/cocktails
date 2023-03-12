import './App.css';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import { Home } from './page/Home';
import { About } from './page/About';
import { SingleCocktails } from './page/SingleCocktails';
import { Error } from './page/Error';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/cocktail/:id' element={<SingleCocktails/>}></Route>
          <Route path='*' element={<Error/>}></Route>


        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
