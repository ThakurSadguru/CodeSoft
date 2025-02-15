import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ProjectPage from './Pages/ProjectPage'
import ContactPage from './Pages/ContactPage'

const App = () => {


  return (
   <Router>
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/projects' element={<ProjectPage ></ProjectPage>}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
      </Routes>
     
      <Footer />
    </div>

   </Router>
  )
}

export default App
