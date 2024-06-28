import "./styles.css";
const Promotions = () => {
  const promotions = [
    {
      days: "Thursdays",
      title: "Thursday Point Multiplier",
      src: "https://i.imgur.com/6dK3GoE.jpg",
      alt: "points-multiplier",
    },
    {
      days: "Mondays",
      title: "Ladies Night & Friends Giveaway Drawings",
      src: "https://i.imgur.com/o0JoBbn.jpg",
      alt: "ladies-night",
    },
  ];

  return (
    <div className="promo-container">
      <div className="cards-container">
        {promotions.map((promo, key) => {
          return (
            <div className="promo-card" key={key}>
              <img src={promo.src} alt={promo.alt} />
              <div className="info">
                <div className="days">{promo.days}</div>
                <div className="title">{promo.title}</div>
              </div>
            </div>
          );
        })}
      </div>
      <img className="img-banners" src="https://i.imgur.com/7eAlhyY.jpg" alt="july-promo" />
      <img className="img-banners" src="https://i.imgur.com/IOypsNV.jpg" alt="promo-1" />
      <img className="img-banners" src="https://i.imgur.com/yFAOCeL.jpg" alt="promo-4" />
      <img className="img-banners" src="https://i.imgur.com/6dyjU2G.jpg" alt="highroller" />
    </div>
  );
};

export default Promotions;
