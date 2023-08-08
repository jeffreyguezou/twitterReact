import ProfilePicture from "../../UI/ProfilePicture";

const Tweetuser = (props) => {
  return (
    <div className="tweeterDetails">
      <span>
        <ProfilePicture userImgURL={props.userImgUrl} />
      </span>
      <div>{props.userName}</div>
      <div>{props.userID}</div>
    </div>
  );
};
export default Tweetuser;
