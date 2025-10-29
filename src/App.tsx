import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Navbar } from "./components/Navbar";
import { Locations } from "./pages/Locations";
import { MenuProvider } from "./context/MenuContext";
import { Footer } from "./components/Footer";
import { Order } from "./pages/Order";

function App() {
  return (
    <MenuProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </MenuProvider>
  );
}

export default App;
