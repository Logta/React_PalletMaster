import React from 'react';

import clsx from 'clsx';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';

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
      width:'80%',
      [theme.breakpoints.up('sm')]: {
        width: 360,
      },
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width:'80%',
      [theme.breakpoints.up('sm')]: {
      width: 360,
    },
    },
    paper: {
      margin:'auto',
      width:'90%',
      [theme.breakpoints.up('sm')]: {
        width:450,
      },
      padding: theme.spacing(3, 2),
    },
    mobile:{
      paddingTop: '100'
    }
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
      <Hidden smUp implementation="css">
        <br className={classes.mobile}/>
      </Hidden>
      <h2>Setting</h2>
      <Paper className = {classes.paper}>
        <TextField
          id="diceURL"
          label="Dice API URL"
          defaultValue={props.diceUrl}
          className={clsx(classes.textField, classes.dense)}
          onChange = {(event: React.ChangeEvent<HTMLInputElement>) => {setDiceValue(event.target.value);}}
          margin="dense"
        />
        <br />
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
      </Paper>
    </div>
  );
}

export default Setting;