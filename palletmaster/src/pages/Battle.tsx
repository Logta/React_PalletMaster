import React from 'react';
import clsx from 'clsx';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Hidden from '@material-ui/core/Hidden';

import DiceDialog from '../components/DiceDialog';
import SnackBar from '../components/SnackBar';
import sendBCDice from '../modules/sendDiscord';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '75%',
            margin: 'auto',
            marginTop: theme.spacing(3),
            overflowX: 'auto',
        },
        table: {
            width: '90%',
            [theme.breakpoints.up('sm')]: {
                minwidth: 500,
            },
        },
        numberInfoField: {
            marginLeft: theme.spacing(5),
            marginRight: 'auto',
            width: '20%',
            [theme.breakpoints.up('sm')]: {
                width: 120,
            },
        },
        fab: {
            marginLeft: '5px',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(5),
                margin: theme.spacing(1),
            },
        },
        chip: {
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(5),
                margin: theme.spacing(1),
            },
            [theme.breakpoints.down('xs')]: {
                textAlign: 'left',
            },
        },
    })
);

type Props = {
    skills: skill[];
    hp: number;
    damageBonus: string;
    setSkills(skills: skill[]): void;
    setHP(hp: number): void;
    discordUrl: string;
    characterName: string;
};

export default function SimpleTable(props: Props) {
    const classes = useStyles();
    const [skill, setSkill] = React.useState<string>('');
    const [value, setValue] = React.useState<number>(0);
    const [HPDiff, setHPDiff] = React.useState<number>(0);
    const [openDialog, setOpenDialog] = React.useState<boolean>(false);
    const [openSnack, setOpenSnack] = React.useState<boolean>(false);

    const handleClick = (skillName: string): void => {
        const skill: skill | undefined = props.skills.find(
            s => s.skillName === skillName
        );
        if (skill == null) return;
        setItems(skillName, String(skill.skillValue));
    };

    const handleClick = (skillName: string): void => {
        const skill: skill | undefined = props.skills.find(
            s => s.skillName === skillName
        );
        if (skill == null) return;
        setItems(skillName, String(skill.skillValue));
    };

    const [item, setItem] = React.useState({
        name: '',
        url: '',
        user: '',
        value: '',
    });
}

const handleOpenDialog = () => {
    props.discordUrl !== '' ? sendBCDice(item) : setOpenDialog(true);
};

const handleOpenSnack = () => {
    props.setHP(props.hp + HPDiff);
    if (HPDiff / props.hp <= -0.5) setOpenSnack(true);
};

const setSkills = (skill: string, value: number): void => {
    const addSkill: skill = {
        skillName: '',
        skillValue: 0,
        skillType: '戦闘',
        skillUnique: true,
        skillWorkValue: 0,
        skillInterestValue: 0,
        defaultValue: 0,
    };

    function handleOpen() {
        props.discordUrl !== '' ? sendBCDice(item) : setOpenDialog(true);
    }

    return (
        <div>
            <Paper className={clsx(classes.root)}>
                <br />
                {/* タブレット以上なら隠す -- モバイル画面で表示 */}
                <Hidden smUp implementation="css">
                    <Chip color="primary" label="Skill" />
                    <TextField
                        id="skill"
                        label="Skill"
                        type="text"
                        defaultValue={skill}
                        className={classes.numberInfoField}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setSkill(event.target.value);
                        }}
                        placeholder="Skill"
                        margin="normal"
                    />
                    <br />
                    <Chip
                        color="primary"
                        label="Value"
                        className={classes.chip}
                    />
                    <TextField
                        id="value"
                        label="Value"
                        type="number"
                        defaultValue={value}
                        className={classes.numberInfoField}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setValue(+event.target.value);
                        }}
                        placeholder="Value"
                        margin="normal"
                    />
                    const newSkills = JSON.parse(JSON.stringify(props.skills));
                    {/* モバイル以下なら隠す -- モバイル画面以外で表示 */}
                    <Hidden xsDown implementation="css">
                        <Chip color="primary" label="Skill" />
                        <TextField
                            id="skill"
                            label="Skill"
                            type="text"
                            defaultValue={skill}
                            className={classes.numberInfoField}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setSkill(event.target.value);
                            }}
                            placeholder="Skill"
                            margin="normal"
                        />
                        <Chip
                            color="primary"
                            label="Value"
                            className={classes.chip}
                        />
                        <TextField
                            id="value"
                            label="Value"
                            type="number"
                            defaultValue={value}
                            className={classes.numberInfoField}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setValue(+event.target.value);
                            }}
                            placeholder="Value"
                            margin="normal"
                        />
                        <Fab
                            color="primary"
                            aria-label="add"
                            className={classes.fab}
                        >
                            <AddIcon
                                onClick={() => {
                                    setSkills(skill, value);
                                }}
                            />
                        </Fab>
                    </Hidden>
                    <br />
                    <br />
                    <Chip
                        color="primary"
                        label="HP"
                        className={classes.chip}
                    />{' '}
                    {props.hp}
                    <TextField
                        id="hp"
                        label="HP"
                        type="number"
                        defaultValue={HPDiff}
                        className={classes.numberInfoField}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setHPDiff(+event.target.value);
                        }}
                        placeholder="Value"
                        margin="normal"
                    />
                    <Button
                        variant="contained"
                        color="primary" //className={classes.button}
                        onClick={handleOpenSnack}
                    >
                        +/-
                    </Button>
                    <br />
                    <Fab
                        color="primary"
                        aria-label="add"
                        className={classes.fab}
                    >
                        <AddIcon
                            onClick={() => {
                                setSkills(skill, value);
                            }}
                        />
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
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setSkill(event.target.value);
                        }}
                        placeholder="Skill"
                        margin="normal"
                    />
                    <Chip
                        color="primary"
                        label="Value"
                        className={classes.chip}
                    />
                    <TextField
                        id="san"
                        label="Value"
                        type="number"
                        defaultValue={value}
                        className={classes.numberInfoField}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setValue(+event.target.value);
                        }}
                        placeholder="Value"
                        margin="normal"
                    />
                    <Fab
                        color="primary"
                        aria-label="add"
                        className={classes.fab}
                    >
                        <AddIcon
                            onClick={() => {
                                setSkills(skill, value);
                            }}
                        />
                    </Fab>
                </Hidden>
                <br />
                <br />
                <Chip
                    color="primary"
                    label="HP"
                    className={classes.chip}
                />{' '}
                {props.hp}
                <TextField
                    id="hp"
                    label="HP"
                    type="number"
                    defaultValue={HPDiff}
                    className={classes.numberInfoField}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setHPDiff(+event.target.value);
                    }}
                    placeholder="Value"
                    margin="normal"
                />
                <Button
                    variant="contained"
                    color="primary" //className={classes.button}
                    onClick={(): void => {
                        props.setHP(props.hp + HPDiff);
                    }}
                >
                    +/-
                </Button>
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
                            if (row.skillType !== '戦闘') {
                                return;
                            }

                            return (
                                <TableRow
                                    key={row.skillName}
                                    onClick={_ => {
                                        console.log('onclick');
                                        handleClick(row.skillName);
                                        handleOpenDialog();
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.skillName}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.skillValue}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.skillType}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>

                <DiceDialog
                    open={openDialog}
                    setOpen={setOpenDialog}
                    item={item}
                />
                <SnackBar
                    open={openSnack}
                    setOpen={setOpenSnack}
                    message={'ショックロールをしてください'}
                />
            </Paper>
        </div>
    );
};
