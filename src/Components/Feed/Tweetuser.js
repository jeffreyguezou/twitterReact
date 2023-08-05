import { HiOutlineUserCircle } from "react-icons/hi";
const Tweetuser = () => {
  const profilePicSize = { width: "40px", height: "40px" };
  return (
    <div className="tweeterDetails">
      <span>
        <HiOutlineUserCircle style={profilePicSize} />
      </span>
      <div>USERNAME</div>
      <div>@userID</div>
    </div>
  );
};
export default Tweetuser;
