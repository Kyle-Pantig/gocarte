"use client";
const Tabs = ({ tabs, active, onChange }) => {
  return (
    <div className="flex items-center gap-8 mb-2">
      {tabs.map((tabName, index) => (
        <span
          key={index}
          onClick={() => {
            onChange(tabName);
          }}
          className={`text-sm cursor-pointer ${
            active === tabName ? " text-black active " : " text-gray-500  "
          }`}
        >
          {tabName}
        </span>
      ))}
    </div>
  );
};

export default Tabs;
