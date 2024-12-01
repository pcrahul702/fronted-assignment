import React from "react";
import Chart from "react-apexcharts";
import DataCard from "../components/Card/Datacard";

const Dashboard = () => {
  const TaskProgressOptions = {
    labels: ["Completed", "Pending"],
    colors: ["#6c757d", "#dc3545"],
  };
  const TaskProgressSeries = [30, 45];

  const CompletionActivityOptions = {
    chart: { type: "area", height: 350 },
    dataLabels: { enabled: false },
    colors: ["#007bff", "#28a745"],
    xaxis: {
      categories: [
        "15/10",
        "20/10",
        "25/10",
        "30/10",
        "04/11",
        "09/11",
        "14/11",
      ],
    },
    legend: { position: "top" },
    stroke: { curve: "smooth" },
    fill: { opacity: 0.8 },
  };
  const CompletionActivitySeries = [
    { name: "Pending", data: [1, 3, 2, 5, 3, 4, 2] },
    { name: " completed", data: [0, 1, 1, 0, 1, 1, 0] },
  ];

  const OverViewData = [
    { id: 1, label: " Users", data: 10 },
    { id: 2, label: "Pending Task", data: 6 },
    { id: 3, label: "Complted Task", data: "20" },
    { id: 4, label: "Completion Rate", data: "70%" },
  ];

  return (
    <div className="flex gap-5 flex-col">
      <div className="grid grid-cols-1  gap-4">
        <DataCard title="Overview" data={OverViewData} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded shadow-md">
          <h3 className="text-lg font-semibold mb-5">Completetion Activity</h3>
          <Chart
            options={CompletionActivityOptions}
            series={CompletionActivitySeries}
            type="area"
            height={250}
          />
        </div>

        <div className="bg-white p-5 rounded shadow-md">
          <h3 className="text-lg font-semibold mb-5">Task's Progress Status</h3>
          <Chart
            options={TaskProgressOptions}
            series={TaskProgressSeries}
            type="pie"
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
