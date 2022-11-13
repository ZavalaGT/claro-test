import { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Bubbles = ( props ) => {
    const [ isHover, setHover ] = useState(false);

    const handleMouseIn = () => {
        console.log('Mouse In');
        setHover(true);
    }

    const handleMouseOut = () => {
        console.log('Mouseout')
        setHover(false);
    }

    const { imgSrc, title, description } = props;

    return (
        <Grid item xs={6} sm={3} md={3} >
            <Box 
                onMouseEnter={ handleMouseIn }
                onMouseLeave= { handleMouseOut }
                width={'80%'} display={'flex'} 
                flexDirection={'column'} justifyContent={'center'} alignItems={'center'}
                sx={{ cursor:'pointer' }}>
                {
                    isHover ?
                    <>
                    <Box className={'vh-center'} borderRadius={'50%'}
                        bgcolor={'red'} width={'100%'} 
                        sx={{aspectRatio:'1/1'}}>
                        <Typography p={2} variant="caption" component={'p'} textAlign='center'>
                            { description }
                        </Typography>
                    </Box>
                    </>
                    :
                    <>
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
                    </>
                }
            </Box>
        </Grid>
    )
}

export default Bubbles;