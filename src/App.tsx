import { Outlet } from "react-router-dom";
import { Navbar, Footer, ScrollToTop, Modal } from './components/common/index';

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