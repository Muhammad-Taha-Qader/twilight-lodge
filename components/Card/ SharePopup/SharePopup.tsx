import React from "react";
import ShareOption from "./ShareOption"; // Importing the ShareOption subcomponent
import { SlClose } from "react-icons/sl";
import Image from "next/image";

interface SharePopupProps {
  isOpen: boolean,
  togglePopup: ()=>void
}

const SharePopup: React.FC<SharePopupProps> = ({isOpen, togglePopup}) => {

  console.log(`In popup ${isOpen}`);

  return (
    <div className="relative">

      {/* Popup Modal */}
      {isOpen && (
        <>
          {/* To add Bg overlay */}
          <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={togglePopup}>
          </div>

          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* <div className="bg-gradient-to-tl from-my-cocoa-200  to-my-cocoa-950  text-my-cocoa-950 rounded-lg shadow-lg p-6 w-80"> */}
            <div className="bg-zinc-950/80 shadow-my-cocoa-400/30 text-my-cocoa-100 rounded-lg shadow-lg p-6 w-[500px]">

              <button onClick={(e) => {togglePopup();
                e.stopPropagation(); // Prevent card click when sharing
              }} className="mt-4 text-my-cocoa-500 hover:text-my-cocoa-700">
                <SlClose className="text-2xl"/>
              </button>
              <h2 className="text-xl font-semibold my-4">Share this experience</h2>
              <div className="flex items-center justify-start gap-x-5 mb-4" >
                <Image
                  src={"/city.jpg"}
                  alt={"Muhammad Taha Profile Image"}
                  width={100}
                  height={100}
                  className="object-cover w-20 h-20 rounded-xl"
                  sizes="100vw"
                />
                <p className="mb-4">Go VIP with Kevin Hart</p>
              </div>
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-3">
                <ShareOption icon="copy" label="Copy Link" />
                <ShareOption icon="email" label="Email" />
                <ShareOption icon="message" label="Messages" />
                <ShareOption icon="whatsapp" label="WhatsApp" />
                <ShareOption icon="messenger" label="Messenger" />
                <ShareOption icon="facebook" label="Facebook" />
                <ShareOption icon="twitter" label="Twitter" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SharePopup;
