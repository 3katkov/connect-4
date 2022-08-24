import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Input, Avatar } from '@chakra-ui/react'
import { FC, useState } from "react";


const PlayerSettings: FC = () => {
    const [value, setValue] = useState('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)
  
    const [value2, setValue2] = useState('')
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => setValue2(event.target.value)

      return (
        <div style={{float: 'left'}}>
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
    </div>
)
}
export default PlayerSettings;