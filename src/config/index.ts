import { DistinctQuestion } from 'inquirer';
import { Players } from "types";

class Config { 

 playerNameQuestion(i: Players): DistinctQuestion {
    return {
      name: 'playerName',
      type: 'input',
      message: 'What is your name?',
      default: `Player ${i}`,
    };
  }}

  export const config = new Config();