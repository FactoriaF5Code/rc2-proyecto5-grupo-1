import { Header } from "./components/Header";
import { Slider } from "./components/Slider/Slider.jsx";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";
import './App.css'

function App() {
  return (
    <>
      <Header />

      <Slider />

      <Gallery />

      <Footer />
    </>
  )
}

export default App;
