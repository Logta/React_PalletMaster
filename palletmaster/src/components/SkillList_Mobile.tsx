import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';

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
  checkSetSkillValue: (value: number, isWork:boolean) => boolean;
};

type PropsRow = {
  row: skill,
  setSkillWorkValue: (name: string, work: number) => void;
  setSkillInterestValue: (name: string, interest: number) => void;
  checkSetSkillValue: (value: number, isWork:boolean) => boolean;
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
      width: '100%',
    },
    name: {
      width: '40%',
    },
    number: {
      width: '25%',
    },
    head: {
      width: '100%',
    },
    body: {
      width: '100%',
    },
  }),
);
const SkillsTableRow: React.SFC<PropsRow> = (props: PropsRow) => {
  const classes = useStyles();
  const [skillWork, setSkillWork] = React.useState<number | undefined>(props.row.skillWorkValue);
  const [skillInterest, setSkillInterest] = React.useState<number>(props.row.skillInterestValue);

  return (
    <React.Fragment>
      <TableCell className={classes.name} rowSpan={2} component="th" scope="row">
        {props.row.skillName}
      </TableCell>
      <TableCell className={classes.number} align="right">{props.row.skillValue}</TableCell>
      <TableCell className={classes.number} align="right">{props.row.skillType}</TableCell>
      <TableCell className={classes.number} align="right">      
        <TextField
          id="work"
          label="Work"
          type="number"
          value={skillWork}
          className={classes.numberInfoField}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if(props.checkSetSkillValue(props.row.defaultValue + props.row.skillInterestValue + +event.target.value , true) &&
              +event.target.value >= 0) 
              setSkillWork(+event.target.value);
            }
          }
          onBlur={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            if(props.checkSetSkillValue(props.row.defaultValue + props.row.skillInterestValue + +event.target.value , true)) 
              props.setSkillWorkValue(props.row.skillName, +event.target.value);
            }
          }
          placeholder="Work"
          margin="normal"
          />
      </TableCell>
      <TableCell className={classes.number} align="right">       
        <TextField
          id="interest"
          label="Interest"
          type="number"
          value={skillInterest}
          className={classes.numberInfoField}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
            {if(props.checkSetSkillValue(props.row.defaultValue + props.row.skillWorkValue + +event.target.value , false) &&
              +event.target.value >= 0) 
              setSkillInterest(+event.target.value);
            }
          }
          onBlur={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
            {if(props.checkSetSkillValue(props.row.defaultValue + props.row.skillWorkValue + +event.target.value , false) &&
              +event.target.value >= 0) 
              props.setSkillInterestValue(props.row.skillName, +event.target.value);
            }
          }
          placeholder="Interest"
          margin="normal"
          />
      </TableCell>
    </React.Fragment>
  );
}

export default function SimpleList(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Table className={classes.table} size="small">
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell className={classes.name} rowSpan={2}>Skill</TableCell>
            <TableCell className={classes.number} align="right">Value</TableCell>
            <TableCell className={classes.number} align="right">Type</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.number} align="right">Work</TableCell>
            <TableCell className={classes.number} align="right">Interest</TableCell>
          </TableRow>
        </TableHead>

          {props.skills.map(row => {
            if(row == null) return;

            return (
              <TableBody className={classes.body} key={row.skillName}>
                <TableRow>
                  <SkillsTableRow 
                        setSkillWorkValue= {props.setSkillWorkValue}
                        setSkillInterestValue= {props.setSkillInterestValue}
                        row= {row}
                        checkSetSkillValue={props.checkSetSkillValue}
                    />
                  </TableRow>
              </TableBody>
            )
          })}
      </Table>
    </div>
  );
}
