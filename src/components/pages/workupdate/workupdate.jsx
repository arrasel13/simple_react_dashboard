import React, { useEffect } from "react";

const WorkUpdate = () => {
  useEffect(() => {
    document.title = "Work Update";
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Submit Work Update</h2>
    </div>
  );
};

export default WorkUpdate;
