import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PageHome } from "./Pages/Home"
import { PageBook } from "./Pages/Book"
import { PageAdmin } from "./Pages/Admin"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageHome/>}/>
          <Route path="/admin" element={<PageAdmin/>}/>
          <Route path="/livro/:id" element={<PageBook />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
