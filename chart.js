Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    },
    chart: {
        backgroundColor: '#FFF',
    },

    legend: {
        itemStyle: {
            color: '#000'
        },
        itemHiddenStyle: {
            color: '#777'
        },
        itemHoverStyle: {
            color: '#777'
        }
    },

    title: {
        style: {
            color: '#22292F',
            fill: '#22292F',
            fontWeight: 'bold'
        }
    },

    subtitle: {
        style: {
            color: '#8795A1',
            fill: '#8795A1',
            fontWeight: 'bold'
        }
    },

    credits: {
        enabled: false
    }
});

var categories = ['0-4', '5-9', '10-14', '15-19',
    '20-24', '25-29', '30-34', '35-39', '40-44',
    '45-49', '50-54', '55-59', '60-64', '65-69',
    '70-74', '75-79', '80-84', '85 + '
];


$(document).ready(function () {
    Highcharts.chart('chart01', {
        chart: {
            type: 'bar',
        },
        title: {
            text: 'Población total de Puerto Rico 1899 - 2016 por grupos de edad',

        },
        subtitle: {
            text: 'Fuente: census.gov',

        },
        xAxis: [{
            categories: categories,
            reversed: false,
            labels: {
                style: {
                    color: '#606F7B',
                    step: 1
                }
            }
        }, { // Mirror axis in the right side
            opposite: true,
            reversed: false,
            categories: categories,
            linkedTo: 0,
            labels: {
                style: {
                    color: '#606F7B',
                    step: 1
                }
            }
        }],
        yAxis: {
            title: {
                text: null
            },
            labels: {
                style: {
                    color: '#606F7B'
                },
                formatter: function () {
                    return Math.abs(this.value / 10000) + '%';
                }
            }
        },

        plotOptions: {
            // Spacing between data bars
            series: {
                stacking: 'normal',

            }
        },

        tooltip: {
            backgroundColor: '#FFF',
            // This controls the hovering box when mouse is over data
            formatter: () => `<b>${this.series.name}, Age ${this.point.category}</b><br/>Population: ${Highcharts.numberFormat(Math.abs(this.point.y), 0)}`
        },

        motion: {
            // Enables the motion aspect of the graph
            enabled: true,
            labels: [1899, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
            series: [0, 1],
            updateInterval: 30,
            loop: true,
        },

        series: [{
            name: 'Total',
            color: '#FFD13F',
            borderColor: '#FFD13F',
            data: [{
                sequence: [150403, 185189, 200255, 226468, 280440, 366422, 318106, 318106, 340652, 302173, 295406, 224756, 213462, 205278, 197173, 185901, 174875, 161514]
            }, {
                sequence: [143546, 151223, 195131, 224022, 251652, 318127, 338254, 338254, 330331, 316473, 305162, 240004, 228909, 222321, 216236, 208914, 200412, 188163]
            }, {
                sequence: [124353, 143751, 168054, 199337, 227097, 270727, 354560, 337008, 338291, 339573, 305800, 268571, 259845, 249769, 239184, 229144, 217747, 206604]
            }, {
                sequence: [93148, 113789, 126248, 186150, 206149, 220231, 291326, 291326, 337134, 326717, 313436, 284259, 274958, 267879, 260120, 249966, 242568, 234298]
            }, {
                sequence: [88475, 108508, 128531, 149336, 206326, 192930, 234876, 233876, 272430, 287227, 301191, 260850, 264094, 263539, 262420, 257500, 248792, 240621]
            }, {
                sequence: [84265, 94213, 96053, 99780, 148008, 157992, 182638, 182638, 236136, 270562, 271507, 244159, 233990, 227123, 224022, 222722, 224671, 225720]
            }, {
                sequence: [64317, 70422, 78005, 94709, 102596, 131737, 156652, 156652, 229762, 254287, 262825, 248173, 243564, 237053, 229793, 220629, 208957, 198834]
            }, {
                sequence: [47556, 64288, 77089, 92356, 101138, 133109, 145123, 145123, 194284, 236509, 264849, 241270, 234603, 230729, 228480, 224179, 221215, 215572]
            }, {
                sequence: [44246, 52344, 61450, 72548, 86032, 91237, 148847, 128847, 165652, 225970, 250814, 242258, 237766, 234295, 230649, 225797, 219817, 213188]
            }, {
                sequence: [26397, 37163, 50273, 55944, 69002, 75745, 121966, 65689, 145020, 193984, 233120, 247986, 245773, 242319, 236912, 230070, 224760, 219701]
            }, {
                sequence: [32871, 33351, 41624, 47219, 56991, 71237, 105571, 105571, 129786, 161874, 229916, 239821, 238220, 236117, 236012, 235096, 232541, 228911]
            }, {
                sequence: [15330, 18793, 21586, 26018, 34444, 46525, 96455, 96453, 119538, 140952, 188883, 223607, 224719, 225588, 225524, 224570, 223946, 222473]
            }, {
                sequence: [18386, 19133, 24387, 30400, 35387, 49106, 81584, 81584, 104935, 124852, 160564, 218077, 215590, 211637, 208784, 207811, 206919, 209821]
            }, {
                sequence: [6679, 9823, 10962, 14106, 25328, 32963, 66383, 66383, 94544, 112718, 134281, 175411, 184523, 190952, 195617, 197813, 199104, 199167]
            }, {
                sequence: [6246, 7406, 9156, 11722, 16577, 21624, 43409, 43409, 65480, 86679, 106670, 136251, 139946, 144141, 148941, 153056, 157583, 165601]
            }, {
                sequence: [6918, 8562, 10708, 13576, 21201, 21611, 67885, 28366, 45381, 67822, 83078, 100740, 104019, 106795, 109753, 113118, 115961, 119272]
            }, {
                sequence: [107, 54, 297, 222, 947, 5768, 0, 20000, 24245, 41000, 53402, 67000, 69339, 71040, 72738, 75054, 78393, 81594]
            }, {
                sequence: [0, 0, 0, 0, 0, 0, 0, 18919, 22919, 32665, 47706, 62596, 65416, 67912, 70721, 73548, 75921, 80253]
            }]

        }],
    });
});

var categories1539 = ['15-19',
    '20-24', '25-29', '30-34', '35-39'
];
$(document).ready(function () {
    Highcharts.chart('chart05', {
        chart: {
            type: 'bar',
        },
        title: {
            text: 'Población total de Puerto Rico 1899 - 2016 edades 15-39',

        },
        subtitle: {
            text: 'Fuente: census.gov',

        },
        xAxis: [{
            categories: categories1539,
            reversed: false,
            labels: {
                style: {
                    color: '#606F7B',
                    step: 1
                }
            }
        }, { // Mirror axis in the right side
            opposite: true,
            reversed: false,
            categories: categories1539,
            linkedTo: 0,
            labels: {
                style: {
                    color: '#606F7B',
                    step: 1
                }
            }
        }],
        yAxis: {
            title: {
                text: null
            },
            labels: {
                style: {
                    color: '#606F7B'
                },
                formatter: function () {
                    return Math.abs(this.value / 10000) + '%';
                }
            }
        },

        plotOptions: {
            // Spacing between data bars
            series: {
                stacking: 'normal',

            }
        },

        tooltip: {
            backgroundColor: '#FFF',
            // This controls the hovering box when mouse is over data
            formatter: () => `<b>${this.series.name}, Age ${this.point.category}</b><br/>Population: ${Highcharts.numberFormat(Math.abs(this.point.y), 0)}`
        },

        motion: {
            // Enables the motion aspect of the graph
            enabled: true,
            labels: [1899, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
            series: [0, 1],
            updateInterval: 30,
            loop: true,
        },

        series: [{
            name: 'Total',
            color: '#FFD13F',
            borderColor: '#FFD13F',
            data: [{
                sequence: [93148, 113789, 126248, 186150, 206149, 220231, 291326, 291326, 337134, 326717, 313436, 284259, 274958, 267879, 260120, 249966, 242568, 234298]
            }, {
                sequence: [88475, 108508, 128531, 149336, 206326, 192930, 234876, 233876, 272430, 287227, 301191, 260850, 264094, 263539, 262420, 257500, 248792, 240621]
            }, {
                sequence: [84265, 94213, 96053, 99780, 148008, 157992, 182638, 182638, 236136, 270562, 271507, 244159, 233990, 227123, 224022, 222722, 224671, 225720]
            }, {
                sequence: [64317, 70422, 78005, 94709, 102596, 131737, 156652, 156652, 229762, 254287, 262825, 248173, 243564, 237053, 229793, 220629, 208957, 198834]
            }, ]

        }],
    });
});

$(document).ready(function () {
    Highcharts.chart('chart02', {
        chart: {
            zoomType: 'x',
        },
        title: {
            text: 'Tasa de Asesinatos por cada 100,000 habitantes 1960-2018',

        },
        subtitle: {
            text: 'Fuente: Policia de Puerto Rico',
        },
        xAxis: [{
            categories: [1960, 1961, 1962, 1963, 1964, 1965,
                1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973,
                1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981,
                1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
                1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997,
                1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
                2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
                2014, 2015, 2016, 2017, 2018
            ],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                style: {
                    color: '#606F7B'
                }
            },
            title: {
                text: 'Total de Asesinatos',
            }
        }],
        tooltip: {
            borderColor: '#FFD13F',
            valueDecimals: 1,
            backgroundColor: '#FFF',
            shared: true
        },
        plotOptions: {
            series: {
                lineWidth: 5,
                animation: {
                    duration: 7500
                }
            },

        },
        series: [{
            name: 'Asesinatos',
            type: 'area',
            color: '#008445',
            data: [
                7.150323637, 7.198208783, 8.888392793, 8.756563876, 9.425479258, 8.171774612, 7.789014867, 7.05620746,
                7.749558464, 6.858471505, 7.079559873, 10.37434523, 11.53018161, 14.98087892, 18.16295213, 17.16630121,
                15.01125337, 15.51384203, 15.83258849, 15.27990311, 14.76605809, 16.2662378, 14.92357284, 12.80802385,
                14.54248091, 17.05527041, 21.24151484, 14.90724559, 17.31028896, 13.45071264, 17.0087649, 23.0104158,
                24.19734741, 26.49814513, 27.43277729, 23.63759625, 23.55662097, 19.45783946, 17.39524832, 15.56998485,
                18.37582556, 19.56125186, 20.24216852, 20.56927494, 20.72185212, 20.04520901, 19.42072115, 19.24401169,
                21.45782381, 23.90112314, 26.38367336, 30.88017189, 26.908887, 24.57502326, 19.26510826, 16.80971233,
                19.90439442, 21.27546726, 19.92499374,
            ],
        }]
    })
});


$(document).ready(function () {
    Highcharts.chart('chart03', {
        chart: {
            zoomType: 'x',
        },
        title: {
            text: 'Delitos Tipo 1 Persona V. Propiedad',

        },
        subtitle: {
            text: ' ',

        },
        xAxis: [{
            categories: [1960, 1961, 1962, 1963, 1964, 1965,
                1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973,
                1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981,
                1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
                1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997,
                1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
                2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
                2014, 2015, 2016, 2017, 2018
            ],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                style: {
                    color: '#606F7B'
                }
            },
            title: {
                text: 'Total de Delitos',
                style: {
                    color: '#B8C2CC'
                }
            }
        }],

        tooltip: {
            shared: true,
            backgroundColor: '#FFF'
        },
        plotOptions: {
            series: {
                lineWidth: 5,
                animation: {
                    duration: 8500
                }
            },

        },

        series: [{
            name: 'Delitos contra la Persona',
            type: 'line',
            color: '#008445',
            data: [6442, 9725, 13066, 13833, 14835, 14511,
                15003, 14185, 14955, 13650, 14327, 15749,
                15355, 15640, 15429, 16706, 16597, 16835,
                15150, 15355, 16853, 16321, 15167, 15559,
                17410, 22452, 26097, 23616, 22526, 21853,
                29912, 28145, 32159, 26342, 25400, 22450,
                20147, 19595, 16439, 14206, 12406, 11406,
                13471, 11893, 10052, 9579, 8929, 8942,
                9484, 10492, 10365, 10540, 10041, 9320,
                8368, 7836, 7643, 7788, 6407,

            ],

        }, {
            name: 'Delitos contra la Propiedad',
            type: 'line',
            color: '#FFD13F',
            data: [
                26830, 28257, 34448, 40326, 41911, 42606,
                45010, 46550, 50661, 47830, 52143, 54689,
                55068, 56723, 66864, 71489, 69482, 64709,
                64193, 64826, 75327, 80319, 81571, 76693,
                85115, 93980, 93425, 86401, 89121, 88174,
                94459, 91586, 96744, 94693, 90845, 83638,
                79641, 75280, 70581, 67674, 62973, 58714,
                77312, 69895, 60287, 55466, 53197, 53937,
                59254, 55937, 51873, 51717, 51679, 48851,
                45622, 38721, 35201, 24809, 24809,

            ],
        }]
    })
});


$(document).ready(function () {
    Highcharts.chart('chart04', {
        chart: {
            zoomType: 'x',
        },
        title: {
            text: 'Razón de Delitos Tipo 1 cometidos contra la Propiedad vs Persona',

        },
        subtitle: {
            text: '',

        },
        xAxis: [{
            categories: [1960, 1961, 1962, 1963, 1964, 1965,
                1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973,
                1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981,
                1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
                1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997,
                1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
                2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
                2014, 2015, 2016, 2017, 2018
            ],
            crosshair: true
        }],
        yAxis: [{
            lineWidth: 1,
            title: {
                text: 'Proporción de Delitos tipo 1 Cometidos'
            }
        }, {
            lineWidth: 1,
            opposite: true,
            reversed: false,
            title: {
                text: 'Proporción de Delitos tipo 1 Cometidos'
            }
        }],
        tooltip: {
            shared: true,
            backgroundColor: '#FFF',
            borderColor: '#008445',
            valueDecimals: 1

        },
        plotOptions: {
            series: {
                lineWidth: 5,
                animation: {
                    duration: 7500
                }
            },

        },
        credits: {
            enabled: false
        },

        series: [{
            name: 'Razón de delitos tipo 1 contra la persona v propiedad',
            type: 'area',
            color: '#FFD13F',
            data: [24.01043608, 34.41625084, 37.92963307, 34.30293111, 35.3964353, 34.0585833, 33.33259276, 30.4726101,
                29.51974892, 28.53857412, 27.47636308, 28.79738156, 27.88370742, 27.5725896, 23.07519742, 23.36863014,
                23.88676204, 26.01647375, 23.60070413, 23.68648382, 22.37311986, 20.32022311, 18.59361783, 20.28737955,
                20.45467896, 23.8901894, 27.93363661, 27.33301698, 25.2757487, 24.78394992, 31.66664902,
                30.73067936, 33.24133796, 27.81831814, 27.9597116, 26.84186614, 25.29727151, 26.0294899, 23.29097066,
                20.9918137, 19.70050657, 19.4263719, 17.42420323, 17.01552328, 16.67357805, 17.2700393, 16.7847811,
                16.57860096, 16.0056705, 18.7568157, 19.98149326, 20.38014579, 19.42955553, 19.07842214, 18.34202797,
                20.23708065, 21.71245135, 31.39183361, 25.82530533,


            ],

        }]
    })
});

$(document).ready(function () {
    Highcharts.chart('chart06', {
        chart: {
            zoomType: 'x',
        },
        title: {
            text: 'Grafica 1: Delitos Tipo 1 por cada 100,000 Habitantes (1960-1992)',

        },
        subtitle: {
            text: ' ',
        },
        xAxis: [{
            categories: [1960, 1961, 1962, 1963, 1964, 1965,
                1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973,
                1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981,
                1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
                1990, 1991, 1992
            ],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                style: {
                    color: '#606F7B'
                }
            },
            title: {
                text: 'Delitos Tipo 1 por cada 100,000 Habitantes',
                style: {
                    color: '#B8C2CC'
                }
            }
        }],
        tooltip: {
            borderColor: '#FFD13F',
            valueDecimals: 1,
            backgroundColor: '#FFF',
            shared: true
        },
        plotOptions: {
            series: {
                lineWidth: 5,
                animation: {
                    duration: 7500
                }
            },

        },
        credits: {
            enabled: false
        },

        series: [{
            type: 'line',
            color: 'red',
            name: 'Regression Line',
            data: [
                [0, 1500],
                [32, 3500]
            ],
            marker: {
                enabled: false
            },
            states: {
                hover: {
                    lineWidth: 0
                }
            },
            enableMouseTracking: false
        }, {
            name: 'Delitos Tipo 1',
            type: 'line',
            color: '#008445',
            data: [
                1416.104572, 1598.844245, 1964.293466, 2195.586773, 2256.785848, 2233.240433,
                2314.070046, 2316.533838, 2480.463552, 2304.146602, 2450.928879, 2582.148868,
                2545.423132, 2574.967556, 2879.930288, 3030.591794, 2910.256033, 2708.909496,
                2590.113544, 2573.861158, 2883.76109, 3011.43529, 2976.652763, 2806.569634,
                3086.889969, 3471.642035, 3531.054711, 3222.13231, 3251.40087, 3169.039743,
                3525.661832, 3372.166579, 3605.097052
            ],
        }]
    })
});



$(document).ready(function () {
    Highcharts.chart('chart07', {
        chart: {
            zoomType: 'x',
        },
        title: {
            text: 'Grafica 2: Delitos Tipo 1 por cada 100,000 Habitantes (1992-2018)',

        },
        subtitle: {
            text: ' ',
        },
        xAxis: [{
            categories: [1992, 1993, 1994, 1995, 1996, 1997,
                1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
                2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
                2014, 2015, 2016, 2017, 2018
            ],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                style: {
                    color: '#606F7B'
                }
            },
            title: {
                text: 'Delitos Tipo 1 por cada 100,000 Habitantes',
                style: {
                    color: '#B8C2CC'
                }
            }
        }],
        tooltip: {
            borderColor: '#FFD13F',
            valueDecimals: 1,
            backgroundColor: '#FFF',
            shared: true
        },
        plotOptions: {
            series: {
                lineWidth: 5,
                animation: {
                    duration: 7500
                }
            },

        },
        credits: {
            enabled: false
        },

        series: [{
            type: 'line',
            color: 'red',
            name: 'Regression Line',
            data: [
                [0, 3000],
                [26, 1000]
            ],
            marker: {
                enabled: false
            },
            states: {
                hover: {
                    lineWidth: 0
                }
            },
            enableMouseTracking: false
        }, {
            name: 'Delitos Tipo 1',
            type: 'line',
            color: '#008445',
            data: [
                3605.097052,
                3361.848004, 3205.444207, 2902.390407,
                2708.142965, 2553.36373, 2321.678695, 2149.865699, 1993.023532, 1836.191406,
                2374.401136, 2137.636415, 1840.090016, 1702.141802, 1632.654563, 1662.148641,
                1827.71734, 1775.981777, 1670.464967, 1692.347589, 1698.176386, 1618.973588,
                1527.346835, 1340.142802, 1255.416084, 1166.824535, 970.3254364

            ],
        }]
    })
});