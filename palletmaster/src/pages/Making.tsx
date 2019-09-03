import React from 'react';

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
      width:'90%',
      [theme.breakpoints.up('sm')]: {
        width: 600,
      },
    },
    root: {
      margin:'auto',
      width: '80%',
    },
    button: {
      margin:'auto',
      marginRight: theme.spacing(1),
    },
    instructions: {
      margin:'auto',
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
        skillUnique: false,
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
  
const setSkill = (skill: skill, character: character): character =>
{
  const newSkills = character.skills.filter(s => s.skillName !== skill.skillName);
  console.log(newSkills.find(e => e.skillName === skill.skillName))
  return(
  {
    ...character,
    skills: [...newSkills, skill]
  });
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
type Props = {
  setCharacter: (character: character) => void;
};

const Making: React.SFC<Props> = (props: Props) => {
  const classes = useStyles();
  const [character, setCharacter] = React.useState(init());
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const steps = getSteps();

  function isStepSkipped(step: number) {
    return skipped.has(step);
  }

  function handleNext() {
    const DEX = character.abilityValues.DEX;
    const newCharacter = 
      setSkill({
        skillName: "回避",
        skillValue: DEX * 2,
        skillType: "戦闘",
        skillUnique: true,
        skillWorkValue: 0,
        skillInterestValue: 0,
        defaultValue: DEX * 2
      }, character);

    setCharacter(newCharacter );
    
    setCharacter(
      {
        ...character,
        characterInfos: {
          ...character.characterInfos,
          HP: (character.abilityValues.CON + character.abilityValues.SIZ)/2,
          MP: (character.abilityValues.POW),
          SAN: character.abilityValues.POW * 5,
        }
      });

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
  
  const setSkills = (skill: skill[]): void =>
  {
    setCharacter(
    {
      ...character,
      skills: skill,
    });
  }

  const  setLastCharacter = () => {
    character.skills.filter(e=> e.skillWorkValue !== 0 || e.skillInterestValue !== 0 ).forEach(e=> e.skillUnique = true);
    const POW = character.abilityValues.POW;
    const INT = character.abilityValues.INT;
    const EDU = character.abilityValues.EDU;
    
    setCharacter(setSkill({
        skillName: "幸運",
        skillValue: POW * 5,
        skillType: "探索",
        skillUnique: true,
        skillWorkValue: 0,
        skillInterestValue: 0,
        defaultValue: POW * 5
      }, character)
    );
    
    setCharacter(setSkill({
      skillName: "アイデア",
      skillValue: INT * 5,
      skillType: "探索",
      skillUnique: true,
      skillWorkValue: 0,
      skillInterestValue: 0,
      defaultValue: INT * 5
    }, character));
    
    setCharacter(setSkill({
      skillName: "知識",
      skillValue: EDU * 5,
      skillType: "探索",
      skillUnique: true,
      skillWorkValue: 0,
      skillInterestValue: 0,
      defaultValue: EDU * 5
    }, character));

    console.log(character)
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
        {
          activeStep === steps.length ? (
          <div>
            {setLastCharacter()}
            {props.setCharacter(character)}
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

export default Making;