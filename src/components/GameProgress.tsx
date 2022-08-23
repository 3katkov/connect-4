import { Heading } from "@chakra-ui/react";
import { playerName } from "const";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { gameOverState, playerState } from "state";

const GameProgress: FC = () => {
  const player = useRecoilValue(playerState);
  const gameOver = useRecoilValue(gameOverState);
  const name = playerName[player];


  return (
    <form>

    <Heading as="h3" size="lg">
      {gameOver ? `${name} wins!` : `${name}'s turn`}
    </Heading>

    <Heading as="h3" size="lg">

    </Heading>


</form>
  );
};

export default GameProgress;
