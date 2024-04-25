import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Details } from "./Details";
import { Peliculas } from "./Peliculas";
import { Television } from "./Television";
import { SearchPage } from "./SearchPage";
import { Person } from "./Person";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/peliculas" element={<Peliculas />}></Route>
        <Route path="/series" element={<Television />}></Route>
        <Route path="/details/:media_type/:id" element={<Details />}></Route>
        <Route path="/person/:id" element={<Person />}></Route>
        <Route path="/search/:query" element={<SearchPage />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
