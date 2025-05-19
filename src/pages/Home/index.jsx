import { useEffect, useState } from "react";
import "./home.modules.css";
import { api } from "../../services/api";
import BookCard from "../../components/BookCard";
export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBooks() {
      try {
        const response = await api.get(
          "/volumes?q=subject:fiction&orderBy=relevance&maxResults=20"
        );
        const booksInfo = response.data.items.map((item) => ({
          ...item.volumeInfo,
          id: item.id
        }));
        console.log(booksInfo)
        setBooks(booksInfo);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getBooks();
  }, []);
  const bookList = books.map((item) => {
    return (
      <BookCard
        key={item.id}
        image={item.imageLinks.thumbnail}
        title={item.title}
        description={item.description}
        author={item.authors.join(", ")}
        id={item.id}
      />
    );
  });

  if (loading)
    return (
      <section className="loading-section">
        <div className="loader"></div>
      </section>
    );

  return <section className="book-list">{bookList}</section>;
}
