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
      <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <h2
            className="text-xl font-semibold text-gray-800 dark:text-white/90"
            x-text="pageName"
          >
            Task List
          </h2>
          <nav>
            <ol className="flex items-center gap-1.5">
              <li>
                <a
                  className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
                  href="/"
                  data-discover="true"
                >
                  Home
                  <svg
                    className="stroke-current"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"
                      stroke=""
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="text-sm text-gray-800 dark:text-white/90">
                Task List
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Breadcrumb start */}
      {/* <div className="bg-white px-6 py-3 border-b border-gray-200">
        <nav className="text-sm text-gray-500">
          <ol className="flex items-center space-x-2">
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Home
              </a>
            </li>
            <li>
              <span className="mx-1">/</span>
              <a href="#" className="text-blue-600 hover:underline">
                Tasks
              </a>
            </li>
            <li>
              <span className="mx-1">/</span>
              <span className="text-gray-700 font-medium">Task List</span>
            </li>
          </ol>
        </nav>
      </div> */}
      {/* Breadcrumb end */}

      {/* <div class="px-6 py-4 bg-white">
        <div className="flex space-x-4 border-b border-gray-200">
          <button className="pb-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
            All Tasks
          </button>
          <button className="pb-2 text-sm font-medium text-gray-500 hover:text-blue-600">
            To Do
          </button>
          <button className="pb-2 text-sm font-medium text-gray-500 hover:text-blue-600">
            In Progress
          </button>
          <button className="pb-2 text-sm font-medium text-gray-500 hover:text-blue-600">
            Completed
          </button>
        </div>

        <div className="mt-4 space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Finish user onboarding
                </h3>
                <p className="text-sm text-gray-500">
                  Marketing • Due: Tomorrow
                </p>
              </div>
              <span className="text-sm text-gray-500">
                Assigned to: John Doe
              </span>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className=" mb-5 pb-3 flex justify-between items-center">
        <h2 className="text-2xl font-bold">All Tasks</h2>
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
      </div> */}

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
    </div>
  );
};

export default TaskLists;
