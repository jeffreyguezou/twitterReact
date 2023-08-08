import { useState } from "react";
import TweetOptions from "./TweetOptions";
import userProfile from "../../Assets/Images/profile1.webp";
import ProfilePicture from "../../UI/ProfilePicture";
const NewTweet = () => {
  const [createTweet, setCreateTweet] = useState("");
  const createTweetChangeHandler = (event) => {
    setCreateTweet(event.target.value);
  };
  return (
    <>
      <div className="newTweetContainer">
        <div className="userProfile">
          <ProfilePicture userImgURL={userProfile} />
        </div>
        <input
          className="newTweetBox"
          onChange={createTweetChangeHandler}
          placeholder="What's happening?!"
          value={createTweet}
          type="text"
        ></input>
      </div>
      <TweetOptions tweetContent={createTweet} />
    </>
  );
};
export default NewTweet;
