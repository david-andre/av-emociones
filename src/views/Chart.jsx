import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment/locale/es';
import 'moment-timezone';
import { BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar, Tooltip } from 'recharts';

export const Chart = () => {

    const location = useLocation()
    const { responses } = location.state

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

            <BarChart width={930} height={450} data={responses}>
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
        </div>
    )
}
