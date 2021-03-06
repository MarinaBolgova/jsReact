import logo from './logo.svg';
import './App.css';
import Tecnologes from "./Components/Tecnologes/Tecnologes";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavPanel from "./Components/NavPanel/NavPanel";
import TestProps from "./Components/TestProps/TestProps";
import Footer from "./Components/Footer/Footer";
import Login_Input from "./Components/Login_Input/Login_Input";


function App(props) {

    return (

        <div className="App">

            <BrowserRouter>
                <NavPanel />
                <Routes>
                    <Route path="/main/*" element={<Tecnologes />}/>
                    <Route path="/about/*" element={<div><p>Я в эбауте</p></div>}/>
                    <Route path="/test_props/*" element={<TestProps callSend={props.callSend} inventory={props.inventory} />}/>
                    <Route path="/login/*" element={<Login_Input users={props.users} />}/>
                </Routes>
                <Footer />
            </BrowserRouter>

        </div>

    );
}

export default App;



//компонетнта это функция которая возвращает jsx разметку
//отличие от html имя класса className