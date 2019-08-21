import React from 'react';

import clsx from 'clsx';
import firebase from '../modules/firebase'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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

type Props = {
  charaName: string;
  HP: number;
  setCharaName: (name: string) => void;
  setHP: (value: number) => void;
};

const Skills: React.SFC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <div>
      <TextField
        id="characterName"
        label="Character Name"
        defaultValue={props.charaName}
        className={clsx(classes.textField, classes.dense)}
        onChange = {(event: React.ChangeEvent<HTMLInputElement>) => {props.setCharaName(event.target.value);}}
        margin="dense"
      />
      <br />

      <TextField
      id="hp"
      label="HP"
      type="number"
      value={props.HP}
      className={clsx(classes.numberField, classes.dense)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {props.setHP(+event.target.value)}}
      placeholder="HP"
      margin="normal"
      />
      <TextField
      id="mp"
      label="MP"
      type="number"
      value={props.HP}
      className={clsx(classes.numberField, classes.dense)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {props.setHP(+event.target.value)}}
      placeholder="MP"
      margin="normal"
      />
      <TextField
      id="san"
      label="SAN"
      type="number"
      value={props.HP}
      className={clsx(classes.numberField, classes.dense)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {props.setHP(+event.target.value)}}
      placeholder="SAN"
      margin="normal"
      />
      <br />

      <TextField
      id="str"
      label="STR"
      type="number"
      value={props.HP}
      className={clsx(classes.numberField, classes.dense)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {props.setHP(+event.target.value)}}
      placeholder="STR"
      margin="normal"
      />
      <TextField
      id="con"
      label="CON"
      type="number"
      value={props.HP}
      className={clsx(classes.numberField, classes.dense)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {props.setHP(+event.target.value)}}
      placeholder="CON"
      margin="normal"
      />
      <TextField
      id="pow"
      label="POW"
      type="number"
      value={props.HP}
      className={clsx(classes.numberField, classes.dense)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {props.setHP(+event.target.value)}}
      placeholder="POW"
      margin="normal"
      />
      <TextField
      id="dex"
      label="DEX"
      type="number"
      value={props.HP}
      className={clsx(classes.numberField, classes.dense)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {props.setHP(+event.target.value)}}
      placeholder="DEX"
      margin="normal"
      />
      <br />

      <TextField
      id="app"
      label="APP"
      type="number"
      value={props.HP}
      className={clsx(classes.numberField, classes.dense)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {props.setHP(+event.target.value)}}
      placeholder="APP"
      margin="normal"
      />
      <TextField
      id="siz"
      label="SIZ"
      type="number"
      value={props.HP}
      className={clsx(classes.numberField, classes.dense)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {props.setHP(+event.target.value)}}
      placeholder="SIZ"
      margin="normal"
      />
      <TextField
      id="int"
      label="INT"
      type="number"
      value={props.HP}
      className={clsx(classes.numberField, classes.dense)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {props.setHP(+event.target.value)}}
      placeholder="INT"
      margin="normal"
      />
      <TextField
      id="edu"
      label="EDU"
      type="number"
      value={props.HP}
      className={clsx(classes.numberField, classes.dense)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {props.setHP(+event.target.value)}}
      placeholder="EDU"
      margin="normal"
      />

      <br />
      <TextField
        id="background"
        label="Background"
        multiline
        rowsMax="4"
        value={props.charaName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {props.setCharaName(event.target.value)}}
        className={classes.textField}
        margin="normal"
      />
    </div>
  );
}
export default Skills;