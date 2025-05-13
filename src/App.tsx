import { BrowserRouter, Route } from "react-router"
import "./App.css"
import { Routes } from "react-router"
import Home from "./pages/Home"
import About from "./About"
import Landing from "./pages/Landing"
import Error from "./pages/Error"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/land" element={<Landing />} />
        <Route path="/eror" element={<Error/>} />
        <Route path="/"
        
   
      </Routes>
    </BrowserRouter>
  )
}
