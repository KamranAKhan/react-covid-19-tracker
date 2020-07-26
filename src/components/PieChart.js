import React from 'react';
import { Pie } from 'react-chartjs-2';

function PieChart(props) {

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
                '#ec8b37',
                '#4dbb6f',
                '#cc4646'
            ]
        }]
    };

    return (
        <div>
            <h2>Pie Visuals</h2>
            <Pie data={data} height={200} />
        </div>
    );
};

export default PieChart