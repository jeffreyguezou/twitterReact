import { HiOutlineUserCircle } from "react-icons/hi";
const Tweetuser = (props) => {
  const profilePicSize = { width: "40px", height: "40px" };
  return (
    <div className="tweeterDetails">
      <span>
        <HiOutlineUserCircle style={profilePicSize} />
      </span>
      <div>{props.userName}</div>
      <div>{props.userID}</div>
    </div>
  );
};
export default Tweetuser;
