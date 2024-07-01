import React from 'react'
import { SimpleGrid, Box, Image, Icon, ListItem, List, ListIcon } from '@chakra-ui/react'
import MusicPlayerIcon from '../Icons/MusicPlayerIcon';
import { IoHomeSharp } from "react-icons/io5";
import HomeIcon from '../Icons/HomeIcon'
import TrendsIcon from '../Icons/TrendsIcon'
import MusicIcon from '../Icons/MusicIcon'
import DiscoverIcon from '../Icons/DiscoverIcon'
import SettingsIcon from '../Icons/SettingsIcon'
import LogoutIcon from '../Icons/LogoutIcon'
import '../app/globals.css'

const Sidebar = () => {
    return (
        <div>
            <SimpleGrid columns={1} spacing={10}>
                <Box height='100px' marginLeft={50} marginTop={26}>
                    {/* <Icon as={MusicPlayerIcon} boxSize={8}  /> */}
                    <MusicPlayerIcon width={150} height={32} fill="#FF5656" />
                </Box>
                <Box height='430px' marginLeft={50}>
                    MENU
                    <List spacing={3} mt={2}>
                        <ListItem>
                            <ListIcon as={HomeIcon} w={6} h={6} />
                            Home
                        </ListItem>
                        <ListItem>
                            <ListIcon as={TrendsIcon} w={6} h={6} />
                            Trends
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MusicIcon} w={6} h={6} />
                            Library
                        </ListItem>
                        {/* You can also use custom icons from react-icons */}
                        <ListItem>
                            <ListIcon as={DiscoverIcon} w={6} h={6} />
                            Discover
                        </ListItem>
                    </List>
                </Box>
                <Box height='100px' marginLeft={50}>
                    GENERAL
                    <List spacing={3} mt={2}>
                        <ListItem>
                            <ListIcon as={SettingsIcon} w={6} h={6} />
                            Settings
                        </ListItem>
                        <ListItem>
                            <ListIcon as={LogoutIcon} w={6} h={6} />
                            Log Out
                        </ListItem>
                    </List>
                </Box>
            </SimpleGrid>
        </div>
    )
}

export default Sidebar
