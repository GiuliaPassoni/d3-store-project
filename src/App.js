import './App.css';
import Navbar from './pages/Navbar'

import {Route, Routes} from 'react-router'
import Homepage from "./pages/Homepage";
import ShopWindow from "./pages/ShopWindow";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
        <header>
            <Navbar />
        </header>
        <main>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/shop' element={<ShopWindow/>}/>
            </Routes>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  );
}

export default App;
