import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';

import DiceDialog from '../components/DiceDialog';
import DiceNDNDialog from '../components/DiceNDNDialog';
import clsx from 'clsx';

import sendBCDice from '../modules/sendDiscord';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      margin:'auto',
      padding: theme.spacing(3, 2),
      width: '90%',
      [theme.breakpoints.up('sm')]: {
        width: 600,
      },
    },
    dense: {
      marginTop: 19,
    },
    numberInfoField: {
      marginLeft: theme.spacing(3),
      marginRight: 'auto',
      width: '20%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        marginLeft: theme.spacing(10),
      },
    },
    fab: {
      marginLeft: theme.spacing(5),
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
      },
      margin: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(1),
    },
  }),
);

type Props = {
  skills: skill[],
  SAN: number,
  characterName: string,
  setSAN: (san: number) => void,
  discordUrl: string;
};

type PropsSAN = {
  SAN: number,
  characterName: string,
  setSAN: (san: number) => void,
  discordUrl: string;
};

type PropsIdea = {
  skills: skill[],
  discordUrl: string;
  characterName: string,
};

const SANValue: React.SFC<PropsSAN> = (props: PropsSAN) => {
  const classes = useStyles();
  const [diffSAN, setDiffSAN] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  
  const [item, setItem] = React.useState({
    name: "",
    url: "",
    user: "",
    value: "",
  });

  const setItems = (ability: string, value: string): void =>
  {
    setItem({
      name: ability,
      url: props.discordUrl,
      user: props.characterName,
      value: value,
    });
  }

  function handleOpen() {
    (props.discordUrl !== "") ?
    sendBCDice(item):
    setOpen(true);
  }

  return (
    <Paper className = {classes.paper}>
      <Chip color="primary" label="SAN" /> {props.SAN}        
      <TextField
        id="san"
        label="SAN"
        type="number"
        defaultValue={diffSAN}
        className={classes.numberInfoField}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setDiffSAN(+event.target.value)}}
        placeholder="SAN"
        margin="normal"
        />
        <Fab color="primary" aria-label="add" className={classes.fab}>
          <AddIcon onClick={() => {props.setSAN(props.SAN + diffSAN)}}/>
        </Fab>

        <br />
        <Button variant="contained" color="primary" className={classes.button}
        onClick = {():void =>{
          setItems("SANチェック", String(props.SAN));
          handleOpen();
          }}>
          SAN Check
        </Button>

        <DiceDialog open={open} setOpen={setOpen} item={item} />
    </Paper>
  );
}

const SANFunc: React.SFC<PropsSAN> = (props: PropsSAN) => {
  const classes = useStyles();
  const [countDice, setCountDice] = React.useState(1);
  const [numberDice, setNumberDice] = React.useState(2);
  const [open, setOpen] = React.useState(false);
  
  const [item, setItem] = React.useState({
    count: 0,
    number: 0,
  });

  const setItems = (cou: number, num: number): void =>
  {
    setItem({
      count: cou,
      number: num,
    });
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <Paper className = {clsx(classes.paper, classes.dense)}>       
    <TextField
      id="san"
      label="Count"
      type="number"
      defaultValue={countDice}
      className={classes.numberInfoField}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setCountDice(+event.target.value)}}
      placeholder="SAN"
      margin="normal"
    />       
    <TextField
      id="san"
      label="Number"
      type="number"
      defaultValue={numberDice}
      className={classes.numberInfoField}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setNumberDice(+event.target.value)}}
      placeholder="SAN"
      margin="normal"
    />

<br />
      <Button variant="contained" color="primary" className={classes.button}
      onClick = {():void =>{
        setItems(countDice, numberDice);
        handleOpen();
        }}>
        Judge
      </Button>

    <DiceNDNDialog open={open} setOpen={setOpen} item={item} />
    </Paper>
  );
}

const SANIdea: React.SFC<PropsIdea> = (props: PropsIdea) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const [item, setItem] = React.useState({
    name: "",
    url: "",
    user: "",
    value: "",
  });

  const setItems = (ability: string, value: string): void =>
  {
    setItem({
      name: ability,
      url: props.discordUrl,
      user: props.characterName,
      value: value,
    });
  }

  function handleOpen() {
    (props.discordUrl !== "") ?
    sendBCDice(item):
    setOpen(true);
  }

  return (
    <Paper className = {clsx(classes.paper, classes.dense)}>      

    <br />
    <Button variant="contained" color="primary" className={classes.button}
    onClick = {():void =>{
      let idea: skill | undefined = props.skills.find(s => s.skillName === 'アイデア');
      if(idea == null) return;

      setItems("アイデア", String(idea.skillValue));
      handleOpen();
      }}>
      Idea
    </Button>

    <DiceDialog open={open} setOpen={setOpen} item={item} />
    </Paper>
  );
}

const SAN: React.SFC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <div>
      <SANValue SAN={props.SAN} characterName={props.characterName} setSAN={props.setSAN} discordUrl={props.discordUrl}/>
      <SANFunc SAN={props.SAN} characterName={props.characterName} setSAN={props.setSAN} discordUrl={props.discordUrl} />
      <SANIdea skills={props.skills} discordUrl={props.discordUrl} characterName={props.characterName}/>
    </div>
  );
}


export default SAN;