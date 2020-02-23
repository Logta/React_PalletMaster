import * as React from 'react';
import logo from '../PM_Desine.png';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import PalletIcon from '@material-ui/icons/ColorLens';
//import FavoriteIcon from '@material-ui/icons/OfflinePin';
import SettingIcon from '@material-ui/icons/Settings';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            marginTop: '50px',
            margin: 'auto',
            width: '90%',
            [theme.breakpoints.up('md')]: {
                width: 450,
            },
            padding: theme.spacing(3, 2),
        },
        list: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    })
);

const Main: React.FC = () => {
    const classes = useStyles();
    return (
        <div className="App">
            <br />
            <br />
            <br />
            <img src={logo} alt="" width="25%" height="20%" />
            <br />
            <br />

            <Typography>
                Discordやオフラインセッションでの
                <br />
                キャラクター情報管理ツール{' '}
            </Typography>
            <Paper className={classes.paper}>
                <List className={classes.list}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <PalletIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="ゲーム情報の管理"
                            secondary="Pallet"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <SettingIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Discord Webhookなどの設定"
                            secondary="Setting"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <CreateIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="キャラクター情報の作成"
                            secondary="Create"
                        />
                    </ListItem>
                </List>
            </Paper>
        </div>
    );
};

export default Main;
