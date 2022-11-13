import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <footer className={"footer"}>
            <Container maxWidth={'md'}>
                <Grid my={2} container justifyContent={'center'}>
                    <Grid item xs={11} md={4} className={'vh-center'} sx={{justifyContent:{xs:'center', md:'left'}}}>
                        <Typography variant={"caption"} component={'p'}>
                            Aviso de privacidad / Contacto
                        </Typography>
                    </Grid>
                    <Grid item xs={11} md={4} className={'vh-center'}>
                        <img src={'src/assets/img/logo-sochi.png'} alt={'logo-sochi'} className={'logo'} />
                    </Grid>
                    <Grid item xs={11} md={4} className={'vh-center'}>
                        <Grid container justifyContent={'center'} spacing={{sx:1, md:1}}>
                            <Grid item xs={2} md={2} className={'vh-center'}>
                                <Box className={'icon-logo mobil vh-center'}>
                                    <img src={'src/assets/img/mobli-icon.png'} alt={'logo-sochi'} sx={{width:'24px', height:'24px'}} />
                                </Box>
                            </Grid>
                            <Grid item xs={2} md={2} className={'vh-center'}>
                                <Box className={'icon-logo twitter vh-center'}>
                                    <TwitterIcon  />
                                </Box>
                            </Grid>
                            <Grid item xs={2} md={2} className={'vh-center'}>
                                <Box className={'icon-logo facebook vh-center'}>
                                    <FacebookIcon  />
                                </Box>
                            </Grid>
                            <Grid item xs={2} md={2} className={'vh-center'}>
                                <Box className={'icon-logo youtube vh-center'}>
                                    <YouTubeIcon  />
                                </Box>                           
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer;