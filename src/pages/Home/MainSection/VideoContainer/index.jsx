import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";

const VideoContainer = () => {

    const { urlVideo } = useSelector(state=>state.video);

    console.log(urlVideo);
    return (
        <Grid container justifyContent={'center'} my={3}>
            <Grid item xs={10} sm={8} md={6} lg={4}>
                <Box with={'100%'}>
                    <iframe src={ `https://www.youtube.com/embed/${urlVideo}?rel=0&showinfo=0&autoplay=1` }  style={{ width:'100%', height:'300px' }}/>
                </Box>  
            </Grid>
        </Grid>
    )
}

export default VideoContainer;