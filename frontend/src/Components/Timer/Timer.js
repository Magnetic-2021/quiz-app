import "./Timer.css";

const Timer = ({ time, showBomb, score }) => {
  const bombOpacity = showBomb ? 100 : 0;
  const gameOverOpacity = showBomb ? 0 : 100;

  return (
    <div className="bomb-container">
      <p className="bomb-time" style={{ display: showBomb ? "block" : "none" }}>
        {time}
      </p>
      <p className="game-over" style={{ display: showBomb ? "none" : "block" }}>
        SCORE: {score}
      </p>
      <svg
        style={{ opacity: bombOpacity }}
        className="bomb"
        width="180"
        height="180"
        viewBox="0 0 577 577"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M496.423 99.7348L437.822 158.336L467.686 188.201C478.279 198.794 478.279 215.924 467.686 226.405L448.077 246.013C461.375 275.427 468.812 308.109 468.812 342.481C468.812 471.968 363.893 576.887 234.406 576.887C104.919 576.887 0 472.08 0 342.593C0 213.107 104.919 108.187 234.406 108.187C268.778 108.187 301.46 115.625 330.873 128.923L350.483 109.314C361.076 98.7207 378.206 98.7207 388.686 109.314L418.55 139.178L477.152 80.5771L496.423 99.7348Z"
          fill="#FF8C42"
        />
       
        
      </svg>
    </div>
  );
};

export default Timer;
