import React from 'react';
import ReactApexChart from 'react-apexcharts';

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13, 43, 22], // Data for the pie chart
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'], // Labels for the chart
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200, // Resize the chart on smaller screens
              },
              legend: {
                position: 'bottom', // Move the legend below on small screens
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        {/* Chart container */}
        <div id="chart">
          <ReactApexChart
            options={this.state.options} // Chart options
            series={this.state.series}   // Data for the chart
            type="pie"                   // Pie chart type
            width={380}                   // Chart width
          />
        </div>
        {/* Optional: you can add additional HTML content */}
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ApexChart;
