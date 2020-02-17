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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'fixed',
            zIndex: 1,
        },
        navBar: {
            position: 'absolute',
            left: 0,
            right: 0,
            margin: 'auto',
            width: '50%',
            zIndex: 2,
        },
        menuButton: {
            marginRight: theme.spacing(1),
        },
        title: {
            //flexGrow: 1,
        },
        navBarAction: {
            width: '25%',
        },
    })
);

const NavBar: React.SFC = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }

    return (
        <AppBar className={classes.root}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Palletmaster
                </Typography>

                <BottomNavigation
                    value={value}
                    onChange={handleChange}
                    className={classes.navBar}
                >
                    <BottomNavigationAction
                        className={classes.navBarAction}
                        component={Link}
                        to="/home"
                        label="Pallet"
                        value="pallet"
                        icon={<PalletIcon />}
                    />
                    <BottomNavigationAction
                        className={classes.navBarAction}
                        component={Link}
                        to="/login"
                        label="Login"
                        value="login"
                        icon={<FavoriteIcon />}
                    />
                    <BottomNavigationAction
                        className={classes.navBarAction}
                        component={Link}
                        to="/setting"
                        label="Setting"
                        value="setting"
                        icon={<SettingIcon />}
                    />
                    <BottomNavigationAction
                        className={classes.navBarAction}
                        component={Link}
                        to="/making"
                        label="Create"
                        value="create"
                        icon={<CreateIcon />}
                    />
                </BottomNavigation>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
