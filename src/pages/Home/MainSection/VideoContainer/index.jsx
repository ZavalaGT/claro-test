import { Box, Grid } from "@mui/material";

const VideoContainer = () => {
    return (
        <Grid container justifyContent={'center'} my={3}>
            <Grid item xs={10} sm={8} md={6} lg={4}>
                <Box with={'100%'} minHeight={300} bgcolor='red'>

                </Box>
            </Grid>
        </Grid>
    )
}

export default VideoContainer;