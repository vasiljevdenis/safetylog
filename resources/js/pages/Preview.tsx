import { Box, Button, Grid, Typography } from '@mui/material';
import Carousel from '../components/Carousel';
import item1 from '../../images/item1.png';
import item2 from '../../images/item2.png';
import item3 from '../../images/item3.png';
import item4 from '../../images/item4.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Preview = () => {

    const textSlides = [
        <>Fortifying safety in <br /> the digital age</>,
        <>Digital Transformation for <br /> Your Safety Protocols</>,
        <>Harness the power of Technology <br /> For your Safety needs</>,
        <>Robust Analytics to take <br /> more informed decisions</>
    ];

    const [currentText, setText] = useState<number>(0);

    const sliderItems = [item1, item2, item3, item4];

    const navigator = useNavigate();

    return (
        <Grid container sx={{ my: 'auto', py: 1, px: 1 }}>
            <Grid item xs={12} pt={5} px={4} textAlign={'center'}>
                <Box sx={{ maxWidth: 600, mx: 'auto', textAlign: 'center', mb: 2 }}>
                    <Carousel items={sliderItems} setText={setText} />
                </Box>
                <Typography variant="h3" component={'h1'} fontWeight={800} gutterBottom>Site Guard</Typography>
                <Typography variant="h6" component={'p'} gutterBottom>{textSlides[currentText]}</Typography>                
                <Button onClick={() => navigator('/login')} variant="contained" sx={{py: 1.5, mt: 10, width: '100%', maxWidth: 335}}>Sign In</Button>
            </Grid>
        </Grid>
    )
}

export default Preview