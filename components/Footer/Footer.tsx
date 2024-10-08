// // components/Footer.tsx
// "use client";
// import { useState } from "react";
// import {FooterColumn} from "./FooterColumn";
// import FooterTabs from "./FooterTabs";
// import FooterBottom from "./FooterBottom";

// // Define a union type for the tabs
// type TabType = "Popular" | "Arts" | "Outdoors" | "Mountains";

// // Define the shape of each tab content
// type Location = {
//   title: string;
//   description: string;
// };

// const Footer = () => {
//   const [activeTab, setActiveTab] = useState<TabType>("Mountains");

//   // Define the tab content type
//   const tabContent: Record<TabType, Location[]> = {
//     Popular: [
//       { title: "Mentone", description: "Cottage rentals" },
//       { title: "Sedona", description: "Condo rentals" },
//       { title: "Blue Mountains", description: "House rentals" },
//       { title: "Townsend", description: "Vacation rentals" },
//     ],
//     Arts: [
//       { title: "Phoenix", description: "Vacation rentals" },
//       { title: "New Orleans", description: "Artistic stays" },
//     ],
//     Outdoors: [
//       { title: "Banff", description: "House rentals" },
//       { title: "Yellowstone", description: "Cabin rentals" },
//     ],
//     Mountains: [
//       { title: "Mentone", description: "Cottage rentals" },
//       { title: "Sedona", description: "Condo rentals" },
//       { title: "Helen", description: "Cabin rentals" },
//       { title: "Pine Mountain", description: "Vacation rentals" },
//     ],
//   };

//   return (
//     <footer className="bg-black py-8">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Upper Section */}
//         <h2 className="text-lg font-semibold mb-6">Inspiration for future getaways</h2>
//         <FooterTabs activeTab={activeTab} setActiveTab={setActiveTab} />
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
//           {tabContent[activeTab]?.map((location, index) => (
//             <FooterColumn key={index} title={location.title} description={location.description} />
//           ))}
//         </div>

//         {/* Lower Section */}
//         <div className="mt-12 border-t pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           <FooterColumn title="Support" items={["Help Center", "AirCover", "Anti-discrimination", "Disability support", "Cancellation options"]} />
//           <FooterColumn title="Hosting" items={["Airbnb your home", "AirCover for Hosts", "Hosting resources", "Community forum"]} />
//           <FooterColumn title="Airbnb" items={["Newsroom", "New features", "Careers", "Investors", "Gift cards"]} />
//           <FooterColumn title="Other" items={["Terms", "Privacy", "Sitemap"]} />
//         </div>
//         <div className="mt-12 border-t pt-8 " >
//           <FooterBottom/>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// components/Footer.tsx
"use client";
import { useState } from "react";
import { FooterColumn } from "./FooterColumn";
import FooterTabs from "./FooterTabs";
import FooterBottom from "./FooterBottom";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

// Define a union type for the tabs
type TabType = "Popular" | "Arts" | "Outdoors" | "Mountains";

// Define the shape of each tab content
type Location = {
  title: string;
  description: string;
};

const Footer = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Popular");
  const [showAll, setShowAll] = useState(false);
  const visibleLocationLimit =15;
  // Define the tab content type
  const tabContent: Record<TabType, Location[]> = {
    Popular: [
      { title: "Mentone", description: "Cottage rentals" },
      { title: "Sedona", description: "Condo rentals" },
      { title: "Blue Mountains", description: "House rentals" },
      { title: "Townsend", description: "Vacation rentals" },
      { title: "Denver", description: "Cozy cabins" },
      { title: "Lake Tahoe", description: "Luxury homes" },
      { title: "Aspen", description: "Mountain resorts" },
      { title: "Breckenridge", description: "Chalets" },
      { title: "Gatlinburg", description: "Mountain escapes" },
      { title: "Pigeon Forge", description: "Cabins" },
      { title: "Big Bear Lake", description: "Lakeside stays" },
      { title: "Snowshoe", description: "Ski-in, Ski-out" },
      { title: "Park City", description: "Ski lodges" },
      { title: "Jackson Hole", description: "Wild west cabins" },
      { title: "Sun Valley", description: "Mountain condos" },
      { title: "Vail", description: "Luxury chalets" },
      { title: "Vail", description: "Luxury chalets" },
      { title: "Vail", description: "Luxury chalets" },
    ],
    Arts: [
      { title: "Phoenix", description: "Vacation rentals" },
      { title: "New Orleans", description: "Artistic stays" },
      { title: "Santa Fe", description: "Cultural homes" },
    ],
    Outdoors: [
      { title: "Banff", description: "House rentals" },
      { title: "Yellowstone", description: "Cabin rentals" },
      { title: "Yosemite", description: "Tent stays" },
    ],
    Mountains: [
      { title: "Mentone", description: "Cottage rentals" },
      { title: "Sedona", description: "Condo rentals" },
      { title: "Helen", description: "Cabin rentals" },
      { title: "Pine Mountain", description: "Vacation rentals" },
      { title: "Telluride", description: "Mountain escapes" },
      { title: "Mammoth Lakes", description: "Luxury homes" },
      { title: "Crested Butte", description: "Cabin rentals" },
    ],
  };

  // Show first 15 locations or all locations based on the showAll state
  const displayedLocations = showAll ? tabContent[activeTab] : tabContent[activeTab]?.slice(0, visibleLocationLimit);

  return (
    <footer className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Upper Section */}
        <h2 className="text-lg font-semibold mb-6">Inspiration for future getaways</h2>
        <FooterTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {displayedLocations?.map((location, index) => (
            <FooterColumn key={index} title={location.title} description={location.description} />
          ))}

          {/* Show 'See More'/'Show Less' button if there are more than 15 locations and not all are shown */}
          {tabContent[activeTab].length > visibleLocationLimit && !showAll && (
            <div className=" text-start">
              <button
                className="text-my-cocoa-400 font-bold py-2 px-4 hover:text-my-cocoa-600 hover:underline hover:underline-offset-1"
                onClick={() => setShowAll(true)}
              >
                <div className="flex gap-x-2">See More <SlArrowDown className="mt-1"/></div>
              </button>
            </div>
          )}
          {tabContent[activeTab].length > visibleLocationLimit && showAll && (
            <div className=" text-start">
              <button
                className="text-my-cocoa-400 font-bold py-2 px-4 hover:text-my-cocoa-600 hover:underline hover:underline-offset-1"
                onClick={() => setShowAll(false)}
              >
                <div className="flex gap-x-2">See Less <SlArrowUp className="mt-1"/></div>
              </button>
            </div>
          )}
        </div>

        

        {/* Lower Section */}
        <div className="mt-12 border-t pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterColumn
            title="Support"
            items={[
              "Help Center",
              "AirCover",
              "Anti-discrimination",
              "Disability support",
              "Cancellation options",
            ]}
          />
          <FooterColumn
            title="Hosting"
            items={[
              "Airbnb your home",
              "AirCover for Hosts",
              "Hosting resources",
              "Community forum",
            ]}
          />
          <FooterColumn
            title="Airbnb"
            items={["Newsroom", "New features", "Careers", "Investors", "Gift cards"]}
          />
          <FooterColumn title="Other" items={["Terms", "Privacy", "Sitemap"]} />
        </div>
        <div className="mt-12 border-t pt-8 ">
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
