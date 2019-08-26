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
};

const Ability: React.SFC<Props> = (props: Props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [power, setPower] = React.useState(5);
  
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
        <BottomNavigationAction label="STR" icon={<STRIcon />} />
        <BottomNavigationAction label="CON" icon={<CONIcon />} />
        <BottomNavigationAction label="POW" icon={<POWIcon />} />
        <BottomNavigationAction label="DEX" icon={<DEXIcon />} />
      </BottomNavigation>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction value={4} label="APP" icon={<APPIcon />} />
        <BottomNavigationAction value={5} label="SIZ" icon={<SIZIcon />} />
        <BottomNavigationAction value={6} label="INT" icon={<INTIcon />} />
        <BottomNavigationAction value={7} label="EDU" icon={<EDUIcon />} />
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
        onClick = {():void =>{console.log(value * power)}}>
          Send
        </Button>
    </div>
  );
}
export default Ability;