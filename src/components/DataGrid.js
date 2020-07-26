import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
    root: {

        margin: '0 auto 0 auto'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',        
        marginTop: 20,        
        color: '#ffffff'
    },
    bluePaper: {
        backgroundColor: '#799cff'
    },
    greenPaper: {
        backgroundColor: '#4dbb6f'
    },
    orangePaper: {
        backgroundColor: '#ec8b37'
    },
    redPaper: {
        backgroundColor: '#cc4646'
    },
    lightPurple:{
        backgroundColor: '#3f78a0'
    },
    golderBrown: {
        backgroundColor: '#a8ab18'
    },
    paperCountHeading: {
        fontSize: 40,
        fontWeight: 700,
        margin: 0,
        marginBottom: 6,
        paddingBottom: 5,
        borderRadius: 15,
        borderBottom: '3px dotted',
        color: '#ffffff'
    },
    paperTitleHeading: {
        fontSize: 20,
        margin: 0,
        textTransform: "uppercase",
        color: '#ffffff'
    },
    loading: {
        fontSize: 24
    }

}));

const useStylesTypography = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
        fontWeight: 'bold',
    },
});

function DataGrid(props) {

    const classes = useStyles();
    const classesTypography = useStylesTypography();

    console.log(props);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
                <Paper className={`${classes.paper} ${classes.bluePaper}`} elevation={3}>
                    <div className={classesTypography.root} style={{ color: 'blue' }}>
                        <Typography variant="h6" gutterBottom className={classes.paperCountHeading}>
                            {
                                (props.totalCases !== undefined)
                                    ? <CountUp delay={0} start={0} duration={2} end={props.totalCases} separator=',' />

                                    : <span className={classes.loading}>Loading...</span>
                            }
                        </Typography>

                    </div>
                    <div className={classesTypography.root} style={{ color: 'blue' }}>
                        <Typography variant="subtitle1" gutterBottom className={classes.paperTitleHeading}>
                            Total Cases
                        </Typography>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper className={`${classes.paper} ${classes.orangePaper}`} elevation={3}>
                    <div className={classesTypography.root} style={{ color: 'blue' }}>
                        <Typography variant="h6" gutterBottom className={classes.paperCountHeading}>
                            {
                                (props.totalDeaths !== undefined)
                                    ? <CountUp delay={0} start={0} duration={2} end={props.totalDeaths} separator=',' />

                                    : <span className={classes.loading}>Loading...</span>
                            }
                        </Typography>

                    </div>
                    <div className={classesTypography.root} style={{ color: 'blue' }}>
                        <Typography variant="subtitle1" gutterBottom className={classes.paperTitleHeading}>
                            Total Deaths
                        </Typography>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper className={`${classes.paper} ${classes.greenPaper}`} elevation={3}>
                    <div className={classesTypography.root} style={{ color: 'blue' }}>
                        <Typography variant="h6" gutterBottom className={classes.paperCountHeading}>
                            {
                                (props.totalRecovered !== undefined)
                                    ? <CountUp delay={0} start={0} duration={2} end={props.totalRecovered} separator=',' />

                                    : <span className={classes.loading}>Loading...</span>
                            }
                        </Typography>

                    </div>
                    <div className={classesTypography.root} style={{ color: 'blue' }}>
                        <Typography variant="subtitle1" gutterBottom className={classes.paperTitleHeading}>
                            Total Recovered
                        </Typography>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper className={`${classes.paper} ${classes.lightPurple}`} elevation={3}>
                    <div className={classesTypography.root} style={{ color: 'blue' }}>
                        <Typography variant="h6" gutterBottom className={classes.paperCountHeading}>
                            {
                                (props.totalNewCasesToday !== undefined)
                                    ? <CountUp delay={0} start={0} duration={2} end={props.totalNewCasesToday} separator=',' />

                                    : <span className={classes.loading}>Loading...</span>
                            }
                        </Typography>

                    </div>
                    <div className={classesTypography.root} style={{ color: 'blue' }}>
                        <Typography variant="subtitle1" gutterBottom className={classes.paperTitleHeading}>
                            New Cases Today
                        </Typography>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper className={`${classes.paper} ${classes.golderBrown}`} elevation={3}>
                    <div className={classesTypography.root} style={{ color: 'blue' }}>
                        <Typography variant="h6" gutterBottom className={classes.paperCountHeading}>
                            {
                                (props.totalDeathsToday !== undefined)
                                    ? <CountUp delay={0} start={0} duration={2} end={props.totalDeathsToday} separator=',' />

                                    : <span className={classes.loading}>Loading...</span>
                            }
                        </Typography>

                    </div>
                    <div className={classesTypography.root} style={{ color: 'blue' }}>
                        <Typography variant="subtitle1" gutterBottom className={classes.paperTitleHeading}>
                        New Deaths Today
                        </Typography>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper className={`${classes.paper} ${classes.redPaper}`} elevation={3}>
                    <div className={classesTypography.root} style={{ color: 'blue' }}>
                        <Typography variant="h6" gutterBottom className={classes.paperCountHeading}>
                            {
                                (props.totalSeriousCases !== undefined)
                                    ? <CountUp delay={0} start={0} duration={2} end={props.totalSeriousCases} separator=',' />

                                    : <span className={classes.loading}>Loading...</span>
                            }
                        </Typography>

                    </div>
                    <div className={classesTypography.root} style={{ color: 'blue' }}>
                        <Typography variant="subtitle1" gutterBottom className={classes.paperTitleHeading}>
                            Serious Cases
                        </Typography>
                    </div>
                </Paper>
            </Grid>
        </Grid>

    )
}


export default DataGrid;