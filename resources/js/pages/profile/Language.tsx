import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import appState from "../../store/appState";
import { Button, FormControl, FormControlLabel, Grid, InputAdornment, Radio, RadioGroup, TextField } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

const Language = observer(() => {

    const [store] = useState(appState);

    const navigator = useNavigate();

    const initialLanguages: string[] = [
        "English",
        "Polish",
        "Punjabi",
        "Romanian",
        "Hindi",
        "Arabic"
    ];

    const [languages, setLanguages] = useState<string[]>(initialLanguages);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        store.changeLang((event.target as HTMLInputElement).value);
    };

    const searchArray = (query: string) => {
        const newArr = initialLanguages.filter((element) => element.toLowerCase().includes(query.toLowerCase()));
        setLanguages(newArr);
    }

    useEffect(() => {
        store.toggleProfile(true);
        return () => store.toggleProfile(false);
    }, []);

    return (
        <Grid container pt={1} px={4}>
            <Grid item xs={12}>
                <Button onClick={() => navigator('/profile')} variant="text" sx={{
                    py: 5,
                    color: '#080a0b',
                    fontSize: '30px'
                }}><ArrowBackIcon sx={{ fontWeight: 700, fontSize: 30 }} />&nbsp;&nbsp;&nbsp;Profile</Button>
            </Grid>
            <Grid item xs={12} textAlign={'center'} py={1}>
                <TextField
                    id="outlined-start-adornment"
                    sx={{ m: 0 }}
                    placeholder='Search'
                    fullWidth
                    onChange={e => searchArray(e.target.value)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                    }}
                />
            </Grid>
            <Grid item xs={12} pt={2}>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="languages-label"
                        value={store.appLang}
                        name="language"
                        onChange={handleChange}
                    >
                        {languages.map(lang => (
                            <FormControlLabel value={lang} control={<Radio sx={{
                                "&.Mui-checked": {
                                    color: 'black'
                                }
                            }} />} label={lang} />
                        ))}
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Grid>
    )
})

export default Language