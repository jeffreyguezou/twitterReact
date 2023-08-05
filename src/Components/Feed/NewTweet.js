import { useState } from "react";

const NewTweet = () => {
  const [createTweet, setCreateTweet] = useState("");
  const createTweetChangeHandler = (event) => {
    setCreateTweet(event.target.value);
  };
  return (
    <>
      <div className="newTweetContainer">
        <div className="userProfile"></div>
        <input
          className="newTweetBox"
          onChange={createTweetChangeHandler}
          placeholder="What's happening?!"
          value={createTweet}
          type="text"
        ></input>
      </div>
    </>
  );
};
export default NewTweet;
