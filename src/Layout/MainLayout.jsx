import { Outlet } from "react-router-dom";
import Navbar from "./../shared/Navbar";
import Footer from "./../shared/Footer";

const MainLayout = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default MainLayout;
