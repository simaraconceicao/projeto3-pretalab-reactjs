import { Routes, Route, BrowserRouter } from 'react-router-dom'

import About from '../pages/About/About'
import Projects from '../pages/Projects/Projects'
import List from '../pages/List/List'
import Diary from '../pages/Diary/Diary'


import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'


function ApplicationRoutes() {
  return(
    <BrowserRouter>
     <Menu/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/diario" element={<Diary />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="comentarios" element={<List />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )

}

export default ApplicationRoutes