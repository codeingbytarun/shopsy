import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSingup from './Pages/LoginSingup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Asstets/banner_mens.png'
import women_banner from './Components/Asstets/banner_women.png'
import kids_banner from './Components/Asstets/banner_kids.png'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/mens'element={<ShopCategory  banner ={men_banner} category="men"/>}/>
        <Route path='/womens'element={<ShopCategory banner ={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner ={kids_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productid'element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSingup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
