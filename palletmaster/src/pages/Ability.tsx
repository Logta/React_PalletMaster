import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import STRIcon from '@material-ui/icons/FlashOn';
import CONIcon from '@material-ui/icons/Favorite';
import POWIcon from '@material-ui/icons/Visibility';
import DEXIcon from '@material-ui/icons/DirectionsRun';
import APPIcon from '@material-ui/icons/Face';
import SIZIcon from '@material-ui/icons/AccessibilityNewOutlined';
import INTIcon from '@material-ui/icons/WbIncandescentOutlined';
import EDUIcon from '@material-ui/icons/LocalLibrary';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core/';

import getAbilityValue from '../modules/getAbilityValue';
import DiceDialog from '../components/DiceDialog';

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

interface Item {
  name: string;
  url: string;
  user: string;
  value: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 500,
      margin: "auto"
    },
    dense: {
      marginTop: 19,
    },
    numberAbilityField: {
      marginLeft: 0,
      marginRight: 6,
      width: 78,
    },
    button: {
      margin: theme.spacing(1),
    },
    paper: {
      margin:'auto',
      width:600,
      padding: theme.spacing(3, 2),
    }
  }),
);

type Props = {
  abilityValues: abilityValue;
};

const Ability: React.SFC<Props> = (props: Props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState("STR");
  const [power, setPower] = React.useState(5);
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
    <div>
      <h2>Ability Role</h2>

      <Paper className = {classes.paper}>
      ability
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction value={"STR"} label="STR" icon={<STRIcon />} />
        <BottomNavigationAction value={"CON"} label="CON" icon={<CONIcon />} />
        <BottomNavigationAction value={"POW"} label="POW" icon={<POWIcon />} />
        <BottomNavigationAction value={"DEX"} label="DEX" icon={<DEXIcon />} />
      </BottomNavigation>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction value={"APP"} label="APP" icon={<APPIcon />} />
        <BottomNavigationAction value={"SIZ"} label="SIZ" icon={<SIZIcon />} />
        <BottomNavigationAction value={"INT"} label="INT" icon={<INTIcon />} />
        <BottomNavigationAction value={"EDU"} label="EDU" icon={<EDUIcon />} />
      </BottomNavigation>

      <TextField
        id="power"
        label="Power"
        type="number"
        defaultValue={power}
        className={clsx(classes.numberAbilityField, classes.dense)}
        onChange={
          (event: React.ChangeEvent<HTMLInputElement>) => {setPower(+event.target.value);}}
        placeholder="Power"
        margin="normal"
        />
        </Paper>

        <br />
        <Button variant="contained" color="primary" className={classes.button}
        onClick = {():void =>{
          setItems(value, getAbilityValue(value, props.abilityValues, power));
          setOpen(true);
          }}>
          Send
        </Button>

        <DiceDialog open={open} setOpen={setOpen} item={item} />
    </div>
  );
}
export default Ability;