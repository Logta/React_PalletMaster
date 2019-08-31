import React, { Dispatch } from 'react';

import clsx from 'clsx';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

import SkillList from '../components/SkillList'
import Chip from '@material-ui/core/Chip';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: 'auto',
      width: '90%',
    },
    numberInfoField: {
      marginLeft: theme.spacing(1),
      marginRight: 'auto',
      width: '90%',
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    paper: {
      margin:'auto',
      padding: theme.spacing(3, 2),
      width: '90%',
    },
    card: {
      margin:'auto',
      width: '90%',
    },
    margin: {
      margin: theme.spacing(2),
    },
    chip: {
      marginTop: '10px',
      marginBottom: '10px',
      marginLeft: theme.spacing(5),
      marginRight: 'auto',
    }
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

const initSkill = ():skill => {
  return({
      skillName: "",
      skillValue: 0,
      skillType: "",
      skillUnique: false,
      skillWorkValue: 0,
      skillInterestValue: 0,
      defaultValue: 0
    }
  )
}

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

type Props = {
    character: character;
    setCharacter: (character: character) => void;
};

const skillTypes = [
  ['戦闘','Fight'],
  ['探索','Search'],
  ['行動','Act'],
  ['交渉','Negotiate'],
  ['知識','Wisdom'],
];

const Making: React.SFC<Props> = (props: Props) => {
  const classes = useStyles();

  const getWorkPoint = () => {
    if(props.character.skills.length === 0) return 0;
    return props.character.skills.map(s=>s.skillWorkValue).reduce(function(total, data)
    {return total + data});
  };

  const getInterestPoint = () => {
    if(props.character.skills.length === 0) return 0;
    return props.character.skills.map(s=>s.skillInterestValue).reduce(function(total, data)
    {return total + data});
  };

  const getRemainingWorkPoint = () => {
    return props.character.abilityValues.EDU * 20 - getWorkPoint();
  };

  const getRemainingInterestPoint = () => {
    return props.character.abilityValues.INT * 10 - getInterestPoint();
  };

  const getSkills = (type: string): skill[] =>{
    const s = props.character.skills.filter(e => e.skillType=== type);
    if(s == null) return[initSkill()];
    return s;
  }

  return (
    <Paper className = {classes.paper}>
      <h2>Character Create</h2>
      <Card>
        <Chip color="primary" label="Work Point" className={classes.chip}　/> {getRemainingWorkPoint()}
        <Chip color="primary" label="Interest Point" className={classes.chip}　/> {getRemainingInterestPoint()}
        <br />
      </Card>

      {skillTypes.map(element => {
        return(
          <div>
            <br />
            <br />
            {element[1]}
            <br />
            <Card>
              <SkillList 
                skills={getSkills(element[0])} 
                setCharacter={props.setCharacter} 
                setSkillInterestValue={
                  (name: string, value: number)=>{
                    if(value < 0 || getRemainingInterestPoint() - value < 0) return;
                  const newSkills = JSON.parse(JSON.stringify(props.character.skills));

                  const cSkill = (newSkills.length == null || newSkills.length === 0) ? 
                    undefined : 
                    newSkills.find((s: { skillName: string; }) => s.skillName === name);

                  if(cSkill == null) return;
                    cSkill.skillInterestValue = value;
                    cSkill.skillValue = cSkill.defaultValue + value;
                    props.setCharacter({
                      ...props.character,
                      skills: newSkills
                      }
                    );
                  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                } 
                setSkillWorkValue={
                  (name: string, value: number)=>{
                    console.log( getWorkPoint() )
                    if(value < 0 || getRemainingWorkPoint() - value < 0) return;
                  const newSkills = JSON.parse(JSON.stringify(props.character.skills));

                  const cSkill = (newSkills.length == null || newSkills.length === 0) ? 
                    undefined : 
                    newSkills.find((s: { skillName: string; }) => s.skillName === name);

                  if(cSkill == null) return;
                    cSkill.skillWorkValue = value;
                    cSkill.skillValue = cSkill.defaultValue + value;
                    props.setCharacter({
                      ...props.character,
                      skills: newSkills
                      }
                    );
                  }      
                }
                />
            </Card>
          </div>
          );
      })}
    </Paper>
  );
}
export default Making;