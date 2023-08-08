import NewTweet from "./NewTweet";
import TabList from "./TabList";
import Tweet from "./Tweet";
import pp1 from "../../Assets/Images/profile1.jpg";
import pp2 from "../../Assets/Images/profile2.jpg";
import pp3 from "../../Assets/Images/profile3.jpeg";
import pp4 from "../../Assets/Images/profile4.png";
import pp5 from "../../Assets/Images/profile5.jpeg";
import pp6 from "../../Assets/Images/profile6.jpeg";
const Feed = () => {
  const tweets = [
    {
      userName: "user 1",
      userID: "@userID1",
      userImgUrl: pp1,
      tweetContent: "This is a tweet that was posted by user 1",
      tweetID: "askbdsuk5769x",
      tweetLikes: "234k",
      tweetRetweets: "765",
      tweetComments: "45",
    },
    {
      userName: "user 2",
      userID: "@userID2",
      userImgUrl: pp2,
      tweetContent: "Everyone should have viewed this tweetb posted by user 2 ",
      tweetID: "dshavk7689",
      tweetLikes: "2.1k",
      tweetRetweets: "76",
      tweetComments: "0",
    },
    {
      userName: "user 3",
      userID: "@userID3",
      userImgUrl: pp3,
      tweetContent: "Ambitoion is the essential purpose of our being",
      tweetID: "fasjghdkjs3542k",
      tweetLikes: "47",
      tweetRetweets: "5",
      tweetComments: "4",
    },
    {
      userName: "user 4",
      userID: "@userID4",
      userImgUrl: pp4,
      tweetContent:
        "Whew! this is a lot of dummy tweets. I can't think of more",
      tweetID: "dgjkd7678n",
      tweetLikes: "1",
      tweetRetweets: "0",
      tweetComments: "0",
    },
    {
      userName: "user 5",
      userID: "@userID5",
      userImgUrl: pp5,
      tweetContent: "Final dummy tweet.",
      tweetID: "sfhkjksl8769v",
      tweetLikes: "34",
      tweetRetweets: "12",
      tweetComments: "3",
    },
    {
      userName: "user 6",
      userID: "@userID5",
      userImgUrl: pp6,
      tweetContent: "oaky this is the final dummy tweet for sure 100%.",
      tweetID: "dsjkhde87l",
      tweetLikes: "45",
      tweetRetweets: "8",
      tweetComments: "15",
    },
  ];
  return (
    <>
      <div className="feedHeader">
        <div className="homeHeader">
          <span>Home</span>
        </div>
        <TabList />
      </div>
      <NewTweet />
      {tweets.map((tweet) => {
        return <Tweet key={tweet.tweetID} tweet={tweet} />;
      })}
    </>
  );
};
export default Feed;
