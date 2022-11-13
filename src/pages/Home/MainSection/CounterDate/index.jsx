import { Box, Grid, Typography } from "@mui/material";
import DateBubble from "./DateBubbles";

const CounterDate = () => {
    return (
        <Box width={'100%'} my={3}>
            <Grid container justifyContent={'center'}>
                <Grid item xs={8} sm={6} md={4} lg={3} textAlign='center'>
                    <Typography variant="h4" component={"p"} fontWeight='bold'>
                        Faltan
                    </Typography>
                    <Grid container justifyContent={'center'} spacing={{xs:1 ,sm:2, md:2, lg:3}}>
                        <Grid item xs={3}>
                            <DateBubble name={'DIAS'} />
                        </Grid>
                        <Grid item xs={3}>
                            <DateBubble name={'HRS'} />
                        </Grid>
                        <Grid item xs={3}>
                            <DateBubble name={'MIN'} />
                        </Grid>
                        <Grid item xs={3}>
                            <DateBubble name={'SEG'} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
} 

export default CounterDate;