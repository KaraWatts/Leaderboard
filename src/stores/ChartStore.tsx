import { makeAutoObservable } from "mobx";
import { ChartData } from "chart.js";
import {AnnotationOptions} from "chartjs-plugin-annotation";

import axios from "axios";

class ChartStore {
  chartData: ChartData<"bar"> = {
    labels: [],
    datasets: [],
  };

  milestones: AnnotationOptions[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async readMilestoneHistory() {
    const url =
      "https://raw.githubusercontent.com/KaraWatts/Leaderboard/main/src/test.json";

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }


  async initializeMilestones() {
    const milestonesHistory = await this.readMilestoneHistory();
    console.log(milestonesHistory)
    this.milestones = [];
    for (const milestoneKey in milestonesHistory) {
      let color = "rgba(73, 90, 100, 0.6)"
      const milestoneData = milestonesHistory[milestoneKey];
      if (milestoneData["winner"] !== null){
        color = milestoneData["color"]
      }
      this.milestones.push({
        type: "line",
        scaleID: "x",
        value: milestoneData["milestone"],
        borderColor: color,
        borderWidth: 2,
      });
    }
  }
}

const chartStore = new ChartStore();
export default chartStore;
