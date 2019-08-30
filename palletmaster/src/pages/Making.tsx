import React, { Dispatch } from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Paper from '@material-ui/core/Paper';

import CreateAbility from './CreateAbility';
import CreateSkills from './CreateSkills';
import CreateInfos from './CreateInfos';
import defaultSkills from '../characterMakingSkills.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      margin:'auto',
      padding: theme.spacing(3, 2),
      width: 600,
    },
    root: {
      width: '90%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

type skill = {
  skillName: string,
  skillValue: number,
  skillType: string,
  skillUnique: boolean,
  skillWorkValue: number,
  skillInterestValue: number,
  defaultValue: number
};

type abilityValue = {
  STR: number,
  CON: number,
  POW: number,
  DEX: number,
  APP: number,
  SIZ: number,
  INT: number,
  EDU: number
};

type characterInfo = {
  characterName: string,
  HP: number,
  MP: number,
  SAN: number,
  damageBonus: string,
  job: string,
  age: number,
  sex: string,
  height: number,
  weight: number,
  origin: string
};

type character = {
  skills: skill[];
  characterBackground: string;
  abilityValues: abilityValue;
  characterInfos: characterInfo;
}

const init = (): character => {
  return {

    skills: defaultSkills.skills.map(s => {
      return{
        skillName: s.skillName,
        skillValue: s.skillValue,
        skillType: s.skillType,
        skillUnique: true,
        skillWorkValue: 0,
        skillInterestValue: 0,
        defaultValue: s.skillValue
      }
    }),

    characterBackground: "",
    abilityValues: {
        STR: 0,
        CON: 0,
        POW: 0,
        DEX: 0,
        APP: 0,
        SIZ: 0,
        INT: 0,
        EDU: 0
    },
    characterInfos: {
        characterName: "",
        HP: 0,
        MP: 0,
        SAN: 0,
        damageBonus: "",
        job: "",
        age: 0,
        sex: "",
        height: 0,
        weight: 0,
        origin: ""
    },
  };
};

function getSteps() {
  return ['Select character abilitys', 'Setting skills', 'Create character infomation'];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return 'abilitys';
    case 1:
      return 'skills';
    case 2:
      return 'infomation';
    default:
      return 'Unknown step';
  }
}

export default function <HorizontalLinearStepper>() {
  const classes = useStyles();
  const [character, setCharacter] = React.useState(init());
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const steps = getSteps();

  function isStepOptional(step: number) {
    return step === 1;
  }

  function isStepSkipped(step: number) {
    return skipped.has(step);
  }

  function handleNext() {

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleSkip() {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <Paper className={classes.paper}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

        {(activeStep === 0) && (
          <CreateAbility character={character} setCharacter={setCharacter}/>
        )}
        {(activeStep === 1) && (
          <CreateSkills character={character} setCharacter={setCharacter}/>
        )}
        {(activeStep === 2) && (
          <CreateInfos character={character} setCharacter={setCharacter}/>
        )}

      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Paper>
  );
}