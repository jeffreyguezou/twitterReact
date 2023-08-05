import Accessibility from "./AccessibilityHeader/Accessibility";
import Feed from "./Feed/Feed";
import RightSection from "./Sidebar/RightSection";
import classes from "./MainPage.module.css";
const MainPage = () => {
  return (
    <div className="app">
      <div className={classes.accessibiltyContainer}>
        <Accessibility />
      </div>
      <div className={classes.feedContainer}>
        <Feed />
      </div>
      <div className={classes.sideContainer}>
        <RightSection />
      </div>
    </div>
  );
};
export default MainPage;
