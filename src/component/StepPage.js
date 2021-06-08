import React, { useState } from 'react';
import {
    Button,
    createStyles,
    Icon,
    makeStyles,
    MobileStepper,
    Paper,
    Step,
    StepLabel,
    Stepper,
    useTheme,
    Theme,
} from '@material-ui/core';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@material-ui/lab';
import { Form } from 'react-final-form';
import { Step1, Step2, Step3 } from './Steps';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        stepLabel: {
            width: '100%',
            textAlign: 'center',
        },
        speedDial: {
            position: 'absolute',
            '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
                bottom: theme.spacing(2),
                right: theme.spacing(2),
            },
            '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
                top: theme.spacing(2),
                left: theme.spacing(2),
            },
        },
    }),
);
const StepPage = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        { id: 0, label: 'Step 1', component: <Step1 /> },
        { id: 1, label: 'Step 2', component: <Step2 /> },
        { id: 2, label: 'Step 3', component: <Step3 /> },
    ];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const onSubmit = (form) => {
        console.log(JSON.stringify(form));
    };

    const submitForm = (form) => {
        form.submit();
    };

    // Dial functions
    const [openDial, setOpenDial] = useState(false);

    return (
        <Paper style={{ padding: 16, margin: 50 }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(({ id, label }) => (
                    <Step key={id}>
                        <StepLabel className={classes.stepLabel}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Form
                onSubmit={onSubmit}
                initialValues={[]}
                render={({ handleSubmit, form, submitting, errors }) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <>
                            {steps.map(({ id, component }) => (
                                <Paper key={id} hidden={activeStep !== id} elevation={0} style={{ padding: 16 }}>
                                    {component}
                                </Paper>
                            ))}
                        </>
                        <MobileStepper
                            steps={steps.length}
                            position="static"
                            variant="text"
                            activeStep={activeStep}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={() => handleNext(errors)}
                                    className={classes.button}
                                    disabled={activeStep === steps.length - 1}
                                >
                                    Próximo
                                    <Icon>
                                        {theme.direction === 'rtl' ? 'keyboard_arrow_left' : 'keyboard_arrow_right'}
                                    </Icon>
                                </Button>
                            }
                            backButton={
                                <Button
                                    size="small"
                                    onClick={handleBack}
                                    disabled={activeStep === 0}
                                    className={classes.button}
                                >
                                    <Icon>
                                        {theme.direction === 'rtl' ? 'keyboard_arrow_right' : 'keyboard_arrow_left'}
                                    </Icon>
                                    Anterior
                                </Button>
                            }
                        />
                        <SpeedDial
                            ariaLabel="SpeedDial example"
                            className={classes.speedDial}
                            hidden={submitting}
                            icon={<SpeedDialIcon />}
                            onClose={() => setOpenDial(false)}
                            onOpen={() => setOpenDial(true)}
                            open={openDial}
                            direction="up"
                        >
                            <SpeedDialAction
                                icon={<Icon style={{ color: '#00c853' }}>save</Icon>}
                                tooltipTitle="Salvar"
                                onClick={() => submitForm(form)}
                            />
                        </SpeedDial>
                    </form>
                )}
            />
        </Paper>
    );
};

export default StepPage;
