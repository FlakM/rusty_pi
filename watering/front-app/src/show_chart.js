
export function load_dashboard(data) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var timeFormat = 'YYYY-MM-DD HH:mm:ss';

    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            datasets: [{
                label: 'sensor1',
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                borderColor: 'rgb(255, 0, 0)',
                data: data.sensor1_soil_humidity,
                type: 'line',
                pointRadius: 0,
                fill: false,
                lineTension: 0,
                borderWidth: 2
            },
            {
                label: 'sensor1 watering',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                borderColor: 'rgb(255, 0, 0)',
                data: data.sensor1_watering,
                type: 'bubble',
            },
            {
                label: 'sensor2',
                backgroundColor: 'rgba(0, 0, 255, 0.2)',
                borderColor: 'rgb(0, 0, 255)',
                data: data.sensor2_soil_humidity,
                type: 'line',
                pointRadius: 0,
                fill: false,
                lineTension: 0,
                borderWidth: 2
            },
            {
                label: 'sensor2 watering',
                backgroundColor: 'rgba(0, 0, 255, 0.5)',
                borderColor: 'rgb(0, 0, 255)',
                data: data.sensor2_watering,
                type: 'bubble',
            }]
        },

        // Configuration options go here
        options: {
            animation: {
                duration: 0
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    distribution: 'series',
                    time: {
                        parser: timeFormat,
                        //     round: 'minute',
                        tooltipFormat: 'YYYY-MM-DD ll HH:mm',
                        displayFormats: {
                            'millisecond': 'MMM DD HH:mm',
                            'second': 'MMM DD HH:mm',
                            'minute': 'MMM DD HH:mm',
                            'hour': 'MMM DD HH:mm',
                            'day': 'MMM DD HH:mm',
                            'week': 'MMM DD HH:mm',
                            'month': 'MMM DD HH:mm',
                            'quarter': 'MMM DD HH:mm',
                            'year': 'MMM DD HH:mm',
                         },

                    },
                    offset: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Date'
                    },
                    ticks: {
                        major: {
                            enabled: true,
                            fontStyle: 'bold'
                        },
                        source: 'data',
                        autoSkip: true,
                        autoSkipPadding: 75,
                        maxRotation: 0,
                        sampleSize: 100
                    }
                }],
                yAxes: [{
                    gridLines: {
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Soil Humidity  (%)'
                    }
                }]
            }
        }
    });
    return "";
}