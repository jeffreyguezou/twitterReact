import TweetContent from "./TweetContent";
import Tweetuser from "./Tweetuser";
import ReactionContainer from "./ReactionContainer";
import classes from "./Tweet.module.css";

const Tweet = (props) => {
  return (
    <>
      <div className="tweetContainer">
        <div className="userDetails">
          <Tweetuser
            userName={props.tweet.userName}
            userID={props.tweet.userID}
          />
        </div>
        <div className={classes.tweetContent}>
          <TweetContent tweetContent={props.tweet.tweetContent} />
        </div>
        <div className={classes.reactionContainer}>
          <ReactionContainer
            tweetLikes={props.tweet.tweetLikes}
            tweetRetweets={props.tweet.tweetRetweets}
            tweetComments={props.tweet.tweetComments}
          />
        </div>
      </div>
    </>
  );
};
export default Tweet;
