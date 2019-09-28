import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

import Skill from '../containers/Skill';
import Character from '../containers/Character';
import Abillity from '../containers/Ability';
import SAN from '../containers/SAN';
import Battle from '../containers/Battle';
import SideBar from '../containers/SideBar';
import Hidden from '@material-ui/core/Hidden';

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      display: 'flex',
      zIndex: 0,
      [theme.breakpoints.up('sm')]: {
        paddingTop: '100px'
      }
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        paddingTop: '100px',
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

interface ResponsiveDrawerProps {
  container?: Element;
  open: boolean;
  setOpen:(open: boolean) => void;
  character: character;
}

export default function ResponsiveDrawer(props: ResponsiveDrawerProps) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  
  function handleDrawerToggle() {
    props.setOpen(!props.open);
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      {/* <Divider /> */}
      <SideBar character={props.character}/>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={props.open}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />   
          <Switch>     
            <Route exact path='/home/skill' component={Skill} container={document.getElementById("app-main")}/>
            <Route path='/home/character' component={Character} />
            <Route path='/home/abillity' component={Abillity} />
            <Route path='/home/san' component={SAN} />
            <Route path='/home/battle' component={Battle} />
          </Switch>  
      </main>
    </div>
  );
}