import { FC } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'
  import { playerScore } from "const";
  import { useRecoilValue } from "recoil";
  import { gameOverState, playerState } from "state";

const ScoreBoard: FC = () => {
    const player = useRecoilValue(playerState);
    const gameOver = useRecoilValue(gameOverState);

    if (gameOver === true){
        playerScore[player] = ++playerScore[player]
    }

    return(
        <div>
          <TableContainer>
            <Table variant='striped' colorScheme='teal'>
              <Thead>
                <Tr>
                  <Th>Player Name</Th>
                  <Th isNumeric >Score</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Player 1</Td>
                  <Td>{playerScore[1]/2}</Td>
                </Tr>
                <Tr>
                  <Td>Player 2</Td>
                  <Td>{playerScore[2]/2}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      )
}
export default ScoreBoard;