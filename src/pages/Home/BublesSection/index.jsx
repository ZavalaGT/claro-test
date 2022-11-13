import { Box, Container, Grid, Typography } from "@mui/material";


const videoBubbleList = [
    { imgSrc:'src/assets/img/team-latam.png', title: 'TEAM LATAM' },
    { imgSrc:'src/assets/img/travel-meets-fashion.png', title: 'TRAVEL MEETS FASHION' },
    { imgSrc:'src/assets/img/velocidad-riesgo.png', title: 'VELOCIDAD RIESGO' }, 
    { imgSrc:'src/assets/img/experiencia.png', title: 'EXPERIENCIA' },
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
                        videoBubbleList.map(({ imgSrc, title })=>
                        <Grid item xs={6} sm={3} md={3} key={imgSrc }>
                            <Box width={'80%'} display={'flex'} 
                                flexDirection={'column'} justifyContent={'center'} alignItems={'center'}
                                sx={{ cursor:'pointer' }}
                                >
                                <Box width={'100%'} 
                                    sx={{ 
                                        backgroundImage:`url('${imgSrc}')`, 
                                        backgroundPosition:'center',
                                        backgroundRepeat:'no-repeat',
                                        backgroundSize:'cover',
                                        aspectRatio:'1/1'}}>

                                </Box>
                                <Box>
                                    <Typography variant="caption" component={'p'} textAlign='center'>
                                        { title }
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        )
                    }
                </Grid>
            </Box>
        </Container>
        
    )
}

export default BubbleSection;