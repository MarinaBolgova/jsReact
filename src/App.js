import logo from './logo.svg';
import './App.css';
import NavPanel from "./Components/NavPanel/NavPanel";
import Tecnologes from "./Components/Tecnologes/Tecnologes";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <NavPanel />

<BrowserRouter>
    <Routes>
                <Route path="/main/*" element={<Tecnologes />}>
                </Route>
    </Routes>
</BrowserRouter>
        <Tecnologes />
    </div>
  );
}


export default App;




//компонетнта это функция которая возвращает jsx разметку
//отличие от html имя класса className