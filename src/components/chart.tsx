// Import Chart.js and its components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  SubTitle,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register the Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  SubTitle,
  annotationPlugin,
  ChartDataLabels
);

import { observer } from "mobx-react-lite";
import chartStore from "../stores/ChartStore";
import { useEffect } from "react";
import challengerStore from "../stores/ChallengerStore";




export const LeaderboardChart: React.FC = observer(
  () => {
    // Initialize the chart data dna milstones on component mount
    useEffect(() => {
      challengerStore.initializeChallengerData();
      chartStore.initializeMilestones();
    },[]);

    if (challengerStore.challengers.length === 0) {
      return <h1>Loading...</h1>;
    }
    console.log(JSON.stringify(challengerStore.ChallengerData));
    console.log(JSON.stringify(challengerStore.chartData));
    return (
      <>
        <Bar
          data={challengerStore.chartData}
          height={400}
          options={{
            maintainAspectRatio: false,
            indexAxis: "y",
            elements: {
              bar: {
                borderWidth: 2,
              },
            },
            scales: {
              y: {
                max: 100,
                ticks: {
                    color: "white",
                  font: {
                    size: 19, // Adjust y-axis label font size
                  },
                },
              },
              x: {
                max: 100,
                ticks: {
                  callback: function (value) {
                    return value + "%";
                  },
                  color: "white",
                  font: {
                    size: 16, // Adjust y-axis label font size
                  },
                },
              },
            },
            plugins: {
              datalabels: {
                anchor: "end", // Position labels at the end of bars
                align: "right", // Align text to the left of the label
                color: (context) => {
                  const dataIndex = context.dataIndex;
                  const value = challengerStore.ChallengerData[dataIndex].progressChange;
                  return value >= 0 ? "#6fdc8c" : "#f9343e"; // Conditional color based on value
                },
                formatter: (val, context) => {
                  const dataIndex = context.dataIndex; // Get the index of the current bar
                  const progressChange = challengerStore.ChallengerData[dataIndex].progressChange; // Assuming `start` holds the initial value
                  // Determine the arrow and color based on the change
                  const arrow = progressChange > 0 ? "↑" : "↓";
                  const formattedChange = `${arrow} (${progressChange}%)`;

                  // Return the formatted label: "Current Value + Change"
                  return `${val}% ${formattedChange}`;
                },
                font: {
                  size: 16, // Set the desired font size here
                },
              },
              title: {
                display: true,
                color: "white",
                font: {
                  size: 24, // Set the desired font size here
                },
                text: "Percentage Toward Goal",
              },
              subtitle: {
                display: true,
                text: "Start: 22 June 2024 - End: 21 Nov 2024",
                color: "#bae6ff",
                font: {
                  size: 20,
                  family: "tahoma",
                  weight: "normal",
                  style: "italic",
                },
              },
              legend: {
                display: false,
              },
              annotation: {
                annotations: chartStore.milestones,
              },
            },
          }}
        />
      </>
    );
  }
);
