import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DateBubble from "./DateBubbles";

const CounterDate = () => {

    const [ seconds, setSeconds ] = useState(10);
    const [ minutes, setMinutes ] = useState(3);
    const [ hours, setHours ] = useState(0);
    const [ days, setDays ] = useState(0);

    const [ isActive, setIsActive ] = useState(false);

    useEffect(()=>{
        const nowDate = new Date();
        const limitDate = new Date('Dec 1 2022');
        const date = (limitDate - nowDate)/1000;  // secods to limitDate
        const daysFormula = 60 * 60 * 24; // seconds, minutes, hours per day;
        const hoursFormula = 60 * 60; // seconds, minutes, hours per day;
        const minutesFormula = 60; // seconds, minutes, hours per day;

        const remainingDays = date / daysFormula; 
        const remainingHours = ( date % daysFormula ) / hoursFormula;
        const remainingMinutes = (( date % daysFormula ) % hoursFormula) / minutesFormula;
        const remainingSeconds = (( date % daysFormula ) % hoursFormula) % minutesFormula;

        setDays(parseInt(remainingDays));
        setHours(parseInt(remainingHours));
        setMinutes(parseInt(remainingMinutes));
        setSeconds(parseInt(remainingSeconds));
        setIsActive(true);
    },[]);

    useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
            let sec = seconds - 1;
            let min = minutes;
            let hr = hours;
            let day = days;
            if( sec < 0 ){
                min = min - 1;
                if( min < 0 ){
                    hr = hr - 1;
                    if(hr < 0){
                        day = day - 1;
                        if( day < 0){
                            day = 0;
                            hr = 0;
                            min = 0;
                            sec = 0;
                            clearInterval(interval);
                        }
                        else{
                            hr = 23;
                            min = 59;
                            sec = 59;
                        }
                    }
                    else{
                        min = 59;
                        sec = 59;
                    }
                }
                else{
                    sec = 59;
                }
            }
            setSeconds(sec);
            setMinutes(min);
            setHours(hr);
            setDays(day);
          }, 1000);
        } else if (!isActive && seconds !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, seconds]);



    return (
        <Box width={'100%'} my={3}>
            <Grid container justifyContent={'center'}>
                <Grid item xs={8} sm={6} md={4} lg={3} textAlign='center'>
                    <Typography variant="h4" component={"p"} fontWeight='bold'>
                        Faltan
                    </Typography>
                    <Grid container justifyContent={'center'} spacing={{xs:1 ,sm:2, md:2, lg:3}}>
                        <Grid item xs={3}>
                            <DateBubble name={'DÍAS'} value={ days } />
                        </Grid>
                        <Grid item xs={3}>
                            <DateBubble name={'HRS'} value={ hours } />
                        </Grid>
                        <Grid item xs={3}>
                            <DateBubble name={'MIN'} value={ minutes } />
                        </Grid>
                        <Grid item xs={3}>
                            <DateBubble name={'SEG'} value={ seconds } />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
} 

export default CounterDate;