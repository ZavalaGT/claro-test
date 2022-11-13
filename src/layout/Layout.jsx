import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <>
            <Header></Header>
            <main>
                    <Box minHeight={'92vh'} sx={{ marginTop:'48px'}}>
                        {
                            props.children
                        }
                    </Box>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout;