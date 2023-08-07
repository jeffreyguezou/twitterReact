import classes from "./PostBtn.module.css";
const PostBtn = () => {
  return (
    <button className={classes.postBtn}>
      <span className={classes.btnText}>Post</span>
    </button>
  );
};
export default PostBtn;
