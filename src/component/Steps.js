import React from 'react';
import { TextField } from 'final-form-material-ui';
import { Field } from 'react-final-form';
import { Grid } from '@material-ui/core';

const Step1 = () => (
    <Grid container alignItems="flex-start" spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
            <Field fullWidth required name="campo1" component={TextField} type="text" label="Campo 1" />
        </Grid>
    </Grid>
);

const Step2 = () => (
    <Grid container alignItems="flex-start" spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
            <Field fullWidth required name="campo2" component={TextField} type="text" label="Campo 2" />
        </Grid>
    </Grid>
);

const Step3 = () => (
    <Grid container alignItems="flex-start" spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
            <Field fullWidth required name="campo3" component={TextField} type="text" label="Campo 3" />
        </Grid>
    </Grid>
);

export { Step1, Step2, Step3 };
