import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';

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
  characterBackground: string;
  abilityValues: abilityValue;
  characterInfos: characterInfo;
}

type Props = {
  skills: skill[],
  setCharacter: (character: character) => void;
  setSkillWorkValue: (name: string, work: number) => void;
  setSkillInterestValue: (name: string, interest: number) => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    table: {
      width: '100%',
    },
    numberInfoField: {
      marginLeft: theme.spacing(5),
      marginRight: 'auto',
      width: 40,
    },
    dense: {
      marginTop: 19,
    },
  }),
);

export default function SimpleList(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
  <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Skill</TableCell>
            <TableCell align="right">Value</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Work</TableCell>
            <TableCell align="right">Interest</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.skills.map(row => {
            if(row == null) return;

            return (
            <TableRow key={row.skillName}>
              <TableCell component="th" scope="row">
                {row.skillName}
              </TableCell>
              <TableCell align="right">{row.skillValue}</TableCell>
              <TableCell align="right">{row.skillType}</TableCell>
              <TableCell align="right">       
                <TextField
                  id="work"
                  label="Work"
                  type="number"
                  defaultValue={row.skillWorkValue}
                  className={clsx(classes.numberInfoField, classes.dense)}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
                    {props.setSkillWorkValue(row.skillName, +event.target.value);}
                  }
                  placeholder="Work"
                  margin="normal"
                  />
                </TableCell>
              <TableCell align="right">       
                <TextField
                  id="interest"
                  label="Interest"
                  type="number"
                  defaultValue={row.skillWorkValue}
                  className={clsx(classes.numberInfoField, classes.dense)}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
                    {props.setSkillInterestValue(row.skillName, +event.target.value);}
                  }
                  placeholder="Interest"
                  margin="normal"
                  />
                </TableCell>
            </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  );
}
