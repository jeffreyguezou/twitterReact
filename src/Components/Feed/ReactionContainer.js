import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import classes from "./Tweet.module.css";
import { useState } from "react";

const ReactionContainer = (props) => {
  const [isCommentHovered, setIsCommentHovered] = useState(false);
  const [isRetweetHovered, setIsRetweetHovered] = useState(false);
  const [isLikeHovered, setIsLikeHovered] = useState(false);

  const commentHoverHandler = () => {
    setIsCommentHovered(true);
  };
  const retweetHoverHandler = () => {
    setIsRetweetHovered(true);
  };
  const likeHoverHandler = () => {
    setIsLikeHovered(true);
  };
  const removeCommentHoverHandler = () => {
    setIsCommentHovered(false);
  };
  const removeRetweetHoverHandler = () => {
    setIsRetweetHovered(false);
  };
  const removeLikeHoverHandler = () => {
    setIsLikeHovered(false);
  };

  const commentHoverStyle = isCommentHovered
    ? `${classes.reaction} + ${classes.commentHover}`
    : `${classes.reaction}`;
  const retweetHoverStyle = isRetweetHovered
    ? `${classes.reaction} + ${classes.retweetHover}`
    : `${classes.reaction}`;
  const likeHoverStyle = isLikeHovered
    ? `${classes.reaction} + ${classes.likeHover}`
    : `${classes.reaction}`;

  return (
    <div className="reactionBox">
      <div
        className={commentHoverStyle}
        onMouseEnter={commentHoverHandler}
        onMouseLeave={removeCommentHoverHandler}
      >
        <FaRegComment />
        <span>{props.tweetComments}</span>
      </div>
      <div
        className={retweetHoverStyle}
        onMouseEnter={retweetHoverHandler}
        onMouseLeave={removeRetweetHoverHandler}
      >
        <AiOutlineRetweet />
        <span>{props.tweetRetweets}</span>
      </div>
      <div
        className={likeHoverStyle}
        onMouseEnter={likeHoverHandler}
        onMouseLeave={removeLikeHoverHandler}
      >
        <AiOutlineHeart />
        <span>{props.tweetLikes}</span>
      </div>
    </div>
  );
};
export default ReactionContainer;
