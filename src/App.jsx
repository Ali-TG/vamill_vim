import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home/Home';
import Shop from './components/Pages/Shop/Shop';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return(
        <div className='min-h-screen relative flex flex-col'>
          <NavBar/>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
              </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    )
};

export default App;