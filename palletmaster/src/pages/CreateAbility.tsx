import React from 'react';

import clsx from 'clsx';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

import ShakeNDNDice from '../modules/shakeNDNDice';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Hidden from '@material-ui/core/Hidden';

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
            width: 360,
        },
        numberAbilityField: {
            marginLeft: 0,
            marginRight: 6,
            width: '20%',
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
            width: '80%',
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

const setAbilityToDice = (character: character): character => {
    interface ItemNDN {
        count: number;
        number: number;
    }
    const itemNDN: ItemNDN = {
        count: 3,
        number: 6,
    };

    const newCharacter = JSON.parse(JSON.stringify(character));

    newCharacter.abilityValues.STR = +ShakeNDNDice(itemNDN).result - 1;
    const CON = +ShakeNDNDice(itemNDN).result - 1;
    newCharacter.abilityValues.CON = CON;
    const POW = +ShakeNDNDice(itemNDN).result - 1;
    newCharacter.abilityValues.POW = POW;
    newCharacter.abilityValues.DEX = +ShakeNDNDice(itemNDN).result - 1;
    newCharacter.abilityValues.APP = +ShakeNDNDice(itemNDN).result - 1;
    newCharacter.abilityValues.EDU = +ShakeNDNDice(itemNDN).result + 3 - 1;

    itemNDN.count = 2;
    const SIZ = +ShakeNDNDice(itemNDN).result + 6 - 1;
    newCharacter.abilityValues.SIZ = SIZ;
    newCharacter.abilityValues.INT = +ShakeNDNDice(itemNDN).result + 6 - 1;

    newCharacter.characterInfos.HP = Math.ceil((CON + SIZ) / 2);
    newCharacter.characterInfos.MP = POW;
    newCharacter.characterInfos.SAN = POW * 5;

    return newCharacter;
};

type Props = {
    character: character;
    setCharacter: (character: character) => void;
};

const Making: React.SFC<Props> = (props: Props) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <h2>Character Create</h2>

            <Button
                variant="contained"
                color="primary" //className={classes.button}
                onClick={(): void => {
                    props.setCharacter(setAbilityToDice(props.character));
                }}
            >
                Dice
            </Button>
            <br />
            <br />

            <Card className={classes.card}>
                <br />
                physical value
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
                <Hidden smUp implementation="css">
                    <br />
                </Hidden>
                <Chip color="primary" label="SAN" className={classes.chip} />{' '}
                {props.character.characterInfos.SAN}
                <br />
                <br />
            </Card>
            <br />

            <Card className={classes.card}>
                <br />
                ability value
                <br />
                <TextField
                    id="str"
                    label="STR"
                    type="number"
                    value={props.character.abilityValues.STR}
                    className={clsx(classes.numberAbilityField, classes.dense)}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        props.setCharacter({
                            ...props.character,
                            abilityValues: {
                                ...props.character.abilityValues,
                                STR: +event.target.value,
                            },
                        });
                    }}
                    placeholder="STR"
                    margin="normal"
                />
                <TextField
                    id="con"
                    label="CON"
                    type="number"
                    value={props.character.abilityValues.CON}
                    className={clsx(classes.numberAbilityField, classes.dense)}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        props.setCharacter({
                            ...props.character,
                            abilityValues: {
                                ...props.character.abilityValues,
                                CON: +event.target.value,
                            },
                            characterInfos: {
                                ...props.character.characterInfos,
                                HP: Math.ceil(
                                    (+event.target.value +
                                        props.character.abilityValues.SIZ) /
                                        2
                                ),
                            },
                        });
                    }}
                    placeholder="CON"
                    margin="normal"
                />
                <TextField
                    id="pow"
                    label="POW"
                    type="number"
                    value={props.character.abilityValues.POW}
                    className={clsx(classes.numberAbilityField, classes.dense)}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        props.setCharacter({
                            ...props.character,
                            abilityValues: {
                                ...props.character.abilityValues,
                                POW: +event.target.value,
                            },
                            characterInfos: {
                                ...props.character.characterInfos,
                                MP: +event.target.value,
                                SAN: +event.target.value * 5,
                            },
                        });
                    }}
                    placeholder="POW"
                    margin="normal"
                />
                <TextField
                    id="dex"
                    label="DEX"
                    type="number"
                    value={props.character.abilityValues.DEX}
                    className={clsx(classes.numberAbilityField, classes.dense)}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        props.setCharacter({
                            ...props.character,
                            abilityValues: {
                                ...props.character.abilityValues,
                                DEX: +event.target.value,
                            },
                        });
                    }}
                    placeholder="DEX"
                    margin="normal"
                />
                <br />
                <TextField
                    id="app"
                    label="APP"
                    type="number"
                    value={props.character.abilityValues.APP}
                    className={clsx(classes.numberAbilityField, classes.dense)}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        props.setCharacter({
                            ...props.character,
                            abilityValues: {
                                ...props.character.abilityValues,
                                APP: +event.target.value,
                            },
                        });
                    }}
                    placeholder="APP"
                    margin="normal"
                />
                <TextField
                    id="siz"
                    label="SIZ"
                    type="number"
                    value={props.character.abilityValues.SIZ}
                    className={clsx(classes.numberAbilityField, classes.dense)}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        props.setCharacter({
                            ...props.character,
                            abilityValues: {
                                ...props.character.abilityValues,
                                SIZ: +event.target.value,
                            },
                            characterInfos: {
                                ...props.character.characterInfos,
                                HP: Math.ceil(
                                    (+event.target.value +
                                        props.character.abilityValues.CON) /
                                        2
                                ),
                            },
                        });
                    }}
                    placeholder="SIZ"
                    margin="normal"
                />
                <TextField
                    id="int"
                    label="INT"
                    type="number"
                    value={props.character.abilityValues.INT}
                    className={clsx(classes.numberAbilityField, classes.dense)}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        props.setCharacter({
                            ...props.character,
                            abilityValues: {
                                ...props.character.abilityValues,
                                INT: +event.target.value,
                            },
                        });
                    }}
                    placeholder="INT"
                    margin="normal"
                />
                <TextField
                    id="edu"
                    label="EDU"
                    type="number"
                    value={props.character.abilityValues.EDU}
                    className={clsx(classes.numberAbilityField, classes.dense)}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        props.setCharacter({
                            ...props.character,
                            abilityValues: {
                                ...props.character.abilityValues,
                                EDU: +event.target.value,
                            },
                        });
                    }}
                    placeholder="EDU"
                    margin="normal"
                />
                <br />
            </Card>

            <br />
            <br />

            <Card className={classes.card}>
                <br />
                role value
                <br />
                <Chip
                    color="primary"
                    label="回避"
                    className={classes.chip}
                />{' '}
                {props.character.abilityValues.DEX * 2}
                <Chip
                    color="primary"
                    label="アイデア"
                    className={classes.chip}
                />{' '}
                {props.character.abilityValues.INT * 5}
                <Hidden smUp implementation="css">
                    <br />
                </Hidden>
                <Chip color="primary" label="知識" className={classes.chip} />{' '}
                {props.character.abilityValues.EDU * 5}
                <Chip
                    color="primary"
                    label="幸運"
                    className={classes.chip}
                />{' '}
                {props.character.abilityValues.POW * 5}
                <br />
                <br />
            </Card>
            <br />
        </Paper>
    );
};
export default Making;
