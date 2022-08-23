import { boardRows, boardCols } from "const";
import { useRecoilState } from "recoil";
import { boardState, gameOverState, playerState } from "state";
import usePersistedState from "./usePersistedState"

const testWin = (arr: number[]): boolean => /1{4}|2{4}/.test(arr.join("")); // array of 4 ones or 4 twos, if they are next to eachother

const usePlayPiece = () => {
  const [board, setBoard] = useRecoilState(boardState);
  const [player, setPlayerTurn] = useRecoilState(playerState);
  const [gameState, setGameState] = usePersistedState('boardState', JSON.stringify(boardState));
  const [gameOver, setGameOver] = useRecoilState(gameOverState);
  
  return (col: number) => {

    // Prevent adding a piece when the game is over
    if (gameOver) {
      return;
    }

    // Prevent adding a piece when the column is full
    if (board[col].length === boardRows) {
      return;

    }

    // Play piece (non mutating)
    const newBoard = board.map((column, i) =>
      i === col ? [...column, player] : column
    );

    // Save state

    const row = newBoard[col].length - 1;
    
    function diagonal(array : any[], bottomToTop : boolean) {
      var temp;
      var returnArray = [];
      for (var k = 0; k <= 12; ++k) {
        temp = [];
        for (var y = boardRows - 1; y >= 0; --y) {
            var x = k - (bottomToTop ? boardRows - y : y);
            if (x >= 0 && x < boardCols) {
                temp.push(array[y][x]);
            }
        }
        if(temp.length > 0) {
            returnArray.push(temp.join(''));
        }
    }
    return returnArray;
}

    if (
      testWin(newBoard[col]) || // Did win vertically
      testWin(newBoard.map((col) => col[row]) || 0) || // Did win horizontally 
      diagonal(newBoard, true).some(rx => /1{4}|2{4}/.test(rx)) || 
      diagonal(newBoard, false).some(rx => /1{4}|2{4}/.test(rx))

    ) {
      setGameOver(true);

    } else {
    
      setPlayerTurn(player === 1 ? 2 : 1);
      setGameState(newBoard)
      console.log(gameState)
    }

    console.log("Start");
    setBoard(newBoard);

  };
};

export default usePlayPiece;
