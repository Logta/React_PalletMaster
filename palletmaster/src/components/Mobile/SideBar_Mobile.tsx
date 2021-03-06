import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SkillIcon from '@material-ui/icons/Assignment';
import CharacterIcon from '@material-ui/icons/Info';
import AbillityIcon from '@material-ui/icons/Face';
import SANIcon from '@material-ui/icons/OfflineBolt';
import BattleIcon from '@material-ui/icons/Security';
import ImportIcon from '@material-ui/icons/CloudDownload';
import ExportIcon from '@material-ui/icons/CloudUpload';
import SampleIcon from '@material-ui/icons/Person';

import ImportPMJ from '../ImportPMJDialog';
import Divider from '@material-ui/core/Divider';

import { character } from '../../modules/commonType';
import sampleCharaData from '../../SampleCharacterData.json';

type Props = {
    setCharacter: (character: any) => void;
    character: character;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    })
);

const charaDownload = (character: character) => {
    let data = character;

    if (data.characterInfos.characterName !== '') {
        console.log('download start');
        const blob = new Blob([JSON.stringify(data)], {
            type: 'application/json',
        });
        let url = window.URL.createObjectURL(blob);
        let link = document.createElement('a');

        if (url == null) return;

        link.download = data.characterInfos.characterName + '.pmj';
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert({
            message: "Warning, can't download.",
            type: 'warning',
        });
    }
};

const SimpleList = (props: Props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem
                    button
                    component={Link}
                    to="/home/skill"
                    title="技能管理画面"
                >
                    <ListItemIcon>
                        <SkillIcon />
                    </ListItemIcon>
                    <ListItemText primary="Skill" />
                </ListItem>
                <ListItem
                    button
                    component={Link}
                    to="/home/character"
                    title="キャラクター管理画面"
                >
                    <ListItemIcon>
                        <CharacterIcon />
                    </ListItemIcon>
                    <ListItemText primary="Character" />
                </ListItem>
                <ListItem
                    button
                    component={Link}
                    to="/home/abillity"
                    title="能力値ロール画面"
                >
                    <ListItemIcon>
                        <AbillityIcon />
                    </ListItemIcon>
                    <ListItemText primary="Abillity" />
                </ListItem>
                <ListItem
                    button
                    component={Link}
                    to="/home/san"
                    title="SAN値管理画面"
                >
                    <ListItemIcon>
                        <SANIcon />
                    </ListItemIcon>
                    <ListItemText primary="SAN" />
                </ListItem>
                <ListItem
                    button
                    component={Link}
                    to="/home/battle"
                    title="戦闘管理画面"
                >
                    <ListItemIcon>
                        <BattleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Battle" />
                </ListItem>

                <Divider />

                <ListItem
                    button
                    onClick={() => {
                        setOpen(true);
                    }}
                    title="キャラクター情報インポート"
                >
                    <ListItemIcon>
                        <ImportIcon />
                    </ListItemIcon>
                    <ListItemText primary="Import" />
                </ListItem>

                <ListItem
                    button
                    onClick={() => {
                        charaDownload(props.character);
                    }}
                    title="キャラクター情報エクスポート"
                >
                    <ListItemIcon>
                        <ExportIcon />
                    </ListItemIcon>
                    <ListItemText primary="Export" />
                </ListItem>

                <ListItem
                    button
                    onClick={() => {
                        props.setCharacter(sampleCharaData);
                    }}
                    title="サンプル情報の設定"
                >
                    <ListItemIcon>
                        <SampleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sample" />
                </ListItem>
            </List>

            <ImportPMJ
                open={open}
                setOpen={setOpen}
                setCharacter={props.setCharacter}
            />
        </div>
    );
};

export default SimpleList;
