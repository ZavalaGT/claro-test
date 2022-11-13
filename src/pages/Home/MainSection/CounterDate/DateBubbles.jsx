import { Box, Typography } from "@mui/material"

const DateBubble = ( { name, value } ) => {

    
    return (
        <>
            <Box borderRadius={'50%'} border={'3px solid #FFF'} display={'flex'}
            justifyContent={'center'} alignContent='center' alignItems={'center'}
            sx={{aspectRatio:'1/1'}}
            >
                <Box width={'80%'}>
                    <Typography variant="body1" component={'p'} lineHeight='1'>
                        { value ?? "00" }
                    </Typography>
                    <Typography variant="body1" component={'p'} lineHeight='1'>
                        { name ?? "DÍAS" }
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default DateBubble;