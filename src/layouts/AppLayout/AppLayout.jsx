import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import "./AppLayout.modules.css"

export default function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
