import Lenis from "lenis";
import "./App.css";
import Card from "./components/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Images from "./components/Images";

export default function App() {
  const smoothScroll = () => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  };
  smoothScroll();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/cards" element={<Card />} />
          <Route path="/images" element={<Images />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
