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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
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
      </List>
    </div>
  );
}
