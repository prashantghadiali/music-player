'use client'
import { Grid, GridItem, Box, Collapse, Button, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';
import Sidebar from './Sidebar';
import MiddleContent from './MiddleContent'
import FooterContent from './FooterContent'
// import FallingRain from './FallingRain'
// import ThreeScene from './ThreeScene';

const MusicPlayer = () => {
  const [showList, setShowList] = useState(false);

  // Determine number of columns based on screen size
  const gridTemplateColumns = useBreakpointValue({
    base: '1fr',      // Mobile (base)
    sm: '1fr 3fr 1fr', // Small devices and up (>= 30em)
    md: '1fr 3fr',    // Medium devices and up (>= 48em)
    lg: '1fr 3fr 1fr' // Large devices and up (>= 62em)
  });

  // Determine number of rows based on screen size
  const gridTemplateRows = useBreakpointValue({
    base: 'auto 1fr auto', // Mobile (base)
    sm: 'auto 1fr auto',   // Small devices and up (>= 30em)
    md: '1fr auto',        // Medium devices and up (>= 48em)
    lg: '1fr auto 1fr'     // Large devices and up (>= 62em)
  });

  return (
    <Grid
      h='100vh'
      templateRows={gridTemplateRows}
      templateColumns={gridTemplateColumns}
      gap={4}
    >
      {/* Sidebar */}
      <GridItem colSpan={1}>
        <Sidebar />
      </GridItem>

      {/* Middle Content */}
      <GridItem colSpan={1}>
        {/* <FallingRain /> */}
        {/* <ThreeScene /> */}

        <MiddleContent />
      </GridItem>

      {/* Footer */}
      <GridItem colSpan={1} >
        <Box h='50px' >
        <FooterContent />
        </Box>
      </GridItem>

      {/* Collapsible List View */}
      {/* <GridItem colSpan={1}>
        <Collapse in={showList} animateOpacity>
          <Box p={4} mt={4} bg='gray.100' shadow='md'>
            <Box mb={2}>
              <Button size='sm' onClick={() => setShowList(false)}>
                Hide List
              </Button>
            </Box>
            <Box>Item 1</Box>
            <Box>Item 2</Box>
            <Box>Item 3</Box>
          </Box>
        </Collapse>
        {!showList && (
          <Box textAlign='center' mt={4}>
            <Button size='sm' onClick={() => setShowList(true)}>
              Show List
            </Button>
          </Box>
        )}
      </GridItem> */}
    </Grid>
  );
};

export default MusicPlayer;