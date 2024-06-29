import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Container } from "react-bootstrap";
import annotationPlugin from 'chartjs-plugin-annotation';
import ChartDataLabels from "chartjs-plugin-datalabels";
// import { Quotes } from './components/quotes';

Chart.register(CategoryScale, annotationPlugin, ChartDataLabels);

function App() {

const Data = [
  {
    id: 1,
    year: "Dad",
    goal: 30,
    start: 229.2,
    last: 227.6,
    progress: 5.3,
  },
  {
    id: 2,
    year: "Mom",
    goal: 50,
    start: 229.2,
    last: 227.6,
    progress: 0,
  },
  {
    id: 3,
    year: "John",
    goal: 50,
    start: 288.6,
    last: 292.6,
    progress: -8,
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
      <Container className="body">
      <div className="chart-container">
      <header className='p-3'>
      <h2 style={{ textAlign: "center", paddingBottom: "5vh" }}>Challenge Leaderboard</h2>
      </header>
      <h3 style={{ textAlign: "center", color: "hotpink" }}>Week 1 - Good Luck Challengers!</h3>
      <div style={{position: "relative", width: "100%"}}>
      <iframe src="https://giphy.com/embed/d8PjnRdlAP52F1CImb" width="480" height="269" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/amazonvideouk-hungergames-thehungergames-maytheodds-d8PjnRdlAP52F1CImb">via GIPHY</a></p>
      </div>
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
            datalabels: {
           anchor: 'end', // Position labels at the end of bars
           align: 'left', // Align text to the left of the label
           color: 'black', // Label text color
         },
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
        Start: 22 June 2024 - End: 22 Nov 2024
      </h4>
      {/* <Quotes /> */}
    </div>
  {/* FAQ */}
  <Container className='p-3'>
				<h1 style={{ textAlign: 'center', color: "skyblue"}}>FAQs</h1>
				<h4 >How often do I report my weight?</h4>
				<p style={{ marginTop:"1rem"}}>You will report your weight weekly every Sunday. Once all weights have been reported the leaderboard will be updated and you will receive a notification.</p>
			</Container>
      </Container>
    </div>
  );
}

export default App;
