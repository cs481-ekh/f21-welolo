

import logo from '../media/logo.svg';
import "../styles/main.css";

const NAVBAR = () => {
    return (
        <div id="nav_container">
            <div id="nav_banner">
                <img src={logo} alt="Welolo Logo" id="logo_element"/>
            </div> 
            <hr id="nav_separator"/>
        </div>
    )
}

export default NAVBAR;