import { Button, Checkbox, FormControl, FormControlLabel, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { MuiFileInput } from 'mui-file-input';
import { useState } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

interface Data {
    site: string;
    area: string;
    type: string;
    description: string;
    picture: File | null;
    anonymous: boolean;
}

const Issue = () => {

    const [data, setData] = useState<Data>({
        site: '',
        area: '',
        type: '',
        description: '',
        picture: null,
        anonymous: false
    });

    const [submitted, setSubmitted] = useState<boolean>(false);

    const changeField = (val: string | File | null, field: string) => {
        setData({ ...data, [field]: val });
    }
    const changeAnon = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, anonymous: event.target.checked });
    }

    return (
        <>
            {submitted ? (
                <Grid container sx={{ my: 'auto' }} pt={5} px={4}>
                    <Grid item xs={12} textAlign={'center'} py={1}>
                        <Typography variant='h1' component={'p'}><CheckBoxIcon sx={{fontSize: '121px'}} /></Typography>
                    </Grid>
                    <Grid item xs={12} textAlign={'center'} py={1}>
                        <Typography variant='body1' component={'p'}>Your Entry was submitted</Typography>
                    </Grid>
                </Grid>
            ) : (
                <Grid container sx={{ my: 'auto', pb: '70px', px: { xs: 0.5, sm: 4 } }} pt={5}>
                    <Grid item xs={12} textAlign={'center'} py={1}>
                        <TextField
                            sx={{ m: 0.5 }}
                            value={data.site}
                            onChange={e => changeField(e.target.value, 'site')}
                            placeholder='Site'
                            type='text'
                            label='Site'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} textAlign={'center'} py={1}>
                        <TextField
                            sx={{ m: 0.5 }}
                            type='text'
                            value={data.area}
                            onChange={e => changeField(e.target.value, 'area')}
                            placeholder='Area'
                            label='Area'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} py={1}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Type of report</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={data.type}
                                onChange={e => changeField(e.target.value, 'type')}
                                label="Type of report"
                            >
                                <MenuItem value='option1'>option1</MenuItem>
                                <MenuItem value='option2'>option2</MenuItem>
                                <MenuItem value='option3'>option3</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} textAlign={'center'} py={1}>
                        <TextareaAutosize
                            rows={1}
                            placeholder='Description'
                            value={data.description}
                            onChange={e => changeField((e.target as HTMLTextAreaElement).value, 'description')}
                            style={{
                                width: '100%',
                                lineHeight: '1.5',
                                padding: '16.5px 12px',
                                border: '1px solid rgba(0, 0, 0, 0.23)',
                                borderRadius: '12px',
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: '1rem',
                                margin: '8px 0'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} textAlign={'center'} py={1}>
                        <MuiFileInput
                            value={data.picture}
                            onChange={e => changeField(e, 'picture')}
                            placeholder="Upload a picture"
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <FileUploadIcon />
                                    </InputAdornment>
                                )
                            }} />
                    </Grid>
                    <Grid item xs={12} textAlign={'center'} py={1} sx={{
                        backgroundColor: '#f0f0f0',
                        borderRadius: '12px',
                    }}>
                        <FormControlLabel control={<Checkbox checked={data.anonymous} onChange={changeAnon} />} label="Make it Anonymous" labelPlacement='start' />
                    </Grid>
                    <Grid item xs={12} textAlign={'center'} py={1}>
                        <Button onClick={() => setSubmitted(true)} variant="contained" sx={{ py: 1.5, width: '100%', maxWidth: 335 }}>Submit</Button>
                    </Grid>
                </Grid>
            )}
        </>
    )
}

export default Issue