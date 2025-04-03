import { BrowserRouter, Routes, Route } from "react-router"

// Pages
import AboutUs from "./pages/AboutUs.jsx"
import Error from "./pages/Error.jsx"
import FairyTale from "./pages/FairyTale.jsx"
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
            <Route path="sprookjes/:sprookjesId" element={<MakingOf />} />

            <Route path="makingOf" element={<MakingOf />} />

            <Route path="*" element={<Error />} />
          </Route>
          <Route path="/Fairy-tale" element={<FairyTale />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
