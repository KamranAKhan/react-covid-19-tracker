import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import PieChart from './PieChart';
import DoughnutChart from './DoughnutChart';

const useStyles = makeStyles((theme) => ({
    root: {
        
    },
    paper: {
        padding: theme.spacing(2),        
        color: theme.palette.text.secondary, 
        height:500               
    },
    marginTop30:{
        marginTop: 30
    }   
}));

function Graphs(props) {

    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.marginTop30}>
            <Grid item xs={12} sm={12} md={6}>
                <Paper className={`${classes.paper}`} elevation={3}>
                    <PieChart totalCases={props.totalCases} totalDeaths={props.totalDeaths} totalRecovered={props.totalRecovered} totalSeriousCases={props.totalSeriousCases}/>

                </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Paper className={`${classes.paper}`} elevation={3}>
                    <DoughnutChart totalCases={props.totalCases} totalDeaths={props.totalDeaths} totalRecovered={props.totalRecovered} totalSeriousCases={props.totalSeriousCases}/>
                </Paper>
            </Grid>
        </Grid>
    )

}


export default Graphs;