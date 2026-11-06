import GuestPage from './assets/pages/GuestPage/GuestPage';
import UserPage from './assets/pages/UserPage/UserPage';

import './App.css';

function App() {
  // true — зарегистрированный пользователь
  // false — гость
  const isRegistered = false;

  return isRegistered ? <UserPage /> : <GuestPage />;
}

export default App;