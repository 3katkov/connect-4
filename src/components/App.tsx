import { ChakraProvider, Container, VStack } from "@chakra-ui/react";
import Board from "components/Board";
import GameControls from "components/GameControls";
import GameProgress from "components/GameProgress";
import { FC } from "react";
import { RecoilRoot } from "recoil";
import ScoreBoard from "./ScoreBoard"
import PlayerSettings from "./PlayerSettings"

const App: FC = () => (
  
  <ChakraProvider>
    <RecoilRoot>
    <div className="rowC">
      <div style={{float: 'left'}}><ScoreBoard/></div>
      <div style={{float: 'right'}}><PlayerSettings/></div>
      </div>
      <Container py={4} as={VStack}>
        <Board /> 
        <GameProgress />
        <GameControls />
      </Container>
    </RecoilRoot>
  </ChakraProvider>
);

export default App;
