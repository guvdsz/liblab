import { useParams } from "react-router-dom";
import "./book.modules.css";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Heart } from "lucide-react";

export default function Book() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getBook() {
      try {
        const response = await api.get(`/volumes/${id}`);
        setBook({ ...response.data.volumeInfo, id: response.data.id });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        const favorites = JSON.parse(localStorage.getItem("favorites"));
        if (favorites) {
          if (favorites.some((item) => item.id === id)) {
            setIsFavorite(true);
          }
        }
      }
    }
    getBook();
  }, [id]);

  function handleFavorite() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.some((item) => item.id === id)) {
      setIsFavorite(false);
      const newFavorites = favorites.filter((item) => item.id !== id);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return;
    }
    favorites.push(book);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(true);
  }

  if (loading) {
    return (
      <section className="loading-section">
        <div className="loader"></div>
      </section>
    );
  }

  return (
    <section className="book-container">
      <div className="book">
        <h2>{book.title}</h2>
        <img src={book.imageLinks.thumbnail} alt={book.title} />
        <div className="book-content">
          <h3>Description</h3>
          <p>{book.description}</p>
        </div>
        <span>
          <strong>Author(s):</strong> {book.authors.join(", ")}
        </span>
        <div className="btn-control">
          <button onClick={handleFavorite}>
            <Heart color={isFavorite ? "#FF0808" : "#000"} />
          </button>
          <a href={book.infoLink} target="_blank">
            Buy
          </a>
        </div>
      </div>
    </section>
  );
}
