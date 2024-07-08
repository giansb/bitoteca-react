import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PageHome } from "./Pages/Home"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageHome/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
