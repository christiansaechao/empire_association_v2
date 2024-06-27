import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import NavMenu from "./Components/NavMenu";
import Footer from "./Components/Footer";
import HomePage from "./Pages/Home";
import Casino from "./Pages/Casino";
import Dining from "./Pages/Dining";
import Promotions from "./Pages/Promotions";
import Events from "./Pages/Events";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/casino" element={<Casino />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
