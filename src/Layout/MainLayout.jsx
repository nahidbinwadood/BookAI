import { Outlet } from "react-router-dom";
import Navbar from "./../shared/Navbar";
import Footer from "./../shared/Footer";

const MainLayout = () => {
  return (
    <div className="dark:bg-gradient-1 ">
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
