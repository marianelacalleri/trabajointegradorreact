import "../css/styles.css";
import { Link } from 'react-router-dom' ;


export function Footer() {
  return (
    <footer className="menu">
      <ul>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/skills"> Skills </Link> 
        <Link to="/projects"> Projects </Link>
        <Link to="/contact"> Contact </Link>
        
        
      </ul>
    </footer>
  );
}
