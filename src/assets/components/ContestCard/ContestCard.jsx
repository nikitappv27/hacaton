
import './ContestCard.scss';

function ContestCard({ contest, buttonText = 'Войти', onAction }) {
  return (
    <article className="contest-card">
      <h2 className="contest-card__title">
        {contest.title}
      </h2>

      <div className="contest-card__info">
        <span>
          {contest.type === 'team' ? 'команда' : '1 x 1'}
        </span>

        <span>
          {contest.startTime} - {contest.endTime}
        </span>

        <span>
          {{
            easy: 'Простой',
            medium: 'Средний',
            hard: 'Сложный',
          }[contest.difficulty] || contest.difficulty}
        </span>
      </div>

      <p className="contest-card__description">
        {contest.description}
      </p>

      <button
        className="contest-card__button"
        onClick={() => onAction?.(contest)}
      >
        {buttonText}
      </button>
    </article>
  );
}

export default ContestCard;
