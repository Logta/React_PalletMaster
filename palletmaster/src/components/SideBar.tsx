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

import ImportPMJ from './ImportPMJDialog';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';

type skill = {
  skillName: string,
  skillValue: number,
  skillType: string,
  skillUnique: boolean,
  skillWorkValue: number,
  skillInterestValue: number,
  defaultValue: number
};

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

type characterInfo = {
  characterName: string,
  HP: number,
  MP: number,
  SAN: number,
  damageBonus: string,
  job: string,
  age: number,
  sex: string,
  height: number,
  weight: number,
  origin: string
};

type character = {
  skills: skill[];
  characterBackground: string | undefined;
  abilityValues: abilityValue;
  characterInfos: characterInfo;
}

type Props = {
  setCharacter: (character: any) => void,
  character: character,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

const charaDownload = (character: character) => {
  let data = character;

  if(data.characterInfos.characterName != ""){
    console.log("download start");
    const blob = new Blob([JSON.stringify(data)], {type: 'application/json'});
    let url = window.URL.createObjectURL(blob);
    let link = document.createElement('a');

    if(url == null) return;

    link.download = data.characterInfos.characterName + '.pmj';
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }else{
    alert({
      message: 'Warning, can\'t download.',
      type: 'warning'
    });
  }
}    

export default function SimpleList(props: Props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <Hidden smUp implementation="css">
          <ListItem>
            <ListItemText primary="" />
          </ListItem>
          <ListItem>
            <ListItemText primary="" />
          </ListItem>
        </Hidden>
        <ListItem button 
          component={Link}
          to="/home/skill">
          <ListItemIcon>
            <SkillIcon />
          </ListItemIcon>
          <ListItemText primary="Skill" />
        </ListItem>
        <ListItem button
          component={Link}
          to="/home/character">
          <ListItemIcon>
            <CharacterIcon />
          </ListItemIcon>
          <ListItemText primary="Character" />
        </ListItem>
        <ListItem button
          component={Link}
          to="/home/abillity">
          <ListItemIcon>
            <AbillityIcon />
          </ListItemIcon>
          <ListItemText primary="Abillity" />
        </ListItem>
        <ListItem button
          component={Link}
          to="/home/san">
          <ListItemIcon>
            <SANIcon />
          </ListItemIcon>
          <ListItemText primary="SAN" />
        </ListItem>
        <ListItem button
          component={Link}
          to="/home/battle">
          <ListItemIcon>
            <BattleIcon />
          </ListItemIcon>
          <ListItemText primary="Battle" />
        </ListItem>

        <Divider />

        <ListItem button
          onClick={()=>{
            setOpen(true);
          }}>
          <ListItemIcon>
            <ImportIcon />
          </ListItemIcon>
          <ListItemText primary="Import" />
        </ListItem>

        <ListItem button
          onClick={()=>{
            charaDownload(props.character);
          }}>
          <ListItemIcon>
            <ExportIcon />
          </ListItemIcon>
          <ListItemText primary="Export" />
        </ListItem>
      </List>

      <ImportPMJ open={open} setOpen={setOpen} setCharacter={props.setCharacter}/>
    </div>
  );
}
