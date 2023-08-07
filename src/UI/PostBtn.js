import classes from "./PostBtn.module.css";
const PostBtn = (props) => {
  const istweetContent = props.tweetContent.trim().length !== 0;
  const setButtonValidClasses = !istweetContent
    ? `${classes.postBtn} + ${classes.disabled}`
    : `${classes.postBtn}`;
  return (
    <button className={setButtonValidClasses}>
      <span className={classes.btnText}>Post</span>
    </button>
  );
};
export default PostBtn;
