import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddProduct from './Pages/AddProduct/AddProduct';
import Blog from './Pages/Blog/Blog';
import DeleteProduct from './Pages/DeleteProduct/DeleteProduct';
import AllProducts from './Pages/Home/AllProducts/AllProducts';
import AllProductsHook from './Pages/Home/AllProductsHook/AllProductsHook';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import MyProducts from './Pages/MyProducts/MyProducts';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/allProductsHook' element={<AllProductsHook></AllProductsHook>}></Route>

        <Route path='/product/:productId' element={
          <RequireAuth>
            <ProductDetail></ProductDetail>
          </RequireAuth>
        }></Route>

        <Route path='/allProducts' element={
          <RequireAuth>
            <AllProducts></AllProducts>
          </RequireAuth>
        }></Route>

        <Route path='/addproduct' element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>

        <Route path='/deleteproduct' element={
          <RequireAuth>
            <DeleteProduct></DeleteProduct>
          </RequireAuth>
        }></Route>

        <Route path='/myproducts' element={
          <RequireAuth>
            <MyProducts></MyProducts>
          </RequireAuth>
        }></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
