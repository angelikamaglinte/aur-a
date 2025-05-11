import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Collections from './pages/Collections'

const App = () => {
    return (
        <Router>
            {/* navbar */}
            <Navbar />
            <Routes>
                {/* home page */}
                <Route path='/' element={<Home />} />
                {/* collections page */}
                <Route path='/collections' element={<Collections />} />
            </Routes>
            {/* footer */}
            <Footer />
        </Router>
    )
}

export default App
