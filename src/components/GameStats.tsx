
import { playerScore } from "const";
import { FC, useState } from "react";
import { useRecoilValue } from "recoil";
import { gameOverState, playerState } from "state";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Input, Text } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'

const GameStats: FC = () => {
  const player = useRecoilValue(playerState);
  const gameOver = useRecoilValue(gameOverState);

  if (gameOver === true){
    playerScore[player] = ++playerScore[player]
  }

  const [value, setValue] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)

  const [value2, setValue2] = useState('')
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => setValue2(event.target.value)

  return (
    <div>
    <h1 >
      <Tabs variant='enclosed'>
      <TabList>
        <Tab>Player 1</Tab>
        <Tab>Player 2</Tab>
      </TabList>
  <TabPanels>
    <TabPanel>
        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        <Text mb='8px'> Player 1</Text>
        
        <Input
          value={value} 
          onChange={handleChange}
          placeholder='Enter Players Name'
          size='sm'
        />
    </TabPanel>
    <TabPanel>
    <Text mb='8px'> Player 2: {value2}</Text>
    <Input
          value={value2} 
          onChange={handleChange2}
          placeholder='Enter Players Name'
          size='sm'
        />
    </TabPanel>
  </TabPanels>
</Tabs>

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
</h1>
    
</div>
  );
};


export default GameStats;
