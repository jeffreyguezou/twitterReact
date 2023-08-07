import NewTweet from "./NewTweet";
import TabList from "./TabList";
import Tweet from "./Tweet";
const Feed = () => {
  return (
    <>
      <div className="homeHeader">
        <span>Home</span>
      </div>
      <TabList />
      <NewTweet />
      <Tweet />
    </>
  );
};
export default Feed;
