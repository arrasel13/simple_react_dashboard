import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactApexChart from "react-apexcharts";
import { TiArrowBack } from "react-icons/ti";

const reportData = [
  {
    month: "January",
    shopifyRequest: 16,
    shopifyReceived: 4,
    orgReviews: 3,
    wpTickets: 237,
    storewareTickets: 0,
    xcloudTickets: 4,
    wpCrisp: 358,
    storewareCrisp: 91,
    magicBrowser: 27,
    xcloudCrisp: 8,
    wpOrg: 2,
    facebook: 0,
    closed: 34,
  },
  {
    month: "February",
    shopifyRequest: 33,
    shopifyReceived: 11,
    orgReviews: 17,
    wpTickets: 191,
    storewareTickets: 0,
    xcloudTickets: 1,
    wpCrisp: 388,
    storewareCrisp: 127,
    magicBrowser: 18,
    xcloudCrisp: 15,
    wpOrg: 14,
    facebook: 0,
    closed: 16,
  },
  {
    month: "March",
    shopifyRequest: 3,
    shopifyReceived: 2,
    orgReviews: 9,
    wpTickets: 161,
    storewareTickets: 0,
    xcloudTickets: 1,
    wpCrisp: 326,
    storewareCrisp: 92,
    magicBrowser: 0,
    xcloudCrisp: 8,
    wpOrg: 10,
    facebook: 3,
    closed: null,
  },
];

const chartOptions = {
  chart: {
    type: "area",
    height: "100%",
    toolbar: { show: false },
  },
  dataLabels: { enabled: true },
  stroke: { curve: "straight" },
  xaxis: {
    categories: reportData.map((item) => item.month),
    labels: { show: true },
    axisBorder: { show: true },
    axisTicks: { show: true },
  },
  yaxis: { show: true },
  grid: { show: false },
  tooltip: { enabled: true },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
};

const SupportReport = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  // Empty chart placeholder (preserves height)
  const loadingSeries = [
    {
      name: "Loading chart data...",
      data: [0], // Single point to keep chart active
    },
  ];

  const chartSeriesInfos = [
    {
      name: "Shopify Review Request",
      data: reportData.map((item) => item.shopifyRequest || 0),
    },
    {
      name: "Shopify Review Received",
      data: reportData.map((item) => item.shopifyReceived || 0),
    },
    {
      name: ".ORG Reviews",
      data: reportData.map((item) => item.orgReviews || 0),
    },
    {
      name: "WPDeveloper Tickets",
      data: reportData.map((item) => item.wpTickets || 0),
    },
    {
      name: "Storeware Tickets",
      data: reportData.map((item) => item.storewareTickets || 0),
    },
    {
      name: "xCloud Tickets",
      data: reportData.map((item) => item.xcloudTickets || 0),
    },
    {
      name: "WPDeveloper Crisp",
      data: reportData.map((item) => item.wpCrisp || 0),
    },
    {
      name: "Storeware Crisp",
      data: reportData.map((item) => item.storewareCrisp || 0),
    },
    {
      name: "Magic Browser Crisp",
      data: reportData.map((item) => item.magicBrowser || 0),
    },
    {
      name: "xCloud Crisp",
      data: reportData.map((item) => item.xcloudCrisp || 0),
    },
    {
      name: "WordPress.ORG",
      data: reportData.map((item) => item.wpOrg || 0),
    },
    {
      name: "Facebook",
      data: reportData.map((item) => item.facebook || 0),
    },
    {
      name: "Tickets Closed",
      data: reportData.map((item) => item.closed || 0),
    },
  ];

  const reviewsSeriesInfos = chartSeriesInfos.slice(0, 3);
  const ticketsChatsSeriesInfos = chartSeriesInfos.slice(3, 9);

  // const [chartSeries, setChartSeries] = useState(chartSeriesInfos);
  // const [reviewsSeries, setReviewsSeries] = useState(reviewsSeriesInfos);
  // const [ticketsChartSeries, setTicketsChartSeries] = useState(
  //   ticketsChatsSeriesInfos
  // );
  const [loadingMain, setLoadingMain] = useState(true);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [loadingTickets, setLoadingTickets] = useState(true);

  // const reviewsSeriesInfos = [
  //   {
  //     name: "Shopify Review Request",
  //     data: reportData.map((item) => item.shopifyRequest || 0),
  //   },
  //   {
  //     name: "Shopify Review Received",
  //     data: reportData.map((item) => item.shopifyReceived || 0),
  //   },
  //   {
  //     name: ".ORG Reviews",
  //     data: reportData.map((item) => item.orgReviews || 0),
  //   },
  // ];

  // const ticketsChatsSeriesInfos = [
  //   {
  //     name: "WPDeveloper Tickets",
  //     data: reportData.map((item) => item.wpTickets || 0),
  //   },
  //   {
  //     name: "Storeware Tickets",
  //     data: reportData.map((item) => item.storewareTickets || 0),
  //   },
  //   {
  //     name: "xCloud Tickets",
  //     data: reportData.map((item) => item.xcloudTickets || 0),
  //   },
  //   {
  //     name: "WPDeveloper Crisp",
  //     data: reportData.map((item) => item.wpCrisp || 0),
  //   },
  //   {
  //     name: "Storeware Crisp",
  //     data: reportData.map((item) => item.storewareCrisp || 0),
  //   },
  //   {
  //     name: "xCloud Crisp",
  //     data: reportData.map((item) => item.xcloudCrisp || 0),
  //   },
  // ];

  useEffect(() => {
    // if (!reportData || reportData.length === 0) return;

    setLoadingMain(true);
    setLoadingReviews(true);
    setLoadingTickets(true);

    // First: Load Reviews
    setTimeout(() => {
      // setReviewsSeries(reviewsSeriesInfos);
      setLoadingReviews(false);
    }, 2000);
    // const timerReviewChart = setTimeout(() => {
    //   setReviewsSeries(reviewsSeriesInfos);
    //   setLoadingReviews(false);
    // }, 300);

    // Second: Load Chats & Tickets
    setTimeout(() => {
      // setTicketsChartSeries(ticketsChatsSeriesInfos);
      setLoadingTickets(false);
    }, 2500);
    // const timerTicketsChart = setTimeout(() => {
    //   setTicketsChartSeries(ticketsChatsSeriesInfos);
    //   setLoadingTickets(false);
    // }, 500); // 300 + 200 delay

    // Third: Load All Matrix
    setTimeout(() => {
      // setChartSeries(chartSeriesInfos);
      setLoadingMain(false);
    }, 3000);
    // const timerMainChart = setTimeout(() => {
    //   setChartSeries(chartSeriesInfos);
    //   setLoadingMain(false);
    // }, 700); // 500 + 200 delay

    //   return () => {
    //     clearTimeout(timerReviewChart);
    //     clearTimeout(timerTicketsChart);
    //     clearTimeout(timerMainChart);
    //   };
  }, []);
  // console.log("loadingReviews", loadingReviews);

  return (
    <div>
      {/* <h2>Support Report</h2> */}

      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-lg font-medium">
            <Link to="/users">
              <TiArrowBack className="w-5 h-5 cursor-pointer" />
            </Link>
            <span>Report by User</span>
          </div>
          <div>
            <DatePicker
              selectsRange
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => setDateRange(update)}
              isClearable={true}
              placeholderText="Select date range"
              className="border px-3 py-2 rounded text-sm focus:outline-none w-60 text-center placeholder:text-center"
              dateFormat="dd/MM/yyyy"
              maxDate={new Date()} // ⛔ disables future dates
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-auto">
          <table className="min-w-full text-sm text-left border rounded">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Month</th>
                <th className="p-2 border">Shopify Review Request</th>
                <th className="p-2 border">Shopify Review Received</th>
                <th className="p-2 border">.ORG Reviews</th>
                <th className="p-2 border">WPDeveloper Tickets</th>
                <th className="p-2 border">Storeware Tickets</th>
                <th className="p-2 border">xCloud Tickets</th>
                <th className="p-2 border">WPDeveloper Crisp</th>
                <th className="p-2 border">Storeware Crisp</th>
                <th className="p-2 border">Magic Browser Crisp</th>
                <th className="p-2 border">xCloud Crisp</th>
                <th className="p-2 border">WordPress.ORG</th>
                <th className="p-2 border">Facebook</th>
                <th className="p-2 border">Tickets Closed</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((row, idx) => (
                <tr key={idx} className="even:bg-gray-50">
                  <td className="p-2 border">{row.month}</td>
                  <td className="p-2 border">{row.shopifyRequest}</td>
                  <td className="p-2 border">{row.shopifyReceived}</td>
                  <td className="p-2 border">{row.orgReviews}</td>
                  <td className="p-2 border">{row.wpTickets}</td>
                  <td className="p-2 border">{row.storewareTickets}</td>
                  <td className="p-2 border">{row.xcloudTickets}</td>
                  <td className="p-2 border">{row.wpCrisp}</td>
                  <td className="p-2 border">{row.storewareCrisp}</td>
                  <td className="p-2 border">{row.magicBrowser}</td>
                  <td className="p-2 border">{row.xcloudCrisp}</td>
                  <td className="p-2 border">{row.wpOrg}</td>
                  <td className="p-2 border">{row.facebook}</td>
                  <td className="p-2 border">{row.closed ?? "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Reviews and Chat/Tickets Charts */}
        <div className="grid grid-cols-2 gap-6">
          <div className="w-full h-64">
            <ReactApexChart
              options={{
                ...chartOptions,
                title: { text: "Reviews" },
              }}
              series={loadingReviews ? loadingSeries : reviewsSeriesInfos}
              type="area"
              height="100%"
            />
          </div>

          <div className="w-full h-64">
            <ReactApexChart
              options={{
                ...chartOptions,
                title: { text: "Chats & Tickets" },
              }}
              series={loadingTickets ? loadingSeries : ticketsChatsSeriesInfos}
              type="area"
              height="100%"
            />
          </div>
        </div>

        {/* Chart */}
        <div className="w-full h-64">
          <ReactApexChart
            options={{
              ...chartOptions,
              title: { text: "All Matrix" },
            }}
            series={loadingMain ? loadingSeries : ticketsChatsSeriesInfos}
            type="area"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default SupportReport;
