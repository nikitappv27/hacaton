
import './Header.scss';

function Header({ variant = 'guest', onProfile, onLogout, onLogin, onRegister }) {
  const isUser = variant === 'user';

  return (
    <header className="header">
      <a href="#" className="header__logo">
        LOGO
      </a>

      <div className="header__actions">
        {isUser ? (
          <>
            <button
              className="header__login"
              onClick={onProfile}
            >
              Профиль
            </button>

            <button
              className="header__register"
              onClick={onLogout}
            >
              Выйти
            </button>
          </>
        ) : (
          <>
            <button
              className="header__login"
              onClick={onLogin}
            >
              Войти
            </button>

            <button
              className="header__register"
              onClick={onRegister}
            >
              Зарегистрироваться
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
