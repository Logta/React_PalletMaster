import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
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
      width: '90%',
    },
    numberInfoField: {
      marginLeft: theme.spacing(5),
      marginRight: 'auto',
      width: '50px',
    },
    name: {
      width: '30%',
    },
    head: {
      width: '100%',
    },
    body: {
      width: '100%',
    },
  }),
);

export default function SimpleList(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Table className={classes.table} size="small">
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell className={classes.name} rowSpan={2}>Skill</TableCell>
            <TableCell className={classes.name} align="right">Value</TableCell>
            <TableCell className={classes.name} align="right">Type</TableCell>
            <TableCell className={classes.name} align="right">Work</TableCell>
            <TableCell className={classes.name} align="right">Interest</TableCell>
          </TableRow>
        </TableHead>

          {props.skills.map(row => {
            if(row == null) return;

            return (
              <TableBody className={classes.body} key={row.skillName}>
              <TableRow>
                <TableCell className={classes.name} rowSpan={2} component="th" scope="row">
                  {row.skillName}
                </TableCell>
                <TableCell className={classes.name} align="right">{row.skillValue}</TableCell>
                <TableCell className={classes.name} align="right">{row.skillType}</TableCell>
                <TableCell className={classes.name} align="right">      
                  <TextField
                    id="work"
                    label="Work"
                    type="number"
                    value={row.skillWorkValue}
                    className={classes.numberInfoField}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
                      {if(row.skillValue < 100) 
                        {props.setSkillWorkValue(row.skillName, +event.target.value);}
                      }
                    }
                    placeholder="Work"
                    margin="normal"
                    />
                </TableCell>
                <TableCell className={classes.name} align="right">       
                  <TextField
                    id="interest"
                    label="Interest"
                    type="number"
                    value={row.skillInterestValue}
                    className={classes.numberInfoField}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
                      {if(row.skillValue < 100)
                        {props.setSkillInterestValue(row.skillName, +event.target.value);}
                      }
                    }
                    placeholder="Interest"
                    margin="normal"
                    />
                </TableCell>
            </TableRow>
        </TableBody>
            )
          })}
      </Table>
    </div>
  );
}
