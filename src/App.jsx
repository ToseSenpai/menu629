/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import './App.css';

import MenuItems from "./Components/MenuItems";
import MenuData from "./Components/MenuData";
import Navbar from "./Components/Navbar";
import ContactPage from './Components/ContactPage';
import MenuBreakfast from './Components/MenuBreakfast';

function App() {
  const [finger, setFinger] = useState(true);
  const [breakfast, setBreakfast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [shakes, setShakes] = useState(false);
  const [drink, setDrink] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="App"
      css={css`
        background: #f0eff1;
        height: 100%;
        padding: 70px 0;
      `}
    >
      <Navbar
        setFinger={setFinger}
        setBreakfast={setBreakfast}
        setLunch={setLunch}
        setShakes={setShakes}
        setDrink={setDrink}
      />

      <MenuItems
        items={MenuData}
        finger={finger}
        breakfast={breakfast}
        lunch={lunch}
        shakes={shakes}
        drink={drink}
      />

      {/* Bottone "Torna su" */}
      {showScroll && (
        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}

      {/* Bottone Contatti in fondo alla pagina */}
      <div className="facebook-button-container">
        <button 
          onClick={() => navigate('/contatti')} 
          className="facebook-button"
        >
          Info & Contatti
        </button>
      </div>

      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");

          ::selection {
            background: #000;
            color: #f0eff1;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
            --webkit-tap-highlight-color: transparent;
          }

          body::-webkit-scrollbar {
            width: 12px;
          }

          body::-webkit-scrollbar-track {
            background: #f0eff1;
          }

          body::-webkit-scrollbar-thumb {
            background-color: #444444;
            border-radius: 20px;
            border: 3px solid #f0eff1;
          }

          body {
            background: #f0eff1;
          }

          .container {
            width: 80%;
            margin: auto;
          }

          .scroll-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #444444;
            color: #f0eff1;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            font-size: 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            transition: opacity 0.3s ease;
          }

          .scroll-to-top:hover {
            background-color: #333333;
          }

          .scroll-to-top:active {
            background-color: #222222;
          }
        `}
      />
    </div>
  );
}

export default function RootApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contatti" element={<ContactPage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/breakfast" element={<MenuBreakfast />} />
      </Routes>
    </Router>
  );
}
