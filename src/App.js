import "swiper/css";
import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import RoutesPages from "./config/RoutesPages";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Header />
              <RoutesPages />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
