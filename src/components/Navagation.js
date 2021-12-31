import './Navagation.css';
import { NavLink } from "react-router-dom";

function Navagation() {
    const style = ({ isActive }) => (isActive ? "active" : "inactive");
    return (
        <ul className='nav'>
            <li><NavLink className={style} to="/">Home</NavLink></li>
            <li><NavLink className={style} to="/Education">Education</NavLink></li>
            <li><NavLink className={style} to="/Employment">Employment</NavLink></li>
            <li><NavLink className={style} to="/Hobbies">Hobbies</NavLink></li>
            <li><NavLink className={style} to="/Contact">Contact me</NavLink></li>
            
        </ul>
    );
}

export default Navagation;
