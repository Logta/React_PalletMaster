import React from 'react';

import clsx from 'clsx';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
      marginRight: theme.spacing(1),
      width: 200,
    },
    numberField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 50,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
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

type character = {    // ページ全体で保持しとくべき情報はTodoの配列くらい
  character: {
      skills: skill[],
      characterBackground: string | undefined,
      abilityValues: abilityValue,
      characterInfos: characterInfo,
  };
};

type Props = {
  character: character;
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
    <div>
      <TextField
        id="characterName"
        label="Character Name"
        defaultValue={props.character.character.characterInfos.characterName}
        className={clsx(classes.textField, classes.dense)}
        onChange = {(event: React.ChangeEvent<HTMLInputElement>) => {props.setCharacterName(event.target.value);}}
        margin="dense"
      />
      <br />

      <TextField
      id="hp"
      label="HP"
      type="number"
      value={props.character.character.characterInfos.HP}
      className={clsx(classes.numberField, classes.dense)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {props.setHP(+event.target.value)}}
      placeholder="HP"
      margin="normal"
      />
      <TextField
      id="mp"
      label="MP"
      type="number"
      value={props.character.character.characterInfos.MP}
      className={clsx(classes.numberField, classes.dense)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {props.setMP(+event.target.value)}}
      placeholder="MP"
      margin="normal"
      />
      <TextField
      id="san"
      label="SAN"
      type="number"
      value={props.character.character.characterInfos.SAN}
      className={clsx(classes.numberField, classes.dense)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {props.setSAN(+event.target.value)}}
      placeholder="SAN"
      margin="normal"
      />
      <br />

      <TextField
      id="str"
      label="STR"
      type="number"
      value={props.character.character.abilityValues.STR}
      className={clsx(classes.numberField, classes.dense)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        let newAbilityValues : abilityValue = props.character.character.abilityValues;
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
      value={props.character.character.abilityValues.CON}
      className={clsx(classes.numberField, classes.dense)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        let newAbilityValues : abilityValue = props.character.character.abilityValues;
        newAbilityValues.CON = +event.target.value;
        props.setAbilityValues(newAbilityValues);}}
      placeholder="CON"
      margin="normal"
      />
      <TextField
      id="pow"
      label="POW"
      type="number"
      value={props.character.character.abilityValues.POW}
      className={clsx(classes.numberField, classes.dense)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        let newAbilityValues : abilityValue = props.character.character.abilityValues;
        newAbilityValues.POW = +event.target.value;
        props.setAbilityValues(newAbilityValues);}}
      placeholder="POW"
      margin="normal"
      />
      <TextField
      id="dex"
      label="DEX"
      type="number"
      value={props.character.character.abilityValues.DEX}
      className={clsx(classes.numberField, classes.dense)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        let newAbilityValues : abilityValue = props.character.character.abilityValues;
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
      value={props.character.character.abilityValues.APP}
      className={clsx(classes.numberField, classes.dense)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        let newAbilityValues : abilityValue = props.character.character.abilityValues;
        newAbilityValues.APP = +event.target.value;
        props.setAbilityValues(newAbilityValues);}}
      placeholder="APP"
      margin="normal"
      />
      <TextField
      id="siz"
      label="SIZ"
      type="number"
      value={props.character.character.abilityValues.SIZ}
      className={clsx(classes.numberField, classes.dense)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        let newAbilityValues : abilityValue = props.character.character.abilityValues;
        newAbilityValues.SIZ = +event.target.value;
        props.setAbilityValues(newAbilityValues);}}
      placeholder="SIZ"
      margin="normal"
      />
      <TextField
      id="int"
      label="INT"
      type="number"
      value={props.character.character.abilityValues.INT}
      className={clsx(classes.numberField, classes.dense)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        let newAbilityValues : abilityValue = props.character.character.abilityValues;
        newAbilityValues.INT = +event.target.value;
        props.setAbilityValues(newAbilityValues);}}
      placeholder="INT"
      margin="normal"
      />
      <TextField
      id="edu"
      label="EDU"
      type="number"
      value={props.character.character.abilityValues.EDU}
      className={clsx(classes.numberField, classes.dense)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        let newAbilityValues : abilityValue = props.character.character.abilityValues;
        newAbilityValues.EDU = +event.target.value;
        props.setAbilityValues(newAbilityValues);}}
      placeholder="EDU"
      margin="normal"
      />

      <br />
      <TextField
        id="background"
        label="Background"
        multiline
        rowsMax="4"
        value={props.character.character.characterBackground}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {props.setCharacterBackground(event.target.value)}}
        className={classes.textField}
        margin="normal"
      />
    </div>
  );
}
export default Character;