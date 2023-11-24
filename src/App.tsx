import { Outlet } from "react-router-dom";
import Modal from "./components/common/Modal";
import { Navbar, Footer, ScrollToTop } from './components/common/index';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Modal />
      <Footer />
    </>
  )
}

export default App;