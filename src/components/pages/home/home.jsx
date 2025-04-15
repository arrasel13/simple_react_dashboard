import React, { useEffect } from "react";
import { Link } from "react-router";
import { FaUsers } from "react-icons/fa6";
import { GrTask, GrTasks } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";
import Chart from "react-apexcharts";

const options = {
  chart: {
    width: 380,
    type: "pie",
  },
  labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

const series = [44, 55, 13, 43, 22];

const Home = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <div>
      {/* <h2>Home Page</h2> */}

      {/* Stats start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Card-1 */}
        <div className="flex items-center justify-between w-72 px-6 py-4 border border-[#4F46E5] rounded-xl shadow-sm bg-[#4F46E5]">
          <div className="space-y-2">
            <p className="text-white text-sm">Total User</p>
            <h2 className="text-4xl font-bold text-white">25.6K</h2>
            <Link
              to="/users"
              className="mt-3 px-4 py-1 text-white bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow text-sm"
            >
              View Users
            </Link>
          </div>
          <div>
            <FaUsers className="text-5xl text-white" />
          </div>
        </div>

        {/* Card-2 */}
        <div className="flex items-center justify-between w-72 px-6 py-4 border border-gray-300 rounded-xl shadow-sm bg-[#10B981]">
          <div className="space-y-2">
            <p className="text-slate-900 text-sm">Total Tasks</p>
            <h2 className="text-4xl font-bold text-slate-900">25.6K</h2>
            <Link
              to="/tasks"
              className="mt-3 px-4 py-1 text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow text-sm"
            >
              View Task
            </Link>
          </div>
          <div>
            <FaTasks className="text-5xl text-slate-900" />
          </div>
        </div>

        {/* Card-3 */}
        <div className="flex items-center justify-between w-72 px-6 py-4 border border-gray-300 rounded-xl shadow-sm bg-[#38BDF8]">
          <div className="space-y-2">
            <p className="text-gray-800 text-sm">Completed Tasks</p>
            <h2 className="text-4xl font-bold text-gray-800">25.6K</h2>
            <Link
              to="/tasks"
              className="mt-3 px-4 py-1 text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow text-sm"
            >
              View Task
            </Link>
          </div>
          <div>
            <GrTask className="text-5xl text-gray-800" />
          </div>
        </div>

        {/* Card-4 */}
        <div className="flex items-center justify-between w-72 px-6 py-4 border border-gray-300 rounded-xl shadow-sm bg-[#F59E0B]">
          <div className="space-y-2">
            <p className="text-blue-900 text-sm">In Progress Tasks</p>
            <h2 className="text-4xl font-bold text-blue-900">25.6K</h2>
            <Link
              to="/tasks"
              className="mt-3 px-4 py-1 text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow text-sm"
            >
              View Task
            </Link>
          </div>
          <div>
            <GrTasks className="text-5xl text-blue-900" />
          </div>
        </div>
      </div>
      {/* Stats end */}

      {/* Another one start */}
      <div className="flex flex-wrap gap-4">
        {/* Stock Card */}
        <div className="bg-gray-100 rounded-2xl p-6 w-80 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-red-600 rounded-full p-3">
                {/* Tesla logo or placeholder icon */}
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C11.5 3 9 6 6 7c3 0 4.5 1.5 6 3 1.5-1.5 3-3 6-3-3-1-5.5-4-6-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">TSLA</h2>
                <p className="text-sm text-gray-500">Tesla, Inc</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-900">$192.53</p>
              <p className="text-sm text-green-600 font-medium flex items-center gap-1">
                <span className="text-green-600">▲</span> 1.01%
              </p>
            </div>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="flex gap-3">
            <button className="w-1/2 py-2 border border-gray-300 rounded-xl text-gray-800 font-semibold hover:bg-gray-200">
              Short Stock
            </button>
            <button className="w-1/2 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl">
              Buy Stock
            </button>
          </div>
        </div>

        {/* Duplicate for Apple */}
        <div className="bg-gray-100 rounded-2xl p-6 w-80 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gray-800 rounded-full p-3">
                {/* Apple logo */}
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 13c0 4-2.5 7-5 7s-3.5-2-5-2-3 2-5 2c-1.5 0-4-2-4-6 0-2.5 1.5-4 3-5-.5-1.5 0-4 3-4 1.5 0 2 .5 3 1 1-1.5 2.5-2 4-2 3 0 4 3 3 5 .5 1 .5 2 .5 4z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">AAPL</h2>
                <p className="text-sm text-gray-500">Apple, Inc</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-900">$192.53</p>
              <p className="text-sm text-green-600 font-medium flex items-center gap-1">
                <span className="text-green-600">▲</span> 3.59%
              </p>
            </div>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="flex gap-3">
            <button className="w-1/2 py-2 border border-gray-300 rounded-xl text-gray-800 font-semibold hover:bg-gray-200">
              Short Stock
            </button>
            <button className="w-1/2 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl">
              Buy Stock
            </button>
          </div>
        </div>
      </div>
      {/* Another one end */}

      {/* Chart start */}
      <div id="chart">
        <Chart options={options} series={series} type="pie" width={380} />
      </div>
      {/* <div id="html-dist"></div> */}
      {/* Chart end */}
    </div>
  );
};

export default Home;
