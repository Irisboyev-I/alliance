import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Contract from './components/Contract/Contract';
import About from './pages/About/About';
import ContractProduce from "./pages/Contract/ContractProduce"
import OwnProduce from './pages/ownProduce/OwnProduce';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contractProduce' element={<ContractProduce />} />
        <Route path='/ownproduce' element={<OwnProduce />} />
      </Routes>
      <Contract />
      <Footer />
    </div>
  )
}

export default App