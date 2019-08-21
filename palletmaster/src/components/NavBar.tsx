import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import PalletIcon from '@material-ui/icons/ColorLens';
import FavoriteIcon from '@material-ui/icons/OfflinePin';
import SettingIcon from '@material-ui/icons/Settings';
import CreateIcon from '@material-ui/icons/Create';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      zIndex: 1,
    },
    navBar:{
      position: 'absolute',
      left: 0,
      right: 0,
      margin: 'auto',
      width: 500,
      zIndex: 2,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      //flexGrow: 1,
    },
    login: {
      margin: '0 0 0 auto', 
    }
  })
);

const NavBar: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }

  return (
    
    <AppBar
    className={classes.root}>
    <Toolbar>
      {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <Typography variant="h6" className={classes.title}>
        Palletmaster
      </Typography>

      <BottomNavigation value={value} onChange={handleChange} 
        className={classes.navBar}>
        <BottomNavigationAction
          component={Link}
          to="/home" label="Pallet" value="pallet" icon={<PalletIcon />} />
        <BottomNavigationAction
          component={Link}
          to="/login" label="Login" value="login" icon={<FavoriteIcon />} />
        <BottomNavigationAction
          component={Link}
          to="/setting" label="Setting" value="setting" icon={<SettingIcon />} />
        <BottomNavigationAction
          component={Link}
          to="/create" label="Create" value="create" icon={<CreateIcon />} />
      </BottomNavigation>
      
      <Button color="inherit" className={classes.login}>Login</Button>
    </Toolbar>
  </AppBar>
  );
};

export default NavBar;