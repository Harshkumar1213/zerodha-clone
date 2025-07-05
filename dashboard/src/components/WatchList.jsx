import { useState, useContext, useEffect } from "react";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { DoughnutChart } from "./DoughnoutChart";

export default function WatchList() {
  const [watchlist, setWatchlist] = useState([]);
  const APIKEY = import.meta.env.VITE_API_KEY;
 
  const stockSymbols = [
    { symbol: "AAPL", company: "Apple Inc." },
    { symbol: "MSFT", company: "Microsoft Corporation" },
    { symbol: "AMZN", company: "Amazon.com Inc." },
    { symbol: "GOOGL", company: "Alphabet Inc." },
    { symbol: "TSLA", company: "Tesla Inc." },
    { symbol: "META", company: "Meta Platforms Inc." },
    { symbol: "BABA", company: "Alibaba Group" },
    { symbol: "NIO", company: "NIO Inc." },
    { symbol: "RIO", company: "Rio Tinto" },
    { symbol: "TM", company: "Toyota Motor Corp." },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const results = [];

      for (let stock of stockSymbols) {
        try {
          const res = await fetch(
            `https://finnhub.io/api/v1/quote?symbol=${stock.symbol}&token=${APIKEY}`
          );
          const json = await res.json();

          results.push({
            name: stock.company,
            symbol: stock.symbol,
            price: json.c,
            percent: json.dp,
            isDown: json.d < 0,
          });
        } catch (err) {
          console.error(`Error fetching ${stock.symbol}`, err);
        }
      }

      setWatchlist(results);
    };

    fetchData();
  }, []);

  const chartData = {
    labels: watchlist.map((s) => s.name),
    datasets: [
      {
        label: "Price",
        data: watchlist.map((s) => s.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(99, 255, 132, 0.5)",
          "rgba(162, 54, 235, 0.5)",
          "rgba(206, 255, 86, 0.5)",
          "rgba(192, 75, 192, 0.5)",
        ],
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      <DoughnutChart data={chartData} />
    </div>
  );
}

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent?.toFixed(2)}%</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">${stock.price?.toFixed(2)}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.symbol} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () => {
    generalContext.openSellWindow(uid); // ✅ This should open SellActionWindow
  };

  return (
    <span className="actions">
      <span>
      <Tooltip title="Buy (B)" placement="top"  onClick={handleBuyClick} arrow TransitionComponent={Grow}>
        <button className="buy">Buy</button>
      </Tooltip>
      <Tooltip title="Sell (S)" placement="top" onClick={handleSellClick} arrow TransitionComponent={Grow}>
        <button className="sell">Sell</button>
      </Tooltip>
      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>
    </span>
    </span>
  );
};
