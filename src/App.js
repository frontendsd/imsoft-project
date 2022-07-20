import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Batafsil from './components/batafsil/Batafsil';
import AddCart from './components/karzinka/AddCart';
import YetkazibBerish from './components/yetkazib-berish/YetkazibBerish';
import KompaniyaHaqida from './components/kompaniya-haqida/KompaniyaHaqida';
import BizningOfislar from './components/bizning-ofislar/BizningOfislar';
import BiznesUchun from './components/biznes-uchun/BiznesUchun';
import Aloqa from './components/aloqa/Aloqa';
import Tolov from './components/tolov/Tolov';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Batafsil' element={<Batafsil />} />
          <Route path='/AddCart' element={<AddCart />} />
          <Route path='/YetkazibBerish' element={ <YetkazibBerish />}/>
          <Route path='/KompaniyaHaqida' element={<KompaniyaHaqida />} />
          <Route path='/BizningOfislar' element={ <BizningOfislar/>}/>
          <Route path='/BiznesUchun' element={<BiznesUchun />} />
          <Route path='/Aloqa' element={<Aloqa />} />
          <Route path='/Tolov' element={<Tolov />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
