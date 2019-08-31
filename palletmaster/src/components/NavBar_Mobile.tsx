import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import DehazeIcon from '@material-ui/icons/Dehaze';
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
      width: '100%',
      zIndex: 2,
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      //flexGrow: 1,
    }
  })
);

type Props = {
  open : boolean;
  setOpen: (open: boolean) => void;
};

const NavBar: React.SFC<Props> = (props: Props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }

  return (
    <AppBar
    className={classes.root}>
    <Toolbar> 
      <Button className={classes.title} onClick={()=>{props.setOpen(!props.open)}}>
        <DehazeIcon />
      </Button>
      <Typography variant="h6" className={classes.title}>
        Palletmaster
      </Typography>
    </Toolbar>
    <Toolbar>

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
          to="/making" label="Create" value="create" icon={<CreateIcon />} />
      </BottomNavigation>
    </Toolbar>
  </AppBar>
  );
};

export default NavBar;