import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

      <Modal visible={modalVisible} setVisible={setModalVisible}>
        <div className="p-4">ye</div>
      </Modal>
    </>
  );
}

export default App;
