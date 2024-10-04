// import { useState } from "react";
import "./App.css";
import { LeaderboardChart } from "./components/chart";
import { Container, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import  ReportForm  from "./components/report-form";


export interface Challengers {
  id: number;
  name: string;
  goal: number;
  start: number;
  last: number;
  progress: number;
  progressChange: number;
  color: string;
}


function App() {







  return (
    <div className="App">
      <Container className="body">
        <div className="chart-container">
          <header className="p-3">
            <h1 style={{ textAlign: "center", paddingBottom: "1vh" }}>
              Challenge Leaderboard
            </h1>
            <hr />
            <h2 style={{ textAlign: "center" }}>Week 8</h2>
          </header>
          <h3 style={{ textAlign: "center", color: "#ff7eb6" }}>
            Welcome Back names!{" "}
          </h3>
          <div style={{ position: "relative", width: "100%" }}>
            <hr />
          </div>
          <div style={{ minHeight: "300px" }}>
            <LeaderboardChart />
          </div>
        </div>
        <div>
          <ReportForm />
          <hr />
          <h1 style={{ textAlign: "center", color: "skyblue" }}>
            Milestone Winners
          </h1>
          {/* <LeaderTable /> */}
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
                <td>$10 from John + patience while yarn shopping from Dad</td>
              </tr>
            </tbody>
          </Table>
          {/* <Quotes /> */}
        </div>
        <div className="p-3">
          <h2 style={{ textAlign: "center", color: "skyblue" }}>
            10% Milestone Prizes
          </h2>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>
                  $10 from every name NOT in your household + 1 favor from
                  every name IN your household
                </td>
              </tr>
            </tbody>
          </Table>
          <h2 style={{ textAlign: "center", color: "skyblue" }}>
            GRAND PRIZES
          </h2>
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
        <Container className="p-3">
          <hr />
          <h1 style={{ textAlign: "center", color: "skyblue" }}>FAQs</h1>
          <h4>How do I win?</h4>
          <p style={{ marginTop: "1rem" }}>
            First and foremost, this is a race! 1st name to reach a 10%
            milestone steals the reward from everyone else. The grand prizes are
            won by every name that reaches the end (Nov 21) at or below
            their goal weight!!
          </p>
          <h4>How often do I report my weight?</h4>
          <p style={{ marginTop: "1rem" }}>
            You will report your weight weekly every Sunday. Once all weights
            have been reported the leaderboard will be updated and you will
            receive a notification.
          </p>
        </Container>
      </Container>
    </div>
  );
}

export default App;
