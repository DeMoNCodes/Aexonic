import logo from './logo.svg';
import './App.css';
import Movie from './components/movie';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from './components/moviedetails';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/movie" element={<Movie />}></Route>
          <Route path="/movie/:_id" element={<MovieDetails/>}></Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
