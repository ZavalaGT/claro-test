import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Header = (props) => {
    return (
        <AppBar position="fixed">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="claro-icon" sx={{ mr: 2 }}>
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                Claro shop
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;