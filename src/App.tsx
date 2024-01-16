import { Outlet } from "react-router-dom";
import { Footer, Navbar, ScrollToTop } from './components/common/index';
import ModalManager from "./components/common/modals/ModalManager";
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <ToastContainer/>
      <Outlet />
      <ModalManager />
      <Footer />
    </>
  )
}

export default App;