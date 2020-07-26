import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function DoughnutChart(props) {

    const data = {
        labels: [
            'Total Cases',                                    
            'Total Deaths',
            'Total Recovered',
            'Serious Cases'
        ],
        datasets: [{
            data: [props.totalCases, props.totalDeaths, props.totalRecovered, props.totalSeriousCases],
            backgroundColor: [
                '#799cff',                
                '#ec8b37',
                '#4dbb6f',
                '#cc4646'
            ],
            hoverBackgroundColor: [
                '#799cff',
                '#4dbb6f',
                '#ec8b37',
                '#cc4646'
            ]
        }]
    };

    return (
        <div>
            <h2>Doughnut Visuals</h2>
            <Doughnut data={data} height={200} />
        </div>
    );

};

export default DoughnutChart;