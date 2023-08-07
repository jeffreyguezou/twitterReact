import Trending from "./Trending";
const TrendingComponent = () => {
  const trendingATW = [
    {
      topic: "Music",
      name: "Loona",
      number: "132.4k",
    },
    {
      topic: "Sports",
      name: "Manchester United",
      number: "14k",
    },
    {
      topic: "Cricket",
      name: "Kohli",
      number: "19k",
    },
    {
      topic: "Entertainment",
      name: "Super Deluxe",
      number: "9k",
    },
  ];

  return trendingATW.map((trend) => {
    return (
      <div className="trendsContainer" key={trend.name}>
        <Trending trends={trend} />
      </div>
    );
  });
};
export default TrendingComponent;
