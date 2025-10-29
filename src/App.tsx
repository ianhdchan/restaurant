import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Navbar } from "./components/Navbar";
import { Locations } from "./pages/Locations";
import { MenuProvider } from "./context/MenuContext";
import { Footer } from "./components/Footer";

function App() {
  return (
      <MenuProvider>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </main>
        <Footer />
      </MenuProvider>
  );
}

export default App;
