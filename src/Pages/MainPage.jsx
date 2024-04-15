import React, { useState, useEffect } from "react";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/footer.jsx";
import Cards from "../components/cards/cards.jsx";
import LogIn from "./LogIn.jsx";
import LoggedInHeader from "../components/header/LoggedInHeader.jsx";
const MainPage = () => {
  // состояние для показывания модального окна
  const [showModal, setShowModal] = useState(false);
  // состояние вошел/не вошел пользоватль
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const closeModal = () => {
    setShowModal(false);
  };
  // Функция для обработки входа пользователя
  // Обработчик успешного входа
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="main__page">
      <h2 className="visually-hidden">Main Page</h2>
      {/* отображаем разные шапки в зависимости от того вошел / не вошел юзер */}
      {isLoggedIn ? <LoggedInHeader /> : <Header toggleModal={toggleModal} />}

      {showModal && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 9999,
          }}
        >
          <LogIn closeModal={closeModal} handleLogin={handleLogin} />
        </div>
      )}
      <div className="content">
        <Cards />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
