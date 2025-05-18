import { Link } from "react-router-dom";
import "./header.modules.css";
import { SquareLibrary } from "lucide-react";
export default function Header() {
  return (
    <header>
      <Link to="/" className="logo nav-link">
        <SquareLibrary className="icon" size={35} />
        <h1>LibLab</h1>
      </Link>
      <Link to="/favorites" className="nav-link">Favorites</Link>
    </header>
  );
}
