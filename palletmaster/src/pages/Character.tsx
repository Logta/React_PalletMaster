import React from 'react';

import clsx from 'clsx';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

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
    }
  }),
);

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

type Props = {
  characterInfos: characterInfo;
  abilityValues: abilityValue;
  characterBackground: string | undefined;
  setCharacterName: (characterName: string) => void;
  setHP: (hp: number) => void;
  setMP: (mp: number) => void;
  setSAN: (san: number) => void;
  setCharacterBackground: (background: string) => void;
  setCharacterInfos: (characterInfos: characterInfo) => void;
  setAbilityValues: (abilityValues: abilityValue) => void;
};

const Character: React.SFC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <Paper className = {classes.paper}>
      <h2>Character Infomation</h2>

      <TextField
        id="characterName"
        label="Character Name"
        defaultValue={props.characterInfos.characterName}
        className={clsx(classes.textField, classes.dense)}
        onChange = {(event: React.ChangeEvent<HTMLInputElement>) => {props.setCharacterName(event.target.value);}}
        margin="dense"
      />
      <br />
      <TextField
        id="background"
        label="Background"
        multiline
        rowsMax="4"
        value={props.characterBackground}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {props.setCharacterBackground(event.target.value)}}
        className={classes.textField}
        margin="normal"
      />
      <Card className = {classes.card}>
        <br />
        physical value
        <br />
        
        <TextField
        id="hp"
        label="HP"
        type="number"
        value={props.characterInfos.HP}
        className={clsx(classes.numberInfoField, classes.dense)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {props.setHP(+event.target.value)}}
        placeholder="HP"
        margin="normal"
        />
        <TextField
        id="mp"
        label="MP"
        type="number"
        value={props.characterInfos.MP}
        className={clsx(classes.numberInfoField, classes.dense)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {props.setMP(+event.target.value)}}
        placeholder="MP"
        margin="normal"
        />
        <TextField
        id="san"
        label="SAN"
        type="number"
        value={props.characterInfos.SAN}
        className={clsx(classes.numberInfoField, classes.dense)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {props.setSAN(+event.target.value)}}
        placeholder="SAN"
        margin="normal"
        />
      </Card>
      <br />

      <Card className = {classes.card}>
        ability value
        <br />
        <TextField
        id="str"
        label="STR"
        type="number"
        value={props.abilityValues.STR}
        className={clsx(classes.numberAbilityField, classes.dense)}
        onChange={
          (event: React.ChangeEvent<HTMLInputElement>) => {
          let newAbilityValues : abilityValue = props.abilityValues;
          newAbilityValues.STR = +event.target.value;
          props.setAbilityValues(newAbilityValues);
        }}
        placeholder="STR"
        margin="normal"
        />
        <TextField
        id="con"
        label="CON"
        type="number"
        value={props.abilityValues.CON}
        className={clsx(classes.numberAbilityField, classes.dense)}
        onChange={
          (event: React.ChangeEvent<HTMLInputElement>) => {
          let newAbilityValues : abilityValue = props.abilityValues;
          newAbilityValues.CON = +event.target.value;
          props.setAbilityValues(newAbilityValues);}}
        placeholder="CON"
        margin="normal"
        />
        <TextField
        id="pow"
        label="POW"
        type="number"
        value={props.abilityValues.POW}
        className={clsx(classes.numberAbilityField, classes.dense)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let newAbilityValues : abilityValue = props.abilityValues;
          newAbilityValues.POW = +event.target.value;
          props.setAbilityValues(newAbilityValues);}}
        placeholder="POW"
        margin="normal"
        />
        <TextField
        id="dex"
        label="DEX"
        type="number"
        value={props.abilityValues.DEX}
        className={clsx(classes.numberAbilityField, classes.dense)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let newAbilityValues : abilityValue = props.abilityValues;
          newAbilityValues.DEX = +event.target.value;
          props.setAbilityValues(newAbilityValues);}}
        placeholder="DEX"
        margin="normal"
        />
        <br />

        <TextField
        id="app"
        label="APP"
        type="number"
        value={props.abilityValues.APP}
        className={clsx(classes.numberAbilityField, classes.dense)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let newAbilityValues : abilityValue = props.abilityValues;
          newAbilityValues.APP = +event.target.value;
          props.setAbilityValues(newAbilityValues);}}
        placeholder="APP"
        margin="normal"
        />
        <TextField
        id="siz"
        label="SIZ"
        type="number"
        value={props.abilityValues.SIZ}
        className={clsx(classes.numberAbilityField, classes.dense)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let newAbilityValues : abilityValue = props.abilityValues;
          newAbilityValues.SIZ = +event.target.value;
          props.setAbilityValues(newAbilityValues);}}
        placeholder="SIZ"
        margin="normal"
        />
        <TextField
        id="int"
        label="INT"
        type="number"
        value={props.abilityValues.INT}
        className={clsx(classes.numberAbilityField, classes.dense)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let newAbilityValues : abilityValue = props.abilityValues;
          newAbilityValues.INT = +event.target.value;
          props.setAbilityValues(newAbilityValues);}}
        placeholder="INT"
        margin="normal"
        />
        <TextField
        id="edu"
        label="EDU"
        type="number"
        value={props.abilityValues.EDU}
        className={clsx(classes.numberAbilityField, classes.dense)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let newAbilityValues : abilityValue = props.abilityValues;
          newAbilityValues.EDU = +event.target.value;
          props.setAbilityValues(newAbilityValues);}}
        placeholder="EDU"
        margin="normal"
        />
      </Card>

      <br />
    </Paper>
  );
}
export default Character;