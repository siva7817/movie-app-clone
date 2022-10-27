import "./App.css";

//Routing
import { Routes, Route } from "react-router-dom";

//pages
import HomePage from './pages/Home.page'
import MoviePage from './pages/Movie.page'
import Plays from './pages/Play.page'

//React slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<Plays />} />
    </Routes>
  );
}

export default App;
