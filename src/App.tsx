import { Outlet } from "react-router-dom";
import { Footer, Navbar, ScrollToTop } from './components/common/index';
import ModalManager from "./components/common/modals/ModalManager";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <ModalManager />
      <Footer />
    </>
  )
}

export default App;