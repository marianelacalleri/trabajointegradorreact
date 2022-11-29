import '../css/styles.css'
import { Link } from 'react-router-dom' ; 



export function Navbar() {
    return (
            <nav>
                <h1> <Link to="/"> MARIANELA CALLERI </Link> </h1>
                <ul className="navigation">
                    <Link to="/about"> About me </Link>
                    <Link to="/skills"> Skills </Link>
                    <Link to="/projects"> Projects </Link>
                    <Link to="/contact"> Contact </Link>
                    <Link to="/card"> Cards </Link> 
                </ul>
                <button className="menu-hamb" id="menu-hamb">
                    <ion-icon className="bars" name="menu-outline"></ion-icon>
                </button>
            </nav>
    )
        
    
}

