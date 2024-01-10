import { Box, Button, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import NorthIcon from '@mui/icons-material/North';
import { BarChart } from "@mui/x-charts";
import { useEffect, useState } from "react";

interface SeriesEl {
    data: number[];
    stack: string;
    label: string;
    color: string;
}

const initialSeries = [
    { data: [1, 2, 3, 7, 11, 12, 16, 20, 24, 28], stack: 'A', label: 'Health', color: '#ed7d31' },
    { data: [2, 3, 4, 8, 12, 13, 17, 21, 25, 29], stack: 'A', label: 'Quality', color: '#a5a5a5' },
    { data: [3, 4, 5, 9, 13, 14, 18, 22, 26, 30], stack: 'A', label: 'Environmental', color: '#ffc000' },
    { data: [4, 5, 6, 10, 14, 15, 19, 23, 27, 31], stack: 'A', label: 'Safety', color: '#5b9bd5' }
];

const Metrics = () => {

    const [chartRange, setChartRange] = useState<string>('week');
    const [seriesData, setSeriesData] = useState<SeriesEl[]>(initialSeries);

    const changeRange = (range: string) => {
        setChartRange(range);
    }

    useEffect(() => {
        if (chartRange === "week") {
            setSeriesData(initialSeries);
        } else if (chartRange === "month") {
            setSeriesData([
                { data: [1, 2, 3, 7, 11, 12, 16, 20, 24, 28], stack: 'A', label: 'Health', color: '#ed7d31' },
                { data: [2, 3, 4, 8, 16, 13, 17, 21, 25, 29], stack: 'A', label: 'Quality', color: '#a5a5a5' },
                { data: [3, 4, 5, 9, 13, 14, 18, 22, 26, 30], stack: 'A', label: 'Environmental', color: '#ffc000' },
                { data: [4, 5, 6, 10, 14, 15, 17, 23, 27, 31], stack: 'A', label: 'Safety', color: '#5b9bd5' }
            ]);
        } else {
            setSeriesData([
                { data: [1, 2, 3, 7, 18, 12, 16, 20, 24, 28], stack: 'A', label: 'Health', color: '#ed7d31' },
                { data: [2, 3, 4, 8, 12, 13, 17, 21, 25, 29], stack: 'A', label: 'Quality', color: '#a5a5a5' },
                { data: [3, 4, 5, 9, 13, 14, 18, 22, 26, 30], stack: 'A', label: 'Environmental', color: '#ffc000' },
                { data: [4, 5, 6, 10, 14, 15, 19, 26, 27, 31], stack: 'A', label: 'Safety', color: '#5b9bd5' }
            ]);
        }
    }, [chartRange]);
    return (
        <Grid container sx={{ my: 'auto', px: { xs: 0.5, sm: 4 }, pb: '70px' }} pt={5}>
            <Grid item xs={12} textAlign={'center'} py={1}>
                <TextField
                    id="outlined-start-adornment"
                    sx={{ m: 0.5 }}
                    placeholder='Filter by Site'
                    fullWidth
                    onChange={e => { }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><TuneIcon /></InputAdornment>,
                    }}
                />
            </Grid>
            <Grid item xs={12} textAlign={'center'} py={1}>
                <Button variant={chartRange === "week" ? "contained" : "outlined"} onClick={() => changeRange('week')} size="small" sx={{ py:0, mr: 1 }}>This week</Button>
                <Button variant={chartRange === "month" ? "contained" : "outlined"} onClick={() => changeRange('month')} size="small" sx={{ py:0, mr: 1 }}>This month</Button>
                <Button variant={chartRange === "all" ? "contained" : "outlined"} onClick={() => changeRange('all')} size="small" sx={{ py:0 }}>All Time</Button>
            </Grid>
            <Grid item xs={12} textAlign={'center'} py={1}>
                <BarChart
                    series={seriesData}
                    slotProps={{
                        legend: {
                            direction: 'row',
                            position: { vertical: 'bottom', horizontal: 'middle' },
                            padding: 0,
                        }
                    }}
                    height={350}
                />
            </Grid>
            <Grid item xs={12} textAlign={'center'} py={1}>
                <Box sx={{
                    width: '100%',
                    py: 1.5,
                    px: 3,
                    bgcolor: 'success.main',
                    borderRadius: 12,
                    textAlign: 'left'
                }}>
                    <Typography variant="h6" component="span">ImproveITs</Typography>                    
                    <Typography variant="h6" component="span" sx={{float: 'right'}}><NorthIcon />&nbsp;8%</Typography>                    
                </Box>
            </Grid>
            <Grid item xs={12} textAlign={'center'} py={1}>
                <Box sx={{
                    width: '100%',
                    py: 1.5,
                    px: 3,
                    bgcolor: 'error.light',
                    borderRadius: 12,
                    textAlign: 'left'
                }}>
                    <Typography variant="h6" component="span">Loss Time Injury</Typography>                    
                    <Typography variant="h6" component="span" sx={{float: 'right'}}>2</Typography>                    
                </Box>
            </Grid>
            <Grid item xs={12} textAlign={'center'} py={1}>
                <Box sx={{
                    width: '100%',
                    py: 1.5,
                    px: 3,
                    bgcolor: 'success.main',
                    borderRadius: 12,
                    textAlign: 'left'
                }}>
                    <Typography variant="h6" component="span">NearMiss</Typography>                    
                    <Typography variant="h6" component="span" sx={{float: 'right'}}>0</Typography>                    
                </Box>
            </Grid>
        </Grid>
    )
}

export default Metrics