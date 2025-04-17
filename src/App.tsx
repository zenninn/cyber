import { BrowserRouter, Route } from "react-router"
import "./App.css"
import { Routes } from "react-router"
import Home from "./pages/Home"
import About from "./About"
import PageNotFound from "./PageNotFound"
import Zone from "./components/Zone/Zone"
import Landing from "./pages/Landing"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarif" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/bron" element={<Landing />} />
   
      </Routes>
    </BrowserRouter>
  )
}
