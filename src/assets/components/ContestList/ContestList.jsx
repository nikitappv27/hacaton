
import { useState } from 'react';
import ContestCard from '../ContestCard/ContestCard';
import SearchBar from '../SearchBar/SearchBar';
import './ContestList.scss';

function ContestList({ contests, buttonText, onCardAction }) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);

  const filteredContests = contests.filter((contest) =>
    contest.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredContests.length / 3);

  const visibleContests = filteredContests.slice(
    page * 3,
    page * 3 + 3
  );

  const handleSearch = (value) => {
    setSearch(value);
    setPage(0);
  };

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handlePrevious = () => {
    setPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <main className="contest-list">
      <div className="contest-list__content">

        <div className="contest-list__heading">
          <h1>Список тем</h1>
          <p>
            Выбираете контест или воспользуйтесь поиском
          </p>
        </div>

        <SearchBar
          value={search}
          onChange={handleSearch}
        />

        <div className="contest-list__carousel">

          <button
            className="contest-list__arrow contest-list__arrow--left"
            onClick={handlePrevious}
            disabled={page === 0}
            aria-label="Предыдущие контесты"
          >
            <svg viewBox="0 0 50 90" fill="none">
              <path
                d="M42 5 L5 45 L42 85"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="contest-list__cards">
            {visibleContests.length > 0 ? (
              visibleContests.map((contest) => (
                <ContestCard
                  key={contest.id}
                  contest={contest}
                  buttonText={buttonText}
                  onAction={onCardAction}
                />
              ))
            ) : (
              <div className="contest-list__empty">
                Контесты не найдены
              </div>
            )}
          </div>

          <button
            className="contest-list__arrow contest-list__arrow--right"
            onClick={handleNext}
            disabled={page >= totalPages - 1 || totalPages === 0}
            aria-label="Следующие контесты"
          >
            <svg viewBox="0 0 50 90" fill="none">
              <path
                d="M8 5 L45 45 L8 85"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

        </div>
      </div>
    </main>
  );
}

export default ContestList;
