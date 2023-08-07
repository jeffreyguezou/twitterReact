import { GoFileMedia } from "react-icons/go";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import PostBtn from "../../UI/PostBtn";
const TweetOptions = (props) => {
  return (
    <div className="tweetOptions">
      <div className="tweetInsertOptions">
        <GoFileMedia color="#1D9BF0" />
        <BsEmojiSmile color="#1D9BF0" />
        <AiOutlineUnorderedList color="#1D9BF0"></AiOutlineUnorderedList>
      </div>
      <div className="tweetPostOptions">
        <PostBtn tweetContent={props.tweetContent} />
      </div>
    </div>
  );
};
export default TweetOptions;
