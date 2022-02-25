import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment/locale/es';
import 'moment-timezone';
import { BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar, Tooltip } from 'recharts';

export const Chart = () => {

    const initialState = [
        {
            name: 'Resultado',
            tristeza: 7,
            enojo: 4,
            sorpresa: 2,
            alegria: 1,
        }
    ];

    const [data, setData] = useState(initialState);

    const info = [
        {
            'emocion': 'Tristeza',
            'fecha': '02/22/0202',
        },
        {
            'emocion': 'Tristeza',
            'fecha': '02/22/0202',
        },
        {
            'emocion': 'Alegria',
            'fecha': '02/22/0202',
        },
        {
            'emocion': 'Enojo',
            'fecha': '02/22/0202',
        },
        {
            'emocion': 'Sorpresa',
            'fecha': '02/22/0202',
        }
    ];

    const countData = () => {
        let alegria = 0;
        let enojo = 0;
        let sorpresa = 0;
        let tristeza = 0;
        info.forEach(e => {
            if(e.emocion === 'Alegria') {alegria++}
            if(e.emocion === 'Tristeza') {tristeza++}
            if(e.emocion === 'Enojo') {enojo++}
            if(e.emocion === 'Sorpresa') {sorpresa++}
        });
        setData([{
            name: 'Resultado',
            alegria,
            enojo,
            sorpresa,
            tristeza
        }]);
    }

    return (
        <div>
            <Grid item>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    <Moment locale='es' format='LL'>
                        { moment() }
                    </Moment>
                </Typography>
            </Grid>

            <Grid style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
                textAlign: "center",
            }}>

            <BarChart width={930} height={450} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip/>
                <Legend />
                <Bar dataKey="alegria" fill="#fcf45d" name='&#x1F642;' />
                <Bar dataKey="tristeza" fill="#a2d2ff"  name='&#x1F641;'/>
                <Bar dataKey="sorpresa" fill="#aaf683"  name='&#x1F62E;'/>
                <Bar dataKey="enojo" fill="#ff686b"  name='&#x1F620;'/>
            </BarChart>
            </Grid>
            <button onClick={countData}>Here</button>
        </div>
    )
}
