import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Shop from './pages/Shop.tsx';
import Blog from './pages/Blog.tsx';
import Contact from './pages/Contact.tsx';
import ProductDetail from './pages/ProductDetail.tsx';
import Cart from './pages/Cart.tsx';
import Checkout from './pages/Checkout.tsx';
import Search from './pages/Search.tsx';
import Favorites from './pages/Favorites.tsx';
import NotFound from './pages/NotFound.tsx';
import ProductComparison from './pages/ProductComparison.tsx';
import { ModalProvider } from './contexts/ModalContext.tsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route index element={<Home />} />
    <Route path='shop' element={<Shop />} />
    <Route path='blog' element={<Blog />} />
    <Route path='contact' element={<Contact />} />
    <Route path='productDetail/:id' element={<ProductDetail />} />
    <Route path='contact' element={<Contact />} />
    <Route path='cart' element={<Cart />} />
    <Route path='checkout' element={<Checkout />} />
    <Route path='search' element={<Search />} />
    <Route path='favorites' element={<Favorites />} />
    <Route path='*' element={<NotFound />} />
    <Route path='productComparison' element={<ProductComparison />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </React.StrictMode>,
)
