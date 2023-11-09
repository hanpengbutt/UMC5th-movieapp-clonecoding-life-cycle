import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Header from './components/header/Header';
import MovieContainer from './components/movie/MovieContainer';
import Home from './components/home/Home';
import Celebirity from './components/celebirity/Celebirity';
import Tv from './components/tv/Tv';
import NotFound from './components/notFound/NotFound';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Body>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie' element={<MovieContainer />} />
            <Route path='/tv' element={<Tv />} />
            <Route path='/celebirity' element={<Celebirity />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Body>
      </BrowserRouter>
    </div>
  );
}

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export default App;
