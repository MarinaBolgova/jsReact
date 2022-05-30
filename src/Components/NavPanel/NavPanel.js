import './NavPanel.css';

import Login_box from "../Login_Box/Login_Box";
import Logo_Bar from "../Logo_Bar/LogoBar";
import Nav_Box from "../Nav_Box/Nav_Box";

function NavPanel() {
    return (
        <div className="nav">
            <Logo_Bar />

            <Nav_Box />

            <Login_box />
        </div>

);

}

export default NavPanel;


