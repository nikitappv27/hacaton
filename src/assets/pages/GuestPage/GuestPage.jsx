
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ContestList from '../../components/ContestList/ContestList';

import { mockContests } from '../mockContests.js';

import './GuestPage.scss';

function GuestPage() {
  const handleLogin = () => {
    console.log('Переход к авторизации');
  };

  const handleRegister = () => {
    console.log('Переход к регистрации');
  };

  const handleContest = (contest) => {
    console.log('Необходимо войти:', contest);
  };

  return (
    <div className="guest-page">
      <Header
        variant="guest"
        onLogin={handleLogin}
        onRegister={handleRegister}
      />

      <ContestList
        contests={mockContests}
        buttonText="Войти"
        onCardAction={handleContest}
      />

      <Footer />
    </div>
  );
}

export default GuestPage;
