import './App.css';
import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import StepPage from './component/StepPage';

function App() {
    return (
        <Paper style={{ padding: 16, margin: 100, textAlign: 'center' }}>
            <Typography variant="h4">Stepper Material-UI Validation</Typography>
            <StepPage />
        </Paper>
    );
}

export default App;
