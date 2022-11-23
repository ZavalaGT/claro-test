import { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setVideoPlayer } from "../../../actions/creators/videoplayerActionsCreator";

const Bubbles = ( props ) => {
    const { imgSrc, title, description, url } = props;

    const [ isHover, setHover ] = useState(false);

    const handleMouseIn = () => {
        setHover(true);
        setTimeout(() => {
            setHover(false);
        }, 500);
    }

    const handleMouseOut = () => {
        setHover(false);
    }
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setVideoPlayer(url));
    }


    return (
        <Grid item xs={6} sm={3} md={3} >
            <Box 
                onMouseEnter={ handleMouseIn }
                onMouseLeave= { handleMouseOut }
                onClick={ handleClick }
                width={'80%'} display={'flex'} 
                flexDirection={'column'} justifyContent={'center'} alignItems={'center'}
                sx={{ cursor:'pointer' }}>
                {
                    isHover ?
                    <>
                    <Box className={'vh-center'} borderRadius={'50%'}
                        bgcolor={'#e82100'} width={'100%'} 
                        sx={{aspectRatio:'1/1'}}>
                        <Typography p={{xs:4, sm:3, md:2}} variant="caption" component={'p'} textAlign='center'>
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