import React from 'react';
import { Polar } from 'react-chartjs-2';

function PolarChart(props) {

    const data = {
        datasets: [{
            data: [
                props.totalCases,
                props.totalDeaths,
                props.totalRecovered,                
                props.totalSeriousCases
            ],
            backgroundColor: [
                '#799cff',
                '#ec8b37',
                '#4dbb6f',                
                '#cc4646'
            ],
            label: 'My dataset' // for legend
        }],
        labels: [
            'Total Cases',
            'Total Deaths',
            'Total Recovered',            
            'Serious Cases'
        ]
    };

    return (
        <div>
            <h2>Polar visuals</h2>
            <Polar data={data} height={200} />
        </div>
    );
};

export default PolarChart;