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
                <Bar dataKey="alegria" fill="#1B941B" name='&#x1F642;&nbsp; Felicidad' />
                <Bar dataKey="tristeza" fill="#AAABAA"  name='&#x1F641;&nbsp; Tristeza'/>
                <Bar dataKey="sorpresa" fill="#1BD6F9"  name='&#x1F62E;&nbsp; Sorpresa'/>
                <Bar dataKey="enojo" fill="#F9621B"  name='&#x1F620;&nbsp; Enojo'/>
            </BarChart>
            </Grid>
        </div>
    )
}
