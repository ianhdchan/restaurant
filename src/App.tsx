import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Navbar } from "./components/Navbar";
import { Locations } from "./pages/Locations";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
