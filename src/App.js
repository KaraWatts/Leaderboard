import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(CategoryScale, annotationPlugin);

function App() {

const Data = [
  {
    id: 1,
    year: "Brian",
    goal: 30,
    progress: 1
  },
  {
    id: 2,
    year: "Tobie",
    goal: 50,
    progress: 1
  },
  {
    id: 3,
    year: "John",
    goal: 50,
    progress: 1
  }
]

  const chartData = {
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Progress",
        data: Data.map((data) => data.progress),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  }

  const milestones = []

  for (let i = 10; i <= 100 ; i+=10){
      milestones.push({
        type: 'line',
        scaleID: 'x',
        value: i,
        borderColor: 'limegreen',
        borderWidth: 2,
       })
  }


  return (
    <div className="App">
      <header className="App-header">
      <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Challenge Leaderboard</h2>
      <Bar
        data={chartData}
        options={{
          indexAxis: 'y',
          elements: {
            bar: {
              borderWidth: 2,
            }
          },
          scales: {
      y: {
        max: 100,
        ticks: {
          font: {
            size: 20 // Adjust y-axis label font size
          }
        },
      },
      x: {
        ticks: {
          font: {
            size: 20 // Adjust y-axis label font size
          }
        },
      },
    },
          plugins: {
            title: {
              display: false
            },
            legend: {
              display: false
            },
            annotation: {
           annotations: milestones,
        },
          }
        }}
      />
    </div>
        <div>
      <h4>
        Start: 22 June 24
        </h4>

        <h4>
        End: 22 Nov 24
      </h4>
    </div>
      </header>
  
    </div>
  );
}

export default App;
