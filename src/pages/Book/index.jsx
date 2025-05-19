import { useParams } from "react-router-dom";
import "./book.modules.css";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Heart } from "lucide-react";

export default function Book() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
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
      }
    }
    getBook();
  }, [id]);

  console.log(book);

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
          <button>
            <Heart />
          </button>
          <a href={book.infoLink} target="_blank">
            Buy
          </a>
        </div>
      </div>
    </section>
  );
}
