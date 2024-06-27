import React from "react";
import "./styles.css";

const Casino = () => {
  const games = [
    { name: "Blackjack", count: 3, bet: "$25 - $25000", ref: "(GEGA-003423)" },
    {
      name: "Fortune Pai Gow Poker",
      count: 12,
      bet: "No Limit",
      ref: "(GEGA-003730)",
    },
    {
      name: "EZ Baccarat, Panda 8",
      count: 5,
      bet: "$50 - $50000",
      ref: "(GEGR-002144)",
    },
    {
      name: "Ultimate Texas Hold'em",
      count: 2,
      bet: "$10 - $1000",
      ref: "(GEGA-004013)",
    },
    {
      name: "Three Card Poker, 6 Card Bonus",
      count: 3,
      bet: "$25 - $2000",
      ref: "(GEGA-003667)",
    },
    {
      name: "Face up Pai Gow Poker",
      count: 6,
      bet: "$25 - $2000",
      ref: "(GEGA-003443)",
    },
  ];
  return (
    <div className="casino-container">
      <div className="drop-shadow"></div>
      <table>
        <thead>
          <th>Table Games</th>
          <th># of Tables</th>
          <th>Minimum/Maximum Bet</th>
        </thead>
        <tbody>
          {games.map((game) => {
            return (
              <tr>
                <td>
                  {game.name}, {game.ref}
                </td>
                <td>{game.count}</td>
                <td>{game.bet}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Casino;
