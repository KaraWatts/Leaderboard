import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Container,Table } from "react-bootstrap";
import annotationPlugin from 'chartjs-plugin-annotation';
import ChartDataLabels from "chartjs-plugin-datalabels";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Quotes } from './components/quotes';

Chart.register(CategoryScale, annotationPlugin, ChartDataLabels);

function App() {

const Data = [
  {
    id: 1,
    year: "Dad (-9.6%)",
    goal: 30,
    start: 229.2,
    last: 229.0,
    progress: -9,
  },
  {
    id: 2,
    year: "Mom (+3.2%)",
    goal: 31,
    start: 211,
    last: 208,
    progress: 12.9,
  },
  {
    id: 3,
    year: "John (+5.2%)",
    goal: 50,
    start: 288.6,
    last: 290.4,
    progress: -3.6,
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
          "#f25572",
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
      <h2 style={{ textAlign: "center", paddingBottom: "1vh" }}>Challenge Leaderboard</h2>
      </header>
      <h3 style={{ textAlign: "center", color: "hotpink" }}>Week 6 - Time to pay up challengers - Mom is our 1st milestone winner!!!</h3>
      <div style={{position: "relative", width: "100%"}}>
      </div>
      <div style={{ minHeight: '300px' }}>
      <Bar
        data={chartData}
        height={300} 
        options={{
          maintainAspectRatio: false,
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
            size: 16 // Adjust y-axis label font size
          }
        },
      },
      x: {
        ticks: {
          font: {
            size: 16 // Adjust y-axis label font size
          }
        },
      },
    },
          plugins: {

            datalabels: {
           anchor: 'end', // Position labels at the end of bars
           align: 'left', // Align text to the left of the label
           color: 'white', // Label text color
           formatter: (val, context) => (`${val}%`), // displays as percentage
           font: {
          size: 16, // Set the desired font size here
        },
         },
            title: {
        display: true,
        color: 'white',
        font: {
          size: 24, // Set the desired font size here
        },
        text: 'Percentage Toward Goal',
      },
      subtitle: {
        display: true,
        text: 'First to each 10% milestone wins $ - first to 100% wins $$$',
        color: 'hotpink',
        font: {
          size: 20,
          family: 'tahoma',
          weight: 'normal',
          style: 'italic'
        },},
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
    </div>
        <div>
      <h4>
        Start: 22 June 2024 - End: 21 Nov 2024
      </h4>
      <h1 style={{ textAlign: 'center', color: "limegreen"}}>Milestone Winners</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th scope="col">Milestone</th>
              <th scope="col">Winner</th>
              <th scope="col">Date</th>
              <th scope="col">Prizes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10%</td>
              <td>Mom</td>
              <td>27 July 24</td>
              <td>$10 from John + 1 Favor from Dad</td>
            </tr>
          </tbody>
        </Table>
      {/* <Quotes /> */}
    </div>
    <div className='p-3'>
				<h2 style={{ textAlign: 'center', color: "limegreen"}}>10% Milestone Prizes</h2>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>$10 from every challenger NOT in your household + 1 favor from every challenger IN your household</td>
            </tr>
          </tbody>
        </Table>
				<h2 style={{ textAlign: 'center', color: "limegreen"}}>GRAND PRIZES</h2>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Dad</td>
              <td>iMac Mini</td>
            </tr>
            <tr>
              <td>Mom</td>
              <td>New Wardrobe Shopping Spree</td>
            </tr>
            <tr>
              <td>John</td>
              <td>PCC Rifle</td>
            </tr>
          </tbody>
        </Table>
			</div>
  {/* FAQ */}
  <Container className='p-3'>
				<h1 style={{ textAlign: 'center', color: "skyblue"}}>FAQs</h1>
        <h4 >How do I win?</h4>
				<p style={{ marginTop:"1rem"}}>First and foremost, this is a race! 1st challenger to reach a 10% milestone steals the reward from everyone else. The grand prizes are won by every challenger that reaches the end (Nov 21) at or below their goal weight!</p>
				<h4 >How often do I report my weight?</h4>
				<p style={{ marginTop:"1rem"}}>You will report your weight weekly every Sunday. Once all weights have been reported the leaderboard will be updated and you will receive a notification.</p>
			</Container>
      </Container>
    </div>
  );
}

export default App;
