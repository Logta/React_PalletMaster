import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import DiceDialog from '../components/DiceDialog';
import clsx from 'clsx';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Hidden from '@material-ui/core/Hidden';

import sendBCDice from '../modules/sendDiscord';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '90%',
      [theme.breakpoints.up('sm')]: {
        width: '75%',
      },
      margin: 'auto',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      width: '90%',
      [theme.breakpoints.up('sm')]: {
      minWidth: 500,
      }
    },
    numberInfoField: {
      marginLeft: theme.spacing(5),
      marginRight: 'auto',
      width: 120,
    },
    fab: {
      marginLeft: "5px",
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(5),
        margin: theme.spacing(1),
      }
    },
    chip: {
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(5),
        margin: theme.spacing(1),
      },
      [theme.breakpoints.down('xs')]: {
        textAlign: 'left',
      }
    }
  }),
);

type Props = {
    skills: skill[];
    characterName: string;
    setSkills(skills: skill[]) : void;
    discordUrl: string;
};

export default function SimpleTable(props: Props) {
  const classes = useStyles();
  const [category, setCategory] = React.useState<string>("unique");
  const [skill, setSkill] = React.useState<string>("");
  const [value, setValue] = React.useState<number>(0);
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClick = (skillName: string ): void =>
  {
    const skill: skill | undefined = props.skills.find(s =>(s.skillName === skillName));
    if(skill == null) return;
    setItems(skillName, String(skill.skillValue));
  }

  function handleChange(event: React.ChangeEvent<{ value: unknown }>) {
    setCategory(event.target.value as string);
  }
  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  function handleDialogOpen(){
    console.log(props.discordUrl );
    console.log();
    (props.discordUrl !== "") ?
    sendBCDice(item):
    setOpenDialog(true);
  }

  const [item, setItem] = React.useState({
    name: "",
    url: "",
    user: "",
    value: "",
  });

  const setItems = (ability: string, value: string): void =>
  {
    setItem({
      name: ability,
      url: props.discordUrl,
      user: props.characterName,
      value: value,
    });
  }

  const setSkills = (skill: string, value: number): void =>
  {
    const addSkill : skill = {
      skillName: "",
      skillValue: 0,
      skillType: "追加",
      skillUnique: true,
      skillWorkValue: 0,
      skillInterestValue: 0,
      defaultValue: 0
  };
  
    const newSkills = JSON.parse(JSON.stringify(props.skills));

    const cSkill = (newSkills.length == null || newSkills.length === 0) ? 
      undefined : 
      newSkills.find((s: { skillName: string; }) => s.skillName === skill);

    if(cSkill == null){
      addSkill.skillName = skill;
      addSkill.skillValue = value;
      props.setSkills([...props.skills, addSkill]);
    }else{
      cSkill.skillValue = value;
      props.setSkills(newSkills);
    }
  }

  return (
  <div>
    <Paper className={clsx(classes.root)}>
      <br />
      {/* タブレット以上なら隠す -- モバイル画面で表示 */}
      <Hidden smUp implementation="css">
        <Chip color="primary" label="Skill" />        
        <TextField
          id="san"
          label="Skill"
          type="text"
          defaultValue={skill}
          className={classes.numberInfoField}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setSkill(event.target.value)}}
          placeholder="Skill"
          margin="normal"
          />      
          <br />
          <Chip color="primary" label="Value" className={classes.chip}　/>    
          <TextField
            id="san"
            label="Value"
            type="number"
            defaultValue={value}
            className={classes.numberInfoField}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setValue(+event.target.value)}}
            placeholder="Value"
            margin="normal"
            />

          <br />
          <Fab color="primary" aria-label="add" className={classes.fab}>
            <AddIcon onClick={() => {setSkills(skill, value)}}/>
          </Fab>
        </Hidden>

      {/* モバイル以下なら隠す -- モバイル画面以外で表示 */}
      <Hidden xsDown implementation="css">
        <Chip color="primary" label="Skill" />        
        <TextField
          id="san"
          label="Skill"
        type="text"
        defaultValue={skill}
        className={classes.numberInfoField}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setSkill(event.target.value)}}
        placeholder="Skill"
        margin="normal"
        />      
        <Chip color="primary" label="Value" className={classes.chip}　/>    
        <TextField
          id="san"
          label="Value"
          type="number"
          defaultValue={value}
          className={classes.numberInfoField}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setValue(+event.target.value)}}
          placeholder="Value"
          margin="normal"
          />
        <Fab color="primary" aria-label="add" className={classes.fab}>
          <AddIcon onClick={() => {setSkills(skill, value)}}/>
        </Fab>
      </Hidden>
      
      <br />
      <br />

      <InputLabel htmlFor="demo-controlled-open-select">Category</InputLabel>
      <Select
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={category}
        onChange={handleChange}
        inputProps={{
          name: 'category',
          id: 'demo-controlled-open-select',
        }}
      >
        <MenuItem value="unique">
          <em>Unique</em>
        </MenuItem>
        <MenuItem value={"戦闘"}>Fight</MenuItem>
        <MenuItem value={"探索"}>Search</MenuItem>
        <MenuItem value={"知識"}>Wisdom</MenuItem>
        <MenuItem value={"行動"}>Act</MenuItem>
        <MenuItem value={"交渉"}>Negotiation</MenuItem>
        <MenuItem value={"all"}>ALL</MenuItem>
      </Select>
      <br />
      <br />
    </Paper>

    <Paper className={classes.root}>


      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Skill</TableCell>
            <TableCell align="right">Value</TableCell>
            <TableCell align="right">Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.skills.map(row => {
            if(category === "unique" && !row.skillUnique){ return };
            if(category !== "unique" && category !== "all" && row.skillType !== category){ return };

            return <TableRow key={row.skillName} 
              onClick={_ => {
                console.log("onclick");
                handleClick(row.skillName)
                handleDialogOpen();}
              }>
              <TableCell component="th" scope="row">
                {row.skillName}
              </TableCell>
              <TableCell align="right">{row.skillValue}</TableCell>
              <TableCell align="right">{row.skillType}</TableCell>
            </TableRow>
          })}
        </TableBody>
      </Table>

      <DiceDialog open={openDialog} setOpen={setOpenDialog} item={item} />
    </Paper>
    </div>
  );
}