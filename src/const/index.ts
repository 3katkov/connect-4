import { Players } from "types";

export const boardCols = 7;
export const boardRows = 6;


export const playerColor: Record<Players, string> = { // set player colour 
  0: "",
  1: "#f10000",
  2: "#ece100",
  3: ""
};


export const playerName: Record<Players, string> = { // set player name 
  0: "Empty",
  1: "Player1",
  2: "Player2",
  3:  "Bot"
};


export const playerScore: Record<Players, number> = { 
  0: 0,
  1: 0,
  2: 0,
  3: 0
};