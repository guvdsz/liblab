import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./layouts/AppLayout/AppLayout";
import Favorites from "./pages/Favorites";
import Book from "./pages/Book";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/books/:id" element={<Book />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
