import React from "react";
import { HiOutlineLink, HiOutlineMail, HiOutlineChat } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa"; 

interface ShareOptionProps {
  icon: string;
  label: string;
}

const ShareOption: React.FC<ShareOptionProps> = ({ icon, label }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
    case "copy":
      return <HiOutlineLink className="text-my-cocoa-100" />;
    case "email":
      return <HiOutlineMail className="text-my-cocoa-100" />;
    case "message":
      return <HiOutlineChat className="text-my-cocoa-100" />;
    case "whatsapp":
      return <FaWhatsapp className="text-my-cocoa-100" />;
    case "facebook":
      return <FaFacebookF className="text-my-cocoa-100" />;
    case "twitter":
      return <FaTwitter className="text-my-cocoa-100" />;
    case "messenger":
      return <FaFacebookMessenger className="text-my-cocoa-100" />;
    default:
      return null;
    }
  };

  return (
    <button className="flex items-center px-10 py-3 text-my-cocoa-100  font-bold space-x-2 p-2 bg-my-cocoa-800 hover:bg-my-cocoa-950 rounded-xl">
      {getIcon(icon)}
      <span>{label}</span>
    </button>
  );
};

export default ShareOption;
