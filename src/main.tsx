import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.tsx';
import Spinner from './components/common/Spinner.tsx';
import { ModalProvider } from './contexts/ModalContext.tsx';
import './index.css';
import NewProducts from './pages/NewProducts.tsx';
import ChangePassword from './pages/auth/ChangePassword.tsx';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage.tsx';
import ProfileEdit from './pages/auth/ProfileEdit.tsx';
import { persistor, store } from './redux/app/store.ts';

const Home = lazy(() => import('./pages/Home.tsx'));
const Shop = lazy(() => import('./pages/Shop.tsx'));
const Blog = lazy(() => import('./pages/Blog.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const ProductDetail = lazy(() => import('./pages/ProductDetail.tsx'));
const Cart = lazy(() => import('./pages/Cart.tsx'));
const Checkout = lazy(() => import('./pages/Checkout.tsx'));
const Search = lazy(() => import('./pages/Search.tsx'));
const Favorites = lazy(() => import('./pages/Favorites.tsx'));
const ProductComparison = lazy(() => import('./pages/ProductComparison.tsx'));
const NotFound = lazy(() => import('./pages/NotFound.tsx'));
const Login = lazy(() => import('./pages/auth/Login.tsx'));
const Register = lazy(() => import('./pages/auth/Register.tsx'));
const Profile = lazy(() => import('./pages/auth/Profile.tsx'));

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
      <Route path='newProducts' element={<NewProducts />} />
      <Route path='profile' element={<Profile />} >
        <Route path='change-password' element={<ChangePassword />} />
        <Route path='edit' index element={<ProfileEdit />} />
      </Route>
      <Route path='*' element={<NotFound />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Route>
    <Route path='/forgot-password' element={<ForgotPasswordPage />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<Spinner />}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <Provider store={store}>
          <ModalProvider>
            <RouterProvider router={router} />
          </ModalProvider>
        </Provider>
      </React.StrictMode>
    </PersistGate>
  </Suspense>
); 