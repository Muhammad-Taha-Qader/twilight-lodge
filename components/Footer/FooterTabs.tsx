// components/FooterTabs.tsx

// components/FooterTabs.tsx

type TabType = "Popular" | "Arts" | "Outdoors" | "Mountains";

interface FooterTabsProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void; // Ensure TabType is used here
}

const FooterTabs = ({ activeTab, setActiveTab }: FooterTabsProps) => {
  const tabs: TabType[] = ["Popular", "Arts", "Outdoors", "Mountains"];

  return (
    <div className="flex space-x-4 border-b mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`py-2 px-4 ${
            activeTab === tab ? "border-b-4 border-my-cocoa-700 text-my-cocoa-700 font-bold" : ""
          }`}
          onClick={() => setActiveTab(tab)} // Pass TabType to setActiveTab
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FooterTabs;
