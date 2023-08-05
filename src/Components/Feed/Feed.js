import NewTweet from "./NewTweet";
import Tweet from "./Tweet";
const Feed = () => {
  return (
    <>
      <div className="homeHeader">
        <span>Home</span>
      </div>
      <NewTweet />
      <Tweet />
    </>
  );
};
export default Feed;
