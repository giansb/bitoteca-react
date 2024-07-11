import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PageHome } from "./Pages/Home"
import { PageBook } from "./Pages/Book"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageHome/>}/>
          <Route path="/livro/:id" element={<PageBook />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
