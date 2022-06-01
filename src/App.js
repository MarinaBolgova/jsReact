import logo from './logo.svg';
import './App.css';
import NavPanel from "./Components/NavPanel/NavPanel";
import Tecnologes from "./Components/Tecnologes/Tecnologes";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Nav_Box from "./Components/Nav_Box/Nav_Box";

function App() {
  return (
    <div className="App">
        <NavPanel />

<BrowserRouter>
    <Routes>
                <Route path="/main/*" element={<Nav_Box />}>
                </Route>
    </Routes>
</BrowserRouter>
        <Tecnologes />
        <Footer />
    </div>
  );
}


export default App;




//компонетнта это функция которая возвращает jsx разметку
//отличие от html имя класса className