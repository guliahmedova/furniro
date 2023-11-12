import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Modal from "./components/common/Modal";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Modal/>
      <Footer />
    </>
  )
}

export default App;