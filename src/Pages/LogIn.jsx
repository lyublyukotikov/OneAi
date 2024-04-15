import React from "react";

const LogIn = ({ closeModal, handleLogin }) => {
  const handleCloseModal = () => {
    closeModal();
  };
  // если пользователь вошел
  const handleSignIn = () => {
    // передаем инфомрацию родителю чтобы отображать другую шапку
    handleLogin();
    // Закрываем модальное окно после успешного входа
    closeModal();
  };
  return (
    <div className="login_page">
      <div className="login_page__inner container ">
        <h2 className="visually-hidden">Login</h2>
        <form className="close_button__wrapper">
          <button className="close_button button" onClick={handleCloseModal}>
            <span className="visually-hidden">Close navigation menu</span>
          </button>
        </form>
        <form className="login_form">
          <label className="visually-hidden" htmlFor="Email">
            Email
          </label>
          <input
            className="login_form__input input"
            id="Email"
            placeholder="Email"
            type="email"
          />
          <label className="visually-hidden" htmlFor="Password">
            Password
          </label>
          <input
            className="login_form__input input"
            id="Password"
            placeholder="Password"
            type="password"
          />
        </form>
        <div className="sign_in">
          <button
            onClick={handleSignIn}
            type="submit"
            className="sign_in__button button"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
