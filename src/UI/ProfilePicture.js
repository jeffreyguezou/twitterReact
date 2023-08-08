import classes from "./ProfilePicture.module.css";
const ProfilePicture = (props) => {
  return (
    <div>
      <img
        src={props.userImgURL}
        alt="userProfilePic"
        className={classes.profilePicture}
      />
    </div>
  );
};
export default ProfilePicture;
