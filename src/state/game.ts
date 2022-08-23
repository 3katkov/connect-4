import { boardCols } from "const";
import { atom } from "recoil";
import { Board, Players } from "types";


function randomIntFromInterval(min : number, max : number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


export const playerState = atom<Players>({
  key: "playerState",
  default:  randomIntFromInterval(1,2)             // improvemwents - allow player to chose whos first, or chose at random

});

export const gameOverState = atom<boolean>({
  key: "gameOverState",
  default: false,
});


export const boardState = atom<Board>({
  key: "boardState",
  default: Array(boardCols).fill([])
});

