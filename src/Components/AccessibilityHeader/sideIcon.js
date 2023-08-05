import { useState } from "react";
import classes from "./SideIcon.module.css";
const SideIcon = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseEnterHandler = () => {
    setIsHovered(true);
  };
  const mouseExitHandler = () => {
    setIsHovered(false);
  };
  const styleClasses = isHovered
    ? `${classes.sideBarContainer} + ${classes.hovered}`
    : `${classes.sideBarContainer}`;
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseExitHandler}
      className={styleClasses}
    >
      <span className={classes.sidebarIcon}>{props.icon}</span>
      <span className={classes.sidebarText}>{props.text}</span>
    </div>
  );
};
export default SideIcon;
