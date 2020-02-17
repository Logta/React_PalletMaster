import React, { Dispatch } from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

import SkillList from '../components/SkillList';
import Button from '@material-ui/core/Button';

import SkillPoint from '../components/SkillPoint';

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
        numberInfoField: {
            marginLeft: theme.spacing(1),
            marginRight: 'auto',
            width: '90%',
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
            marginTop: '10px',
            marginBottom: '10px',
            marginLeft: theme.spacing(5),
            marginRight: 'auto',
        },
    })
);

const initSkill = (): skill => {
    return {
        skillName: '',
        skillValue: 0,
        skillType: '',
        skillUnique: false,
        skillWorkValue: 0,
        skillInterestValue: 0,
        defaultValue: 0,
    };
};

type Props = {
    character: character;
    setCharacter: (character: character) => void;
};

const skillTypes = [
    ['戦闘', 'Fight'],
    ['探索', 'Search'],
    ['行動', 'Act'],
    ['交渉', 'Negotiate'],
    ['知識', 'Wisdom'],
];

const getSkillIndex = (type: string): number => {
    if (type === '戦闘') return 0;
    if (type === '探索') return 1;
    if (type === '行動') return 2;
    if (type === '交渉') return 3;
    if (type === '知識') return 4;
    return -1;
};

const setSkillValue = (
    name: string,
    value: number,
    remainPoint: number,
    character: character,
    interest: boolean,
    setCharacter: (character: character) => void
) => {
    if (value < 0 || remainPoint <= 0) return;
    const newSkills = JSON.parse(JSON.stringify(character.skills));

    const cSkill =
        newSkills.length == null || newSkills.length === 0
            ? undefined
            : newSkills.find(
                  (s: { skillName: string }) => s.skillName === name
              );

    if (cSkill == null) return;
    if (interest) cSkill.skillInterestValue = value;
    else cSkill.skillWorkValue = value;
    cSkill.skillValue =
        cSkill.defaultValue + cSkill.skillInterestValue + cSkill.skillWorkValue;
    setCharacter({
        ...character,
        skills: newSkills,
    });
};

const Making: React.SFC<Props> = (props: Props) => {
    const classes = useStyles();
    const [openTable, setOpenTable] = React.useState<boolean[]>(
        skillTypes.map(s => {
            return false;
        })
    );

    const checkSetSkillValue = (skillValue: number, isWork: boolean) => {
        if (skillValue < 0 || skillValue > 100) return false;
        if (isWork && getRemainingWorkPoint() <= 0) return false;
        if (!isWork && getRemainingInterestPoint() <= 0) return false;
        return true;
    };

    const getWorkPoint = () => {
        if (props.character.skills.length === 0) return 0;
        return props.character.skills
            .map(s => s.skillWorkValue)
            .reduce(function(total, data) {
                return total + data;
            });
    };

    const getInterestPoint = () => {
        if (props.character.skills.length === 0) return 0;
        return props.character.skills
            .map(s => s.skillInterestValue)
            .reduce(function(total, data) {
                return total + data;
            });
    };

    const getRemainingWorkPoint = () => {
        return props.character.abilityValues.EDU * 20 - getWorkPoint();
    };

    const getRemainingInterestPoint = () => {
        return props.character.abilityValues.INT * 10 - getInterestPoint();
    };

    const getSkills = (type: string): skill[] => {
        const s = props.character.skills.filter(e => e.skillType === type);
        if (s == null) return [initSkill()];
        return s;
    };

    return (
        <Paper className={classes.paper}>
            <h2>Character Create</h2>
            <SkillPoint
                workPoint={getRemainingWorkPoint()}
                interestPoint={getRemainingInterestPoint()}
            />

            {skillTypes.map(element => {
                return (
                    <div key={element[1]}>
                        <br />

                        <Button
                            variant="contained"
                            onClick={() => {
                                const newOpen: boolean[] = { ...openTable };
                                newOpen[getSkillIndex(element[0])] = !newOpen[
                                    getSkillIndex(element[0])
                                ];
                                setOpenTable(newOpen);
                            }}
                        >
                            {element[1]}
                        </Button>

                        <br />
                        <Card>
                            {openTable[getSkillIndex(element[0])] && (
                                <SkillList
                                    skills={getSkills(element[0])}
                                    setCharacter={props.setCharacter}
                                    setSkillInterestValue={(
                                        name: string,
                                        value: number
                                    ) => {
                                        setSkillValue(
                                            name,
                                            value,
                                            getRemainingInterestPoint(),
                                            props.character,
                                            true,
                                            props.setCharacter
                                        );
                                    }}
                                    setSkillWorkValue={(
                                        name: string,
                                        value: number
                                    ) => {
                                        setSkillValue(
                                            name,
                                            value,
                                            getRemainingWorkPoint(),
                                            props.character,
                                            false,
                                            props.setCharacter
                                        );
                                    }}
                                    checkSetSkillValue={checkSetSkillValue}
                                />
                            )}
                        </Card>
                    </div>
                );
            })}
        </Paper>
    );
};
export default Making;
