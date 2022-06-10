import { useState } from 'react';
import { Box, Button, CircularProgress, Tabs, Tab } from '@mui/material';
import { TabPanel, TabContext } from '@mui/lab';

export const MaterialSample = () => {
    const [selectedTab, setSelectedTab] = useState('0');
    return (
        <>
            <h2>ボタン</h2>
            <Box margin={10}>
                <Button variant="contained">ボタン</Button>
            </Box>
            <h2>Loading icon</h2>
            <Box margin={10}>
                <CircularProgress color="secondary" size="8rem" />
                <CircularProgress color="primary" size="8rem" />
            </Box>
            <h2>Tab</h2>
            <TabContext value={selectedTab} >
                <Box sx={{ borderBottom: 1, borderColor:'divider'}}>
                    <Tabs value={selectedTab} onChange={(event, newValue) => { setSelectedTab(newValue)}} aria-label="basic tabs example">
                        <Tab label="English" value="0" />
                        <Tab label="Math" value="1" />
                        <Tab label="Japanese" value="2" />
                    </Tabs>
                </Box>
                <TabPanel value="0">
                    Recommendations for English
                </TabPanel>
                <TabPanel value="1">
                    Recommendations for Math
                </TabPanel>
                <TabPanel value="">
                    Recommendations for English
                </TabPanel>
            </TabContext>

        </>
    )
}