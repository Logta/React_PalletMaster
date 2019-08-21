import React from 'react';

import clsx from 'clsx';

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
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  }),
);

type Props = {
  discordUrl: string;
  diceUrl: string;
  setDiceUrl: (url: string) => void;
  setDiscordUrl: (url: string) => void;
};

const Setting: React.SFC<Props> = (props: Props) => {
  const classes = useStyles();
  const [nDiscord, setDisordValue] = React.useState(props.discordUrl);
  const [nDice, setDiceValue] = React.useState(props.diceUrl);

  const setUrl = (newDiceURL: string, newDiscordURL: string):void => {
    props.setDiceUrl(newDiceURL);
    props.setDiscordUrl(newDiscordURL);
    console.log(newDiceURL);
  }

  return (
    <div>
      <h2>Setting</h2>
      <TextField
        id="diceURL"
        label="Dice API URL"
        defaultValue={props.diceUrl}
        className={clsx(classes.textField, classes.dense)}
        onChange = {(event: React.ChangeEvent<HTMLInputElement>) => {setDiceValue(event.target.value);}}
        margin="dense"
      />
      <TextField
        id="discordURL"
        label="Discord URL"
        defaultValue={props.discordUrl}
        className={clsx(classes.textField, classes.dense)}
        onChange = {(event: React.ChangeEvent<HTMLInputElement>) => {setDisordValue(event.target.value);}}
        margin="dense"
      />
      <br />
      <Button variant="contained" color="primary" className={classes.button}
      onClick = {():void =>{setUrl(nDice, nDiscord)}}>
        SET
      </Button>
    </div>
  );
}

export default Setting;