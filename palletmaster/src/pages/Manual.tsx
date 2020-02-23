import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';

import SkillIcon from '@material-ui/icons/Assignment';
import CharacterIcon from '@material-ui/icons/Info';
import AbilityIcon from '@material-ui/icons/Face';
import SANIcon from '@material-ui/icons/OfflineBolt';
import BattleIcon from '@material-ui/icons/Security';
import ImportIcon from '@material-ui/icons/CloudDownload';
import ExportIcon from '@material-ui/icons/CloudUpload';
import SampleIcon from '@material-ui/icons/Person';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            margin: 'auto',
            width: '90%',
            [theme.breakpoints.up('md')]: {
                width: 700,
            },
            padding: theme.spacing(3, 2),
        },
        mobile: {
            paddingTop: '100',
        },
        list: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    })
);
const Manual: React.SFC = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Paper className={classes.paper}>
                <Hidden smUp implementation="css"></Hidden>
                <Hidden xsDown implementation="css"></Hidden>
                <List className={classes.list}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <SkillIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="技能情報を管理するための画面"
                            secondary="Skill"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <CharacterIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="キャラクター情報を管理するための画面"
                            secondary="Character"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <AbilityIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="能力値ロールを実施するための画面"
                            secondary="Ability"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <SANIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="SAN値情報を管理する画面"
                            secondary="SAN"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BattleIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="戦闘情報を管理する画面"
                            secondary="Battle"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImportIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary=".pmjファイルをインポートします"
                            secondary="Import"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ExportIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="キャラクターデータを.pmjファイルとしてエクスポートします"
                            secondary="Export"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <SampleIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="手軽い使用いただくためのサンプルデータをセットします"
                            secondary="Sample"
                        />
                    </ListItem>
                </List>
            </Paper>
        </React.Fragment>
    );
};
export default Manual;
