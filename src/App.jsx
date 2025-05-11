import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
    return (
        <Router>
            {/* navbar */}
            <Navbar />
            <Routes>
                {/* home page */}
                <Route path='/' element={<Home />} />
            </Routes>
            {/* footer */}
            <Footer />
        </Router>
    )
}

export default App
