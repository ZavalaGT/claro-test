import { Box } from "@mui/material";
import CounterDate from "./CounterDate";
import VideoContainer from "./VideoContainer";

const MainSection = () => {
    return (
        <>
        <Box minHeight={{xs:'75vh', sm:'70vh', md:'70vh', lg:'60vh'}} className="main-background">
            <Box width={'100%'}>
                <CounterDate />
                <VideoContainer />
            </Box>
        </Box>
        </>
    )
}

export default MainSection;