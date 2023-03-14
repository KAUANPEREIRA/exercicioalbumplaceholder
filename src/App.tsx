import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AlbumData from "./pages/AlbumData";
import Home from "./pages/Home";
//redirecionamento de rotas com react router dom utiliza o navigate
//pegar parametros de url useParams
//parametros de busca useSearchParams

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <h1>Titulo do site</h1>
        </header>
        <hr></hr>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AlbumData/:slug" element={<AlbumData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
