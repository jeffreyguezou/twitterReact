import TweetContent from "./TweetContent";
import Tweetuser from "./Tweetuser";
import ReactionContainer from "./ReactionContainer";
import classes from "./Tweet.module.css";
import { useState } from "react";

const Tweet = (props) => {
  const [isTweetHovered, setIsTweetHovered] = useState(false);
  const tweetHoverHandler = () => {
    setIsTweetHovered(true);
  };
  const tweetHoverRemoveHandler = () => {
    setIsTweetHovered(false);
  };
  const tweetStyles = isTweetHovered
    ? "tweetContainer hovered"
    : "tweetContainer";
  return (
    <>
      <div
        onMouseEnter={tweetHoverHandler}
        onMouseLeave={tweetHoverRemoveHandler}
        className={tweetStyles}
      >
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
