import { Heart } from "lucide-react";
import "./bookCard.modules.css";
import { Link } from "react-router-dom";

export default function BookCard({ image, title, description, author, id }) {
  return (
    <div className="card-container">
      <div className="card">
        <img src={image} alt={title} />
        <div className="card-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <span>{author}</span>
        </div>
      </div>
      <Link to={`/books/${id}`}>Acessar</Link>
    </div>
  );
}
