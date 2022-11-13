import { Box, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Bubbles from "./Bubbles";


const videoBubbleList = [
    {   imgSrc:'src/assets/img/team-latam.png', 
        title: 'TEAM LATAM', 
        description:'Los deportistas latinoamericanos que participan en Sochi 2014' },
    {   imgSrc:'src/assets/img/travel-meets-fashion.png', 
        title: 'TRAVEL MEETS FASHION',
        description:'Los deportistas latinoamericanos que participan en Sochi 2014'  },
    {   imgSrc:'src/assets/img/velocidad-riesgo.png', 
        title: 'VELOCIDAD RIESGO',
        description:'Los deportistas latinoamericanos que participan en Sochi 2014' }, 
    {   imgSrc:'src/assets/img/experiencia.png', 
        title: 'EXPERIENCIA',
        description:'Los deportistas latinoamericanos que participan en Sochi 2014'  },
];

const BubbleSection = ( ) => {

    return (
        <Container maxWidth={'md'}>
            <Box width={'100%'} my={3}>
                <Typography variant="h4" component={'h2'} textAlign={'center'}>
                    CLARO SPORTS EN SOCHI 2014
                </Typography>
            </Box>
            <Box my={3}>
                <Grid container spacing={2} justifyContent={'center'}>
                    {
                        videoBubbleList.map((videoBubble)=>
                            <Bubbles {...videoBubble} key={ videoBubble.imgSrc } />
                        )
                    }
                </Grid>
            </Box>
        </Container>
        
    )
}

export default BubbleSection;