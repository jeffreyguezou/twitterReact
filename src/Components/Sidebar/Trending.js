import { useState } from "react";
const Trending = (props) => {
  const [isTrendHovered, setIsTrendHovered] = useState(false);

  const trendHoverhandler = () => {
    setIsTrendHovered(true);
  };
  const trendRemoveHoverHandler = () => {
    setIsTrendHovered(false);
  };
  const trendHoverClasses = isTrendHovered
    ? "trendingTab hovered"
    : "trendingTab";
  return (
    <>
      <div
        onMouseEnter={trendHoverhandler}
        onMouseLeave={trendRemoveHoverHandler}
        className={trendHoverClasses}
      >
        <div className="trendingTopic">
          <span>{props.trends.topic}</span>
          <span>.</span>
          <span>Trending</span>
        </div>
        <div className="trend">
          <span className="trendTerm">{props.trends.name}</span>
          <span className="trendStatus">{props.trends.number} posts</span>
        </div>
      </div>
    </>
  );
};
export default Trending;
