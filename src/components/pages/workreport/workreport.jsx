import React, { useEffect } from "react";

const WorkReport = () => {
  useEffect(() => {
    document.title = "Work Report";
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Work Report</h2>
    </div>
  );
};

export default WorkReport;
