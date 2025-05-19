import { useEffect, useState } from "react";
import FavoriteCard from "../../components/FavoriteCard";
import "./favorites.modules.css"

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getFavorites() {
      try {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(favorites);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getFavorites();
  }, []);

  const favoritesList = favorites.map((item) => {
    return <FavoriteCard title={item.title} id={item.id} key={item.id} />;
  });

  if (loading) {
    return (
      <section className="loading-section">
        <div className="loader"></div>
      </section>
    );
  }

  return <section className="favorites-list">{favoritesList}</section>;
}
