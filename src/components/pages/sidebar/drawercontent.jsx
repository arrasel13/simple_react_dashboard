import React from "react";

const DrawerContent = () => {
  return (
    <>
      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <h2 className="text-2xl font-bold mx-3 py-4 mb-3 border-b border-gray-300">
          Notices
        </h2>
        {/* Sidebar content here */}
        <li>
          <a>Sidebar Item 1</a>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </ul>
    </>
  );
};

export default DrawerContent;
