import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaUsers } from "react-icons/fa6";
import { GrTask, GrTasks } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";
// import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

// const options = {
//   chart: {
//     width: 380,
//     type: "pie",
//   },
//   labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
//   responsive: [
//     {
//       breakpoint: 480,
//       options: {
//         chart: {
//           width: 200,
//         },
//         legend: {
//           position: "bottom",
//         },
//       },
//     },
//   ],
// };

// const series = [44, 55, 13, 43, 22];

const chartOptions = {
  series: [
    {
      name: "Series 1",
      data: [5, 10, 20, 40, 10, 50, 5],
    },
  ],
  options: {
    chart: {
      type: "area",
      height: "500px",
      width: "100px",
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
      ],
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
      tooltip: { enabled: false },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: true,
    },
  },
};

const Home = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  const [chartState] = useState(chartOptions);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
          <div className="flex items-end justify-between">
            <div>
              <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-white/[0.90]">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.3662 1.11216C20.6592 0.8193 21.134 0.819349 21.4269 1.11227C21.7198 1.4052 21.7197 1.88007 21.4268 2.17293L17.0308 6.56803C16.7379 6.8609 16.263 6.86085 15.9701 6.56792C15.6773 6.275 15.6773 5.80013 15.9702 5.50726L20.3662 1.11216ZM16.6592 2.696C16.952 2.40308 16.952 1.9282 16.659 1.63534C16.3661 1.34248 15.8913 1.34253 15.5984 1.63545L14.0987 3.13545C13.8058 3.42837 13.8059 3.90325 14.0988 4.19611C14.3917 4.48897 14.8666 4.48892 15.1595 4.196L16.6592 2.696ZM11.8343 3.45488C11.7079 3.19888 11.4472 3.0368 11.1617 3.0368C10.8762 3.0368 10.6155 3.19888 10.4892 3.45488L8.06431 8.36817L2.64217 9.15605C2.35966 9.19711 2.12495 9.39499 2.03673 9.6665C1.94851 9.93801 2.02208 10.2361 2.22651 10.4353L6.15001 14.2598L5.2238 19.66C5.17554 19.9414 5.29121 20.2258 5.52216 20.3936C5.75312 20.5614 6.05932 20.5835 6.31201 20.4506L11.1617 17.901L16.0114 20.4506C16.2641 20.5835 16.5703 20.5614 16.8013 20.3936C17.0322 20.2258 17.1479 19.9414 17.0996 19.66L16.1734 14.2598L20.0969 10.4353C20.3014 10.2361 20.3749 9.93801 20.2867 9.6665C20.1985 9.39499 19.9638 9.19711 19.6813 9.15605L14.2591 8.36817L11.8343 3.45488ZM9.23491 9.3856L11.1617 5.48147L13.0885 9.3856C13.1978 9.60696 13.4089 9.76039 13.6532 9.79588L17.9617 10.4219L14.8441 13.4609C14.6673 13.6332 14.5866 13.8814 14.6284 14.1247L15.3643 18.4158L11.5107 16.3898C11.2922 16.275 11.0312 16.275 10.8127 16.3898L6.9591 18.4158L7.69508 14.1247C7.7368 13.8814 7.65614 13.6332 7.47938 13.4609L4.36174 10.4219L8.67021 9.79588C8.91449 9.76039 9.12567 9.60696 9.23491 9.3856ZM21.6514 5.12825C21.9443 5.42111 21.9444 5.89598 21.6515 6.18891L20.1518 7.68891C19.8589 7.98183 19.3841 7.98188 19.0912 7.68901C18.7982 7.39615 18.7982 6.92128 19.091 6.62836L20.5907 5.12836C20.8836 4.83543 21.3585 4.83538 21.6514 5.12825Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <p className="text-gray-500 text-theme-sm dark:text-gray-400">
                Avg. Client Rating
              </p>
            </div>

            <div className="max-w-full">
              {/* <div className="h-12 w-24" style={{ minHeight: "59.6273px" }}> */}
              <div className="" style={{ minHeight: "59.6273px" }}>
                {/* <div id="chart" className="w-full h-full"> */}
                {/* <div className="w-24 h-12"> */}
                <ReactApexChart
                  options={chartState.options}
                  series={chartState.series}
                  type="area"
                  height="100px"
                  width="100px"
                />
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between mt-3">
            <div>
              <h4 className="font-bold text-gray-800 text-title-sm dark:text-white/90">
                7.8/10
              </h4>
            </div>
            <div className="flex items-center gap-1">
              <span className="flex items-center gap-1 rounded-full bg-success-50 px-2 py-0.5 text-theme-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500">
                +20%
              </span>
              <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                Vs last month
              </span>
            </div>
          </div>
        </div>

        {/* <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="flex items-end justify-between mt-3">
            <div>
              <p className="text-gray-500 text-theme-sm dark:text-gray-400">
                Unique Visitors
              </p>
            </div>

            <div className="max-w-full">
              <div id="">
                <div className="h-12 w-24" style={{ minHeight: "59.6273px" }}>
                  <div id="chart" className="w-full h-full">
                    <ReactApexChart
                      options={chartState.options}
                      series={chartState.series}
                      type="area"
                      height="100%"
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between mt-3">
            <div>
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white/90">
                24.7K
              </h4>
            </div>
            <div className="flex items-center gap-1">
              <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-sm bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500">
                <span className="text-xs"> +20%</span>
              </span>
              <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                Vs last month
              </span>
            </div>
          </div>
        </div> */}
      </div>

      {/* Stats start */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
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
      </div> */}
      {/* Stats end */}

      {/* Another one start */}
      {/* <div className="flex flex-wrap gap-4 my-8">
        <div className="bg-gray-100 rounded-2xl p-6 w-80 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-red-600 rounded-full p-3">
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

        <div className="bg-gray-100 rounded-2xl p-6 w-80 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gray-800 rounded-full p-3">
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
      </div> */}
      {/* Another one end */}

      {/* Chart start */}
      {/* <div className="flex ">
        <div id="chart">
          <Chart options={options} series={series} type="pie" width={380} />
        </div>
        <div id="chart">
          <Chart options={options} series={series} type="pie" width={380} />
        </div>
        <div id="chart">
          <Chart options={options} series={series} type="pie" width={380} />
        </div>
      </div> */}
      {/* <div id="html-dist"></div> */}
      {/* Chart end */}
    </div>
  );
};

export default Home;
