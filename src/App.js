import './style/App.scss';
import Navbar from './pages/Navbar'

import {Route, Routes} from 'react-router'
import Homepage from "./pages/Homepage";
import ShopWindow from "./pages/ShopWindow";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import CaseStudy from "./pages/CaseStudy";

function App() {
  return (
    <div className="App">
        <header>
            <Navbar />
        </header>
        <main>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/case-study' element={<CaseStudy/>}/>
                <Route path='/shop' element={<ShopWindow/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  );
}

export default App;
