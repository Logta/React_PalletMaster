import React from 'react';

import clsx from 'clsx';
import firebase from '../modules/firebase'

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
      width:'50%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      }
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width:'50%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      }
    },
    paper: {
      margin:'auto',
      width:'90%',
      [theme.breakpoints.up('md')]: {
        width:450,
      },
      padding: theme.spacing(3, 2),
    },
    mobile:{
      paddingTop: '100'
    },
  }),
);

type Props = {
  discordUrl: string;
  diceUrl: string;
  setUserName: (url: string) => void;
  setPassword: (url: string) => void;
};

const Login: React.SFC<Props> = (props: Props) => {
  const classes = useStyles();
  const [userName, setUserName] = React.useState(props.discordUrl);
  const [password, setPassword] = React.useState(props.diceUrl);
  const [value, setValue] = React.useState('recents');

  const login = (email: string, password: string) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      ()=>{setValue('login');}
    );
  }

  const logout = ():void =>{
    firebase.auth().signOut().then(
      ()=>{setValue('logout');
    });
  }

  return (
    <div id='login'>
    <Hidden smUp implementation="css">
      <br className={classes.mobile}/>
    </Hidden>
    {(() => {
        const user = firebase.auth().currentUser;
        if (user) {
            return <div>
              { value }
              <Button variant="contained" color="primary" className={classes.button}
              onClick = {():void =>{logout()}}>
                Logout
              </Button>
            </div>;
        }
        return <div>
        <h2>Login</h2>
        <Paper className = {classes.paper}>
        <TextField
          id="userName"
          label="User Name"
          defaultValue={props.diceUrl}
          className={clsx(classes.textField, classes.dense)}
          onChange = {(event: React.ChangeEvent<HTMLInputElement>) => {setUserName(event.target.value);}}
          margin="dense"
        /><br />
        <TextField
          id="password"
          label="Password"
          type="password"
          defaultValue={props.discordUrl}
          className={clsx(classes.textField, classes.dense)}
          onChange = {(event: React.ChangeEvent<HTMLInputElement>) => {setPassword(event.target.value);}}
          margin="dense"
        />
        <br />
        <Button variant="contained" color="primary" className={classes.button}
        onClick = {():void =>{login(userName, password)}}>
          Login
        </Button>
        </Paper>
        </div>;
    })()}

    </div>
  );
}
export default Login;