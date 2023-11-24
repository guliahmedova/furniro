import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { ModalProvider } from './contexts/ModalContext.tsx';
import { store } from './redux/app/store.ts';
import { persistor } from './redux/app/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import {
  Home,
  Shop,
  Blog,
  Contact,
  ProductDetail,
  Cart,
  Checkout,
  Search,
  Favorites,
  ProductComparison,
  NotFound,
  Login,
  Register
} from './pages/index.ts';

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='blog' element={<Blog />} />
      <Route path='contact' element={<Contact />} />
      <Route path='productDetail/:productId' element={<ProductDetail />} />
      <Route path='contact' element={<Contact />} />
      <Route path='cart' element={<Cart />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='search' element={<Search />} />
      <Route path='favorites' element={<Favorites />} />
      <Route path='productComparison' element={<ProductComparison />} />
      <Route path='*' element={<NotFound />} />
    </Route>
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);