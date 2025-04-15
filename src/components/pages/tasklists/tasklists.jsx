import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import AddNewTask from "../../utils/modals/addNewTask";
import { MdFormatListBulletedAdd } from "react-icons/md";

const TaskLists = () => {
  useEffect(() => {
    document.title = "All Task";
  }, []);

  return (
    <div>
      <div className=" mb-5 pb-3 flex justify-between items-center">
        <h2 className="text-2xl font-bold">All Tasks</h2>
        <button
          className="btn btn-soft btn-primary flex justify-center items-center"
          onClick={() => document.getElementById("add_new_task").showModal()}
        >
          <MdFormatListBulletedAdd className="text-lg" />
          Assign Task
        </button>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="add_new_task" className="modal">
          <AddNewTask />
        </dialog>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="All Task"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Tab 2"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 2
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Tab 3"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 3
        </div>
      </div>
    </div>
  );
};

export default TaskLists;
