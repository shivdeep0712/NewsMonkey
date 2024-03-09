import { BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
function App() {
  return (
    <BrowserRouter>
        <Navbar></Navbar>
        <Routes>

          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
