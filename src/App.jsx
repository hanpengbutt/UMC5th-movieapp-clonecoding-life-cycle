import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import MovieContainer from './components/movie/MovieContainer';
import Home from './components/home/Home';
import './App.css';
import Celebirity from './components/celebirity/Celebirity';
import Tv from './components/tv/Tv';
import NotFound from './components/notFound/NotFound';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie' element={<MovieContainer />} />
          <Route path='/tv' element={<Tv />} />
          <Route path='/celebirity' element={<Celebirity />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
