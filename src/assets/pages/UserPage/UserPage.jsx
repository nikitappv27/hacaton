
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ContestList from '../../components/ContestList/ContestList';

import './UserPage.scss';

// Временно используем те же тестовые данные,
// которые сейчас находятся в GuestPage.
import { mockContests } from '../mockContests.js';

function UserPage() {
  const handleProfile = () => {
    console.log('Переход в профиль');
  };

  const handleLogout = () => {
    console.log('Выход из аккаунта');
  };

  const handleContest = (contest) => {
    console.log('Открытие контеста:', contest);
  };

  return (
    <div className="user-page">
      <Header
        variant="user"
        onProfile={handleProfile}
        onLogout={handleLogout}
      />

      <ContestList
        contests={mockContests}
        buttonText="Подробнее"
        onCardAction={handleContest}
      />

      <Footer />
    </div>
  );
}

export default UserPage;
