import React from 'react';

import clsx from 'clsx';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
        input: {
            display: 'none',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: 'auto',
            width: '90%',
        },
        numberAbilityField: {
            marginLeft: 0,
            marginRight: 6,
            width: '30%',
        },
        numberInfoField: {
            marginLeft: theme.spacing(1),
            marginRight: 'auto',
            width: '30%',
        },
        dense: {
            marginTop: 19,
        },
        menu: {
            width: 200,
        },
        paper: {
            margin: 'auto',
            padding: theme.spacing(3, 2),
            width: '90%',
        },
        card: {
            margin: 'auto',
            width: '90%',
        },
        margin: {
            margin: theme.spacing(2),
        },
        chip: {
            marginLeft: theme.spacing(2),
            marginRight: 'auto',
        },
    })
);

type Props = {
    character: character;
    setCharacter: (character: character) => void;
};

const Making: React.SFC<Props> = (props: Props) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <h2>Character Create</h2>
            <br />
            <TextField
                id="characterName"
                label="Character Name"
                value={props.character.characterInfos.characterName}
                className={clsx(classes.textField, classes.dense)}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    props.setCharacter({
                        ...props.character,
                        characterInfos: {
                            ...props.character.characterInfos,
                            characterName: event.target.value,
                        },
                    });
                }}
                margin="dense"
            />
            <br />
            <TextField
                id="background"
                label="Background"
                multiline
                rowsMax="4"
                value={props.character.characterBackground}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    props.setCharacter({
                        ...props.character,
                        characterBackground: event.target.value,
                    });
                }}
                className={classes.textField}
                margin="normal"
            />
            <Card className={classes.card}>
                <br />
                infomation value
                <br />
                <Chip
                    color="primary"
                    label="HP"
                    className={classes.chip}
                />{' '}
                {props.character.characterInfos.HP}
                <Chip
                    color="primary"
                    label="MP"
                    className={classes.chip}
                />{' '}
                {props.character.characterInfos.MP}
                <Chip
                    color="primary"
                    label="SAN"
                    className={classes.chip}
                />{' '}
                {props.character.characterInfos.SAN}
                <br />
                <br />
            </Card>
            <br />

            <Card className={classes.card}>
                <TextField
                    id="job"
                    label="job"
                    value={props.character.characterInfos.job}
                    className={clsx(classes.numberAbilityField, classes.dense)}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        props.setCharacter({
                            ...props.character,
                            characterInfos: {
                                ...props.character.characterInfos,
                                job: event.target.value,
                            },
                        });
                    }}
                    placeholder="JOB"
                    margin="normal"
                />
                <TextField
                    id="age"
                    label="age"
                    type="number"
                    value={props.character.characterInfos.age}
                    className={clsx(classes.numberAbilityField, classes.dense)}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        props.setCharacter({
                            ...props.character,
                            characterInfos: {
                                ...props.character.characterInfos,
                                age: +event.target.value,
                            },
                        });
                    }}
                    placeholder="AGE"
                    margin="normal"
                />
                <TextField
                    id="sex"
                    label="sex"
                    value={props.character.characterInfos.sex}
                    className={clsx(classes.numberAbilityField, classes.dense)}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        props.setCharacter({
                            ...props.character,
                            characterInfos: {
                                ...props.character.characterInfos,
                                sex: event.target.value,
                            },
                        });
                    }}
                    placeholder="SEX"
                    margin="normal"
                />
                <br />

                <TextField
                    id="height"
                    label="height"
                    type="number"
                    value={props.character.characterInfos.height}
                    className={clsx(classes.numberAbilityField, classes.dense)}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        props.setCharacter({
                            ...props.character,
                            characterInfos: {
                                ...props.character.characterInfos,
                                height: +event.target.value,
                            },
                        });
                    }}
                    placeholder="HEIGHT"
                    margin="normal"
                />
                <TextField
                    id="weight"
                    label="weight"
                    type="number"
                    value={props.character.characterInfos.weight}
                    className={clsx(classes.numberAbilityField, classes.dense)}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        props.setCharacter({
                            ...props.character,
                            characterInfos: {
                                ...props.character.characterInfos,
                                weight: +event.target.value,
                            },
                        });
                    }}
                    placeholder="WEIGHT"
                    margin="normal"
                />
                <TextField
                    id="origin"
                    label="origin"
                    value={props.character.characterInfos.origin}
                    className={clsx(classes.numberAbilityField, classes.dense)}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        props.setCharacter({
                            ...props.character,
                            characterInfos: {
                                ...props.character.characterInfos,
                                origin: event.target.value,
                            },
                        });
                    }}
                    placeholder="ORIGIN"
                    margin="normal"
                />
                <br />
            </Card>

            <br />
        </Paper>
    );
};
export default Making;
