// // components/Footer.tsx

// import FooterColumn from "./FooterColumn";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 py-8">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Upper Section: Inspiration for Future Getaways */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           <FooterColumn
//             title="Popular"
//             items={[
//               "Canmore - Chalet rentals",
//               "Benalmádena - Beach house rentals",
//               "Marbella - Beachfront rentals",
//               "Ibiza - Vacation rentals",
//               // Add more destinations...
//             ]}
//           />
//           <FooterColumn
//             title="Arts & Culture"
//             items={[
//               "Phoenix - Rentals with pools",
//               "San Diego - Family-friendly rentals",
//               "Los Angeles - House rentals",
//               "Paris - House rentals",
//               // Add more destinations...
//             ]}
//           />
//           <FooterColumn
//             title="Outdoors"
//             items={[
//               "Lake Martin - Pet-friendly rentals",
//               "Banff - House rentals",
//               "Greer - Cabin rentals",
//               "Emerald Lake - Cabin rentals",
//               // Add more destinations...
//             ]}
//           />
//           <FooterColumn
//             title="Mountains"
//             items={[
//               "Mentone - Cottage rentals",
//               "Sedona - Condo rentals",
//               "Helen - Cabin rentals",
//               "Boone - Vacation rentals",
//               // Add more destinations...
//             ]}
//           />
//         </div>

//         {/* Lower Section: Support, Hosting, Airbnb */}
//         <div className="mt-12 border-t pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           <FooterColumn
//             title="Support"
//             items={[
//               "Help Center",
//               "AirCover",
//               "Anti-discrimination",
//               "Disability support",
//               "Cancellation options",
//             ]}
//           />
//           <FooterColumn
//             title="Hosting"
//             items={[
//               "Airbnb your home",
//               "AirCover for Hosts",
//               "Hosting resources",
//               "Community forum",
//             ]}
//           />
//           <FooterColumn
//             title="Twilight Lodge"
//             items={[
//               "About us",
//               "Careers",
//               "Investors",
//               "Gift cards",
//             ]}
//           />
//           <FooterColumn
//             title="Other"
//             items={[
//               "Terms",
//               "Privacy",
//               "Sitemap",
//             ]}
//           />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// components/Footer.tsx
"use client";
import { useState } from "react";
import {FooterColumn} from "./FooterColumn";
import FooterTabs from "./FooterTabs";
import FooterBottom from "./FooterBottom";

// Define a union type for the tabs
type TabType = "Popular" | "Arts" | "Outdoors" | "Mountains";

// Define the shape of each tab content
type Location = {
  title: string;
  description: string;
};

const Footer = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Mountains");

  // Define the tab content type
  const tabContent: Record<TabType, Location[]> = {
    Popular: [
      { title: "Mentone", description: "Cottage rentals" },
      { title: "Sedona", description: "Condo rentals" },
      { title: "Blue Mountains", description: "House rentals" },
      { title: "Townsend", description: "Vacation rentals" },
    ],
    Arts: [
      { title: "Phoenix", description: "Vacation rentals" },
      { title: "New Orleans", description: "Artistic stays" },
    ],
    Outdoors: [
      { title: "Banff", description: "House rentals" },
      { title: "Yellowstone", description: "Cabin rentals" },
    ],
    Mountains: [
      { title: "Mentone", description: "Cottage rentals" },
      { title: "Sedona", description: "Condo rentals" },
      { title: "Helen", description: "Cabin rentals" },
      { title: "Pine Mountain", description: "Vacation rentals" },
    ],
  };

  return (
    <footer className="bg-zinc-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Upper Section */}
        <h2 className="text-lg font-semibold mb-6">Inspiration for future getaways</h2>
        <FooterTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {tabContent[activeTab]?.map((location, index) => (
            <FooterColumn key={index} title={location.title} description={location.description} />
          ))}
        </div>

        {/* Lower Section */}
        <div className="mt-12 border-t pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterColumn title="Support" items={["Help Center", "AirCover", "Anti-discrimination", "Disability support", "Cancellation options"]} />
          <FooterColumn title="Hosting" items={["Airbnb your home", "AirCover for Hosts", "Hosting resources", "Community forum"]} />
          <FooterColumn title="Airbnb" items={["Newsroom", "New features", "Careers", "Investors", "Gift cards"]} />
          <FooterColumn title="Other" items={["Terms", "Privacy", "Sitemap"]} />
        </div>
        <FooterBottom/>
      </div>
    </footer>
  );
};

export default Footer;
