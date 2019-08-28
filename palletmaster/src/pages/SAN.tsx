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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      margin:'auto',
      padding: theme.spacing(3, 2),
      width: 600,
    },
    dense: {
      marginTop: 19,
    },
    numberInfoField: {
      marginLeft: theme.spacing(10),
      marginRight: 'auto',
      width: 120,
    },
    fab: {
      marginLeft: theme.spacing(5),
      margin: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(1),
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

type Props = {
  skills: skill[],
  SAN: number,
  characterName: string,
  setSAN: (san: number) => void,
};

type PropsSAN = {
  SAN: number,
  characterName: string,
  setSAN: (san: number) => void,
};

type PropsIdea = {
  skills: skill[],
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
      url: "",
      user: "",
      value: value,
    });
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
          setOpen(true);
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
        setOpen(true);
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
      url: "",
      user: "",
      value: value,
    });
  }

  return (
    <Paper className = {clsx(classes.paper, classes.dense)}>      

    <br />
    <Button variant="contained" color="primary" className={classes.button}
    onClick = {():void =>{
      let idea: skill | undefined = props.skills.find(s => s.skillName === 'アイデア');
      if(idea == null) return;

      setItems("アイデア", String(idea.skillValue));
      setOpen(true);
      }}>
      SAN Check
    </Button>

    <DiceDialog open={open} setOpen={setOpen} item={item} />
    </Paper>
  );
}

const SAN: React.SFC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <div>
      <SANValue SAN={props.SAN} characterName={props.characterName} setSAN={props.setSAN}/>
      <SANFunc SAN={props.SAN} characterName={props.characterName} setSAN={props.setSAN} />
      <SANIdea skills={props.skills}/>
    </div>
  );
}


export default SAN;