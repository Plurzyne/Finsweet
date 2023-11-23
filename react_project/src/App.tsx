import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import AboutUs from "./Pages/AboutUs"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App