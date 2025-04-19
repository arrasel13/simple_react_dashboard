import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import AddNewTask from "../../utils/modals/addNewTask";
import { MdFormatListBulletedAdd } from "react-icons/md";
import BreadCrumb from "../common/breadcrumb";
import { FiPlus, FiFilter, FiCalendar, FiUser } from "react-icons/fi";
import { BsChat } from "react-icons/bs";

const tabs = ["All Tasks", "To do", "In Progress", "Completed"];
const tasks = {
  todo: [
    {
      title: "Finish user onboarding",
      tag: "Marketing",
      due: "Tomorrow",
      comments: 1,
      user: "https://randomuser.me/api/portraits/men/75.jpg",
      checked: false,
    },
    {
      title: "Solve the Dribble prioritization issue with the team",
      tag: "Marketing",
      due: "Tomorrow",
      comments: 2,
      user: "https://randomuser.me/api/portraits/men/76.jpg",
      checked: false,
    },
  ],
  inProgress: [
    {
      title: "Work in Progress (WIP) Dashboard",
      tag: "Template",
      due: "Jan 8, 2027",
      comments: 2,
      user: "https://randomuser.me/api/portraits/men/78.jpg",
      checked: false,
    },
    {
      title: "Product Update – Q4 2024",
      due: "Jan 8, 2027",
      comments: 2,
      user: "https://randomuser.me/api/portraits/men/79.jpg",
    },
  ],
};

const TaskLists = () => {
  useEffect(() => {
    document.title = "All Task";
  }, []);

  const [activeTab, setActiveTab] = useState("All Tasks");

  return (
    <div>
      <BreadCrumb bTitle="Task List" bText="Task List" />

      <div className="pb-3 flex justify-between items-center">
        {/* <h2 className="text-2xl font-bold">All Tasks</h2> */}
        <button
          className="btn btn-soft btn-primary flex justify-center items-center"
          onClick={() => document.getElementById("add_new_task").showModal()}
        >
          <MdFormatListBulletedAdd className="text-lg" />
          Assign Task
        </button>

        <dialog id="add_new_task" className="modal">
          <AddNewTask />
        </dialog>
      </div>

      {/* name of each tab group should be unique */}
      {/* <div className="tabs tabs-box">
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
      </div> */}

      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Task List</h2>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 border rounded-md hover:bg-gray-100">
              <FiFilter />
              Filter & Sort
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
              <FiPlus />
              Add New Task
            </button>
          </div>
        </div>

        <div className="flex gap-3 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-full ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Todo</h3>
            <div className="space-y-3">
              {tasks.todo.map((task, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border"
                >
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4" />
                    <span
                      className={`text-sm font-medium ${
                        task.checked
                          ? "line-through text-gray-400"
                          : "text-gray-800"
                      }`}
                    >
                      {task.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                      {task.tag}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiCalendar /> {task.due}
                    </span>
                    <span className="flex items-center gap-1">
                      <BsChat /> {task.comments}
                    </span>
                    <img
                      src={task.user}
                      alt="User"
                      className="w-7 h-7 rounded-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 mb-2">In Progress</h3>
            <div className="space-y-3">
              {tasks.inProgress.map((task, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border"
                >
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4" />
                    <span
                      className={`text-sm font-medium ${
                        task.checked
                          ? "line-through text-gray-400"
                          : "text-gray-800"
                      }`}
                    >
                      {task.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    {task.tag && (
                      <span className="text-xs px-2 py-1 bg-purple-100 text-purple-600 rounded-full">
                        {task.tag}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <FiCalendar /> {task.due}
                    </span>
                    <span className="flex items-center gap-1">
                      <BsChat /> {task.comments}
                    </span>
                    <img
                      src={task.user}
                      alt="User"
                      className="w-7 h-7 rounded-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskLists;
