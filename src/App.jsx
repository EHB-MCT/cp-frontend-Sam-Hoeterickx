import { BrowserRouter, Routes, Route } from "react-router"

// Pages
import AboutUs from "./pages/AboutUs.jsx"
import Home from './pages/Home.jsx'
import MakingOf from "./pages/MakingOf.jsx"
import Sprookjes from "./pages/Sprookjes.jsx"

// Components
import Navigation from "./components/Navigation.jsx"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="sprookjes" element={<Sprookjes />} />
            <Route path="makingOf" element={<MakingOf />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
