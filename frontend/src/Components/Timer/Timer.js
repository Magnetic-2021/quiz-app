import "./Timer.css";

const Timer = ({ time, showBomb }) => {
  console.log({ showBomb });
  const bombOpacity = showBomb ? 100 : 0;
  const gameOverOpacity = showBomb ? 0 : 100;

  return (
    <div className="bomb-container">
      <p className="bomb-time" style={{ display: showBomb ? "block" : "none" }}>
        {time}
      </p>
      <p className="game-over" style={{ display: showBomb ? "none" : "block" }}>
        GAME OVER
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
        <path
          d="M563.477 67.6172H536.43C528.992 67.6172 522.906 73.7027 522.906 81.1411C522.906 88.5789 528.992 94.6644 536.43 94.6644H563.477C570.914 94.6644 577 88.5789 577 81.1411C577 73.7027 570.914 67.6172 563.477 67.6172Z"
          fill="#FF8C42"
        />
        <path
          d="M495.859 0C488.421 0 482.336 6.08555 482.336 13.5234V40.5703C482.336 48.0082 488.421 54.0938 495.859 54.0938C503.298 54.0938 509.383 48.0082 509.383 40.5703V13.5234C509.383 6.08555 503.298 0 495.859 0Z"
          fill="#FF8C42"
        />
        <path
          d="M534.063 61.9825L553.222 42.824C558.518 37.5274 558.518 28.9625 553.222 23.6659C547.925 18.3692 539.36 18.3692 534.063 23.6659L514.905 42.824C509.608 48.1207 509.608 56.6856 514.905 61.9825C520.314 67.2787 528.879 67.2787 534.063 61.9825Z"
          fill="#FF8C42"
        />
        <path
          d="M457.655 61.9825C462.952 67.2787 471.517 67.2787 476.813 61.9825C482.11 56.6856 482.11 48.1207 476.813 42.824L457.655 23.6659C452.358 18.3692 443.794 18.3692 438.497 23.6659C433.2 28.9625 433.2 37.5274 438.497 42.824L457.655 61.9825Z"
          fill="#FF8C42"
        />
        <path
          d="M534.063 100.298C528.767 95.0021 520.202 95.0021 514.905 100.298C509.608 105.595 509.608 114.16 514.905 119.457L534.063 138.615C539.36 143.911 547.925 143.911 553.222 138.615C558.518 133.318 558.518 124.753 553.222 119.457L534.063 100.298Z"
          fill="#FF8C42"
        />
      </svg>
    </div>
  );
};

export default Timer;
