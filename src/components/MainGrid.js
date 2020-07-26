import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

import DataGrid from './DataGrid';
import Graphs from './Graphs';
import TableData from './TableData';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto 0 auto'
    },    
    formControl: {
        //margin: theme.spacing(1),
        minWidth: '100%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

    media: {
        height: 60,
    },
    center: {
        textAlign: 'center'
    },
    marginTop20: {
        marginTop: 20
    }

}));


function MainGrid() {

    const classes = useStyles();

    const [screenDataType, setScreenType] = useState(1);
    const [countryCode, setCountryCode] = useState(1);
    const [globalData, setGlobalData] = useState({});
    const [countriesData, setCountriesData] = useState([{}]);
    const [countriesFlag, setCountriesFlag] = useState([{}]);
    const [tableData, setTableData] = useState([{}]);

    useEffect(() => {
        async function getGlobalData() {    
            const response = await fetch('https://api.thevirustracker.com/free-api?global=stats');
            const data = await response.json();
            setGlobalData(data.results[0]);            
        }

        async function getAllCountriesData() {
            const response = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
            const data = await response.json();
            const countriesObj = data.countryitems[0];
            setCountriesData(countriesObj);
            let countriesArray = [];
            Object.keys(countriesObj).map((key, ind) => {
                return countriesArray.push(countriesObj[key]);
            })
            countriesArray = countriesArray.sort((a, b) => b.total_cases - a.total_cases).filter((x) => x.total_cases > 0);
            setTableData(countriesArray)
        }

        async function getAllCountryFlags() {
            const response = await fetch('https://restcountries.eu/rest/v2/all');
            const data = await response.json();
            setCountriesFlag(data);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps

        if (screenDataType === 1) {
            getGlobalData();
        }
        getAllCountriesData();
        getAllCountryFlags();


    }, [screenDataType])





    // function for handling change in data or type of data
    function handleScreenDataType(event) {
        setScreenType(event.target.value);
    }

    function handleCountryChange(event) {
        setCountryCode(event.target.value);        
    }
    
    let totalCases = 0;    
    let totalRecovered = 0;
    let totalDeaths = 0;
    let totalNewCasesToday = 0;
    let totalDeathsToday = 0;
    let totalSeriousCases = 0;
    let flagUrl = '';

    if (screenDataType === 1) {
        totalCases = globalData.total_cases;        
        totalDeaths = globalData.total_deaths;
        totalRecovered = globalData.total_recovered;
        totalSeriousCases = globalData.total_serious_cases;
        totalNewCasesToday = globalData.total_new_cases_today;
        totalDeathsToday = globalData.total_new_deaths_today;
        flagUrl = process.env.PUBLIC_URL + '/world_image2.gif';
    }
    else {
        totalCases = countriesData[countryCode]["total_cases"];        
        totalDeaths = countriesData[countryCode]["total_deaths"];
        totalRecovered = countriesData[countryCode]["total_recovered"];
        totalSeriousCases = countriesData[countryCode]["total_serious_cases"];
        totalNewCasesToday = countriesData[countryCode]["total_new_cases_today"];
        totalDeathsToday = countriesData[countryCode]["total_new_deaths_today"];
        let code = countriesData[countryCode]["code"];
        flagUrl = countriesFlag.filter((x) => x.alpha2Code === code)[0].flag;
    }


    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.marginTop20}>
                <Grid item xs={12} sm={6} md={4}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Select Data Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={screenDataType}
                            onChange={handleScreenDataType}>

                            <MenuItem value={1} key={0}>Global/World</MenuItem>
                            <MenuItem value={2} key={1}>County</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                {
                    screenDataType === 2
                        ? <Grid item xs={12} sm={6} md={4}>
                            {/* <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={countryCode}
                                    onChange={handleCountryChange}>
                                    {Object.keys(countriesData).map((key, ind) => {
                                        return (
                                            // <MenuItem value={'US'} key={ind}>{key}</MenuItem>                            
                                            <MenuItem value={key} key={ind}>{countriesData[key].title}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl> */}
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-native-simple">Select Country</InputLabel>
                                <Select
                                    native
                                    value={countryCode}
                                    onChange={handleCountryChange}
                                    inputProps={{
                                        name: 'age',
                                        id: 'age-native-simple',
                                    }}
                                >
                                    {/* <option aria-label="None" value="" /> */}
                                    {Object.keys(countriesData).map((key, ind) => {
                                        return (
                                            <option value={key} key={ind}>{countriesData[key].title}</option>
                                            // <MenuItem value={key} key={ind}>{countriesData[key].title}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                        : <></>
                }
                <Grid item xs={12} sm={12} md={1} className={classes.center}>
                    <img src={flagUrl} className={classes.media} alt={'flag'} />
                </Grid>


            </Grid>
            {/* {
                !isDataLoading
                ?   <DataGrid totalCases={totalCases} totalDeaths={totalDeaths} totalRecovered={totalRecovered} totalSeriousCases={totalSeriousCases} />
                :   <></>
            } */}

            <DataGrid totalCases={totalCases} totalDeaths={totalDeaths} totalRecovered={totalRecovered} totalNewCasesToday={totalNewCasesToday} totalDeathsToday={totalDeathsToday} totalSeriousCases={totalSeriousCases} />

            <Graphs totalCases={totalCases} totalDeaths={totalDeaths} totalRecovered={totalRecovered} totalNewCasesToday={totalNewCasesToday} totalDeathsToday={totalDeathsToday} totalSeriousCases={totalSeriousCases} />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TableData tableData={tableData} />
                </Grid>
            </Grid>
        </div>

    )
}


export default MainGrid;