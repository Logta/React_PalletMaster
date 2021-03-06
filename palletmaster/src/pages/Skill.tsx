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
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
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
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                minWidth: 500,
            },
            textOverflow: 'ellipsis',
        },
        numberInfoField: {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '75%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(5),
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
        button: {
            marginTop: '15px',
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
        deleteButton: {
            margin: theme.spacing(1),
        },
    })
);

type Props = {
    skills: skill[];
    characterName: string;
    setSkills(skills: skill[]): void;
    discordUrl: string;
};

export default function SimpleTable(props: Props) {
    const classes = useStyles();
    const [category, setCategory] = React.useState<string>('unique');
    const [skill, setSkill] = React.useState<string>('');
    const [value, setValue] = React.useState<number>(0);
    const [open, setOpen] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleClick = (skillName: string): void => {
        var promise = (str: string): Promise<string> => {
            return new Promise(function(resolve, reject) {
                const skillValue = getSkillValue(str);
                resolve(skillValue);
            });
        };
        promise(skillName)
            .then(val => {
                const info = getItem(skillName, val);
                handleDialogOpen(info);
                setItem(info);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const getSkillValue = (skillName: string): string | undefined => {
        const skill: skill | undefined = props.skills.find(
            s => s.skillName === skillName
        );
        if (skill == null) return undefined;
        return String(skill.skillValue);
    };

    function handleChange(event: React.ChangeEvent<{ value: unknown }>) {
        setCategory(event.target.value as string);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleOpen() {
        setOpen(true);
    }

    function handleDialogOpen(info: any) {
        props.discordUrl !== '' ? sendBCDice(info) : setOpenDialog(true);
    }

    const [item, setItem] = React.useState({
        name: '',
        url: '',
        user: '',
        diceValue: '',
    });

    const getItem = (ability: string, value: string): any => {
        return {
            name: ability,
            url: props.discordUrl,
            user: props.characterName,
            diceValue: value,
        };
    };

    const setSkills = (skill: string, value: number): void => {
        const addSkill: skill = {
            skillName: '',
            skillValue: 0,
            skillType: '追加',
            skillUnique: true,
            skillWorkValue: 0,
            skillInterestValue: 0,
            defaultValue: 0,
        };

        const newSkills = JSON.parse(JSON.stringify(props.skills));

        const cSkill =
            newSkills.length == null || newSkills.length === 0
                ? undefined
                : newSkills.find(
                      (s: { skillName: string }) => s.skillName === skill
                  );

        if (cSkill == null) {
            addSkill.skillName = skill;
            addSkill.skillValue = value;
            props.setSkills([...props.skills, addSkill]);
        } else {
            cSkill.skillValue = value;
            props.setSkills(newSkills);
        }
    };

    const deleteSkills = (skill: string): void => {
        props.setSkills(
            props.skills.filter(s => {
                return skill !== s.skillName;
            })
        );
    };

    return (
        <React.Fragment>
            <Paper className={clsx(classes.root)}>
                <br />
                {/* タブレット以上なら隠す -- モバイル画面で表示 */}
                <Hidden smUp implementation="css">
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
                    <br />
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

                    <br />
                    <Button
                        color="primary"
                        variant="contained"
                        className={classes.button}
                        onClick={() => {
                            setSkills(skill, value);
                        }}
                    >
                        add skill
                    </Button>
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

                <InputLabel htmlFor="demo-controlled-open-select">
                    Category
                </InputLabel>
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
                    <MenuItem value={'戦闘'}>Fight</MenuItem>
                    <MenuItem value={'探索'}>Search</MenuItem>
                    <MenuItem value={'知識'}>Wisdom</MenuItem>
                    <MenuItem value={'行動'}>Act</MenuItem>
                    <MenuItem value={'交渉'}>Negotiation</MenuItem>
                    <MenuItem value={'all'}>ALL</MenuItem>
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
                        {props.skills
                            .filter(row => {
                                return (
                                    (category === 'unique' &&
                                        row.skillUnique) ||
                                    (category !== 'unique' &&
                                        row.skillType === category) ||
                                    category === 'all'
                                );
                            })
                            .map((row, index) => {
                                return (
                                    <React.Fragment>
                                        <TableRow key={row.skillName + index}>
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                onClick={() => {
                                                    handleClick(row.skillName);
                                                }}
                                                title={row.skillName}
                                            >
                                                {row.skillName}
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                onClick={() => {
                                                    handleClick(row.skillName);
                                                }}
                                            >
                                                {row.skillValue}
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                onClick={() => {
                                                    handleClick(row.skillName);
                                                }}
                                            >
                                                {row.skillType}
                                            </TableCell>
                                            <IconButton
                                                aria-label="delete"
                                                color="primary"
                                                className={classes.deleteButton}
                                                onClick={_ => {
                                                    deleteSkills(row.skillName);
                                                }}
                                            >
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        </TableRow>
                                    </React.Fragment>
                                );
                            })}
                    </TableBody>
                </Table>

                <DiceDialog
                    open={openDialog}
                    setOpen={setOpenDialog}
                    item={item}
                />
            </Paper>
        </React.Fragment>
    );
}
