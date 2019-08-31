import React, { Dispatch } from 'react';

import clsx from 'clsx';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

import ShakeNDNDice from '../modules/shakeNDNDice';
import Button from '@material-ui/core/Button';

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
      width: 360,
    },
    numberAbilityField: {
      marginLeft: 0,
      marginRight: 6,
      width: 78,
    },
    numberInfoField: {
      marginLeft: theme.spacing(1),
      marginRight: 'auto',
      width: 120,
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
      width: 600,
    },
    card: {
      margin:'auto',
      width: 500,
    },
    margin: {
      margin: theme.spacing(2),
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

const setAbilityToDice = (character: character):character =>{
  interface ItemNDN {
    count: number;
    number: number;
  }
  const itemNDN: ItemNDN ={
    count: 3,
    number: 6,
  }

  const newCharacter = JSON.parse(JSON.stringify(character));

  newCharacter.abilityValues.STR = +ShakeNDNDice(itemNDN).result - 1;
  newCharacter.abilityValues.CON = +ShakeNDNDice(itemNDN).result - 1;
  newCharacter.abilityValues.POW = +ShakeNDNDice(itemNDN).result - 1;
  newCharacter.abilityValues.DEX = +ShakeNDNDice(itemNDN).result - 1;
  newCharacter.abilityValues.APP = +ShakeNDNDice(itemNDN).result - 1;
  newCharacter.abilityValues.EDU = +ShakeNDNDice(itemNDN).result + 3 - 1;
  
  itemNDN.count = 2;
  newCharacter.abilityValues.SIZ = +ShakeNDNDice(itemNDN).result + 6 - 1;
  newCharacter.abilityValues.INT = +ShakeNDNDice(itemNDN).result + 6 - 1;
  return newCharacter;
}

type Props = {
    character: character;
    setCharacter: (character: character) => void;
};

const Making: React.SFC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <Paper className = {classes.paper}>
      <h2>Character Create</h2>
    
    <Button variant="contained" color="primary" //className={classes.button}
        onClick = {
            ():void => {
            props.setCharacter(setAbilityToDice(props.character));
            }
            }>
        Dice</Button>
      <br />
      
      <Card className = {classes.card}>
        <br />
        physical value
        <br />
        
        <TextField
        id="hp"
        label="HP"
        type="number"
        value={props.character.characterInfos.HP}
        className={clsx(classes.numberInfoField, classes.dense)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
          {props.setCharacter({
            ...props.character,
            characterInfos:{
              ...props.character.characterInfos,
              HP: +event.target.value,
            }
          });}
        }
        placeholder="HP"
        margin="normal"
        />
        <TextField
        id="mp"
        label="MP"
        type="number"
        value={props.character.characterInfos.MP}
        className={clsx(classes.numberInfoField, classes.dense)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
          {props.setCharacter({
            ...props.character,
            characterInfos:{
              ...props.character.characterInfos,
              MP: +event.target.value,
            }
          });}
        }
        placeholder="MP"
        margin="normal"
        />
        <TextField
        id="san"
        label="SAN"
        type="number"
        value={props.character.characterInfos.SAN}
        className={clsx(classes.numberInfoField, classes.dense)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
          {props.setCharacter({
            ...props.character,
            characterInfos:{
              ...props.character.characterInfos,
              SAN: +event.target.value,
            }
          });}
        }
        placeholder="SAN"
        margin="normal"
        />
        <br />
      </Card>
      <br />

      <Card className = {classes.card}>
        <br />
        ability value
        <br />
        <TextField
        id="str"
        label="STR"
        type="number"
        value={props.character.abilityValues.STR}
        className={clsx(classes.numberAbilityField, classes.dense)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
          {props.setCharacter({
            ...props.character,
            abilityValues : {
              ...props.character.abilityValues,
              STR: +event.target.value,
            }
          });}
        }
        placeholder="STR"
        margin="normal"
        />
        <TextField
        id="con"
        label="CON"
        type="number"
        value={props.character.abilityValues.CON}
        className={clsx(classes.numberAbilityField, classes.dense)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
          {props.setCharacter({
            ...props.character,
            abilityValues : {
              ...props.character.abilityValues,
              CON: +event.target.value,
            }
          });}
        }
        placeholder="CON"
        margin="normal"
        />
        <TextField
        id="pow"
        label="POW"
        type="number"
        value={props.character.abilityValues.POW}
        className={clsx(classes.numberAbilityField, classes.dense)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
          {props.setCharacter({
            ...props.character,
            abilityValues : {
              ...props.character.abilityValues,
              POW: +event.target.value,
            }
          });}
        }
        placeholder="POW"
        margin="normal"
        />
        <TextField
        id="dex"
        label="DEX"
        type="number"
        value={props.character.abilityValues.DEX}
        className={clsx(classes.numberAbilityField, classes.dense)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
          {
            props.setCharacter({
              ...props.character,
              abilityValues : {
                ...props.character.abilityValues,
                DEX: +event.target.value,
              }
            })
          ;}
        }
        placeholder="DEX"
        margin="normal"
        />
        <br />

        <TextField
        id="app"
        label="APP"
        type="number"
        value={props.character.abilityValues.APP}
        className={clsx(classes.numberAbilityField, classes.dense)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
          {props.setCharacter({
            ...props.character,
            abilityValues : {
              ...props.character.abilityValues,
              APP: +event.target.value,
            }
          });}
        }
        placeholder="APP"
        margin="normal"
        />
        <TextField
        id="siz"
        label="SIZ"
        type="number"
        value={props.character.abilityValues.SIZ}
        className={clsx(classes.numberAbilityField, classes.dense)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
          {props.setCharacter({
            ...props.character,
            abilityValues : {
              ...props.character.abilityValues,
              SIZ: +event.target.value,
            }
          });}
        }
        placeholder="SIZ"
        margin="normal"
        />
        <TextField
        id="int"
        label="INT"
        type="number"
        value={props.character.abilityValues.INT}
        className={clsx(classes.numberAbilityField, classes.dense)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
          {props.setCharacter({
            ...props.character,
            abilityValues : {
              ...props.character.abilityValues,
              INT: +event.target.value,
            }
          });}
        }
        placeholder="INT"
        margin="normal"
        />
        <TextField
        id="edu"
        label="EDU"
        type="number"
        value={props.character.abilityValues.EDU}
        className={clsx(classes.numberAbilityField, classes.dense)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
          {props.setCharacter({
            ...props.character,
            abilityValues : {
              ...props.character.abilityValues,
              EDU: +event.target.value,
            }
          });}
        }
        placeholder="EDU"
        margin="normal"
        />
        <br />
      </Card>

      <br />
    </Paper>
  );
}
export default Making;