import SideIcon from "./sideIcon";
import { BiHome, BiBell } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiMail, FiUser, FiUsers, FiTwitter } from "react-icons/fi";
import { PiClipboardTextBold } from "react-icons/pi";
import { CiCircleMore } from "react-icons/ci";
const Accessibility = () => {
  const iconSize = { width: "1.75rem", height: "1.75rem" };
  const sideBarOptions = [
    { text: "Home", icon: <BiHome style={iconSize} /> },
    { text: "Search", icon: <BsSearch style={iconSize} /> },
    { text: "Notifications", icon: <BiBell style={iconSize} /> },
    { text: "Messages", icon: <FiMail style={iconSize} /> },
    { text: "Lists", icon: <PiClipboardTextBold style={iconSize} /> },
    { text: "Communities", icon: <FiUsers style={iconSize} /> },
    { text: "Profile", icon: <FiUser style={iconSize} /> },
    { text: "More", icon: <CiCircleMore style={iconSize} /> },
    { text: "Tweet", icon: <FiTwitter style={iconSize} /> },
  ];
  return (
    <>
      <div className="logoSection">Twitter</div>
      <div className="sidebar">
        {sideBarOptions.map((Sidebaroption) => {
          return (
            <SideIcon
              key={Sidebaroption.text}
              text={Sidebaroption.text}
              icon={Sidebaroption.icon}
            />
          );
        })}
      </div>
    </>
  );
};
export default Accessibility;
