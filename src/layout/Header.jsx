import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";
import { Container } from "@mui/system";

const Header = (props) => {
    return (
        <AppBar position="fixed" sx={{borderBottom:'3px solid #e82100'}}>
            <Toolbar variant="dense">
                <Container maxWidth='md'>
                    <Box display={'flex'} justifyContent='space-between'>
                        <Box flex={'0 0'}>
                            <img src={'src/assets/img/logo-sochi.png'} alt={'logo-sochi'} className={'logo'} />
                        </Box>
                        <Box flex={'0 0'}>
                            <img src={'src/assets/img/logo-claro-sports.png'} alt={'logo-claro-sports'} className={'logo'} />
                        </Box>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default Header;