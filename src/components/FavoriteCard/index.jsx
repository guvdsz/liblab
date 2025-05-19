import { Link } from "react-router-dom";
import "./favoriteCard.modules.css"

export default function FavoriteCard({title, id}) {
    return (
        <div className="favorite-card">
            <h2>{title}</h2>
            <Link to={`/books/${id}`}>Access</Link>
        </div>
    )
}