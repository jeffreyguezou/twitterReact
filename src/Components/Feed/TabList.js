import { useState } from "react";
import classes from "./TabList.module.css";
const TabList = () => {
  const [isForTabHovered, setIsForTabHovered] = useState(false);

  const [isFollowingTabHovered, setIsFollowingTabHovered] = useState(false);
  const forHoverHandler = () => {
    setIsForTabHovered(true);
  };
  const removeForHoverhandler = () => {
    setIsForTabHovered(false);
  };
  const followingHoverHandler = () => {
    setIsFollowingTabHovered(true);
  };
  const removeFollowingHoverhandler = () => {
    setIsFollowingTabHovered(false);
  };
  const forHoverStyles = isForTabHovered
    ? `${classes.tabOptions} + ${classes.tabOptionHovered}`
    : `${classes.tabOptions}`;
  const followingHoverStyles = isFollowingTabHovered
    ? `${classes.tabOptions} + ${classes.tabOptionHovered}`
    : `${classes.tabOptions}`;

  return (
    <>
      <div className={classes.tabList}>
        <div
          onMouseEnter={forHoverHandler}
          onMouseLeave={removeForHoverhandler}
          className={forHoverStyles}
        >
          For you
        </div>
        <div
          onMouseEnter={followingHoverHandler}
          onMouseLeave={removeFollowingHoverhandler}
          className={followingHoverStyles}
        >
          Following
        </div>
      </div>
    </>
  );
};
export default TabList;
