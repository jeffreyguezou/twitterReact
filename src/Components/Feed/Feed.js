import NewTweet from "./NewTweet";
import TabList from "./TabList";
import Tweet from "./Tweet";
const Feed = () => {
  const tweets = [
    {
      userName: "user 1",
      userID: "@userID1",
      tweetContent: "This is a tweet that was posted by user 1",
      tweetID: "askbdsuk5769x",
      tweetLikes: "234",
      tweetRetweets: "765",
      tweetComments: "45",
    },
    {
      userName: "user 2",
      userID: "@userID2",
      tweetContent: "Everyone should have viewed this tweetb posted by user 2 ",
      tweetID: "dshavk7689",
      tweetLikes: "2",
      tweetRetweets: "76",
      tweetComments: "0",
    },
    {
      userName: "user 3",
      userID: "@userID1",
      tweetContent: "Ambitoion is the essential purpose of our being",
      tweetID: "fasjghdkjs3542k",
      tweetLikes: "47",
      tweetRetweets: "5",
      tweetComments: "4",
    },
    {
      userName: "user 4",
      userID: "@userID4",
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
      tweetContent: "Final dummy tweet.",
      tweetID: "sfhkjksl8769v",
      tweetLikes: "34",
      tweetRetweets: "12",
      tweetComments: "3",
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
