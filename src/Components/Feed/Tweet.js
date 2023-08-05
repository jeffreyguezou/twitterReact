import TweetContent from "./TweetContent";
import Tweetuser from "./Tweetuser";
import ReactionContainer from "./ReactionContainer";
import classes from "./Tweet.module.css";

const Tweet = () => {
  return (
    <>
      <div className="tweetContainer">
        <div className="userDetails">
          <Tweetuser />
        </div>
        <div className={classes.tweetContent}>
          <TweetContent />
        </div>
        <div className={classes.reactionContainer}>
          <ReactionContainer />
        </div>
      </div>
    </>
  );
};
export default Tweet;
