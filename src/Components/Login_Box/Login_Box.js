import './Login_Box.css';
import {NavLink} from "react-router-dom";

function Login_box() {
    return (
            <div className='Login_box'>
                <NavLink className="button-9" to="/login">Войти в сеть</NavLink>
            </div>


);

}

export default Login_box;


