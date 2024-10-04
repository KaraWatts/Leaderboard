import { makeAutoObservable } from "mobx";
import { Challengers } from "../App";
import { ChartData } from "chart.js";
import { app } from "../firebase";
import { ref, get, update, getDatabase } from "firebase/database";


// Initialize Firebase

const db = getDatabase(app);

class ChallengerStore {

    challengers: Challengers[] = [];

    constructor() {
        makeAutoObservable(this);
    }
    
    
    // import challenger data
    async readChallengerData() {
        try {
            const challengersRef = ref(db, 'Challengers');
            const snapshot = await get(challengersRef);
            if (snapshot.exists()) {
                return snapshot.val();
            } else {
                console.log("No challenger data available");
                return [];
            }
        } catch (error) {
            console.error("Error reading challenger data:", error);
            return [];
        }
    }
    



    // initialize the challenger data
    async initializeChallengerData() {
        const challengerData = await this.readChallengerData();
        this.challengers = challengerData;
    }

    // get challenger data
    get ChallengerData(): Challengers[] {
        return this.challengers;
    }

    get chartData(): ChartData<"bar"> {
        return {
            labels: this.challengers.map((c) => c.name),
            datasets: [
                {
                    label: "Progress",
                    data: this.challengers.map((c) => c.progress),
                    backgroundColor: [
                        "rgba(75,192,192,1)",
                        "#f25572",
                        "#a56eff",
                        "#f3ba2f",
                        "#2a71d0",
                    ],
                    borderColor: "black",
                    borderWidth: 2,
                },
            ],
        };
    }
    
    // update challenger data
    async updateChallengerData(name: string, weight: number) {
        const challenger = this.challengers.find((c) => c.name === name);
        if (challenger){
            const lastProgress = challenger.progress;
            const newProgress = ((challenger.start - weight)/challenger.goal)*100
            challenger["progress"] = parseFloat(newProgress.toFixed(1));
            challenger["progressChange"] = parseFloat((challenger.progress - lastProgress).toFixed(1));
            challenger["last"] = weight;
            try {
                const challengerRef = ref(db, `Challengers/${challenger.id}`);
                await update(challengerRef, challenger)
                return newProgress > lastProgress;
            } catch (error) {
                console.error("Error updating challenger data:", error);
            }}
    }
    // validate challenger
    validateChallenger(name: string, secretKey: number) {
        const challenger: Challengers | undefined = this.challengers.find((c) => c.name === name);
        let roundedStart: number = 0;
        if (challenger){
            roundedStart = Math.floor(challenger.start);
            return roundedStart === secretKey;
        }
        alert('Challenger not found, please try again!');
}

}

const challengerStore = new ChallengerStore();
export default challengerStore;
