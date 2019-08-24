import { setCharacter, SetCharacterAction } from './SetCharacter';
import { setSkills, SetSkillsAction } from './SetSkills';

type Actions
    = SetCharacterAction | 
    SetSkillsAction;

type skill = {
    skillName: string,
    skillValue: number,
    skillType: string,
    skillUnique: boolean,
    skillWorkValue: number,
    skillInterestValue: number,
    defaultValue: number
};

export type State = {    // ページ全体で保持しとくべき情報はTodoの配列くらい
    character: {
        skills: skill[],
        characterBackground: string | undefined,
        abilityValues: {
            STR: number,
            CON: number,
            POW: number,
            DEX: number,
            APP: number,
            SIZ: number,
            INT: number,
            EDU: number
        },
        characterInfos: {
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
        },
    };
};

const init = (): State => {
    return {
        character: {
            skills: [{
                skillName: "",
                skillValue: 0,
                skillType: "",
                skillUnique: false,
                skillWorkValue: 0,
                skillInterestValue: 0,
                defaultValue: 0
            }]
            ,
            characterBackground: "",
            abilityValues: {
                STR: 0,
                CON: 0,
                POW: 0,
                DEX: 0,
                APP: 0,
                SIZ: 0,
                INT: 0,
                EDU: 0
            },
            characterInfos: {
                characterName: "",
                HP: 0,
                MP: 0,
                SAN: 0,
                damageBonus: "",
                job: "",
                age: 0,
                sex: "",
                height: 0,
                weight: 0,
                origin: ""
            }
        }
    };
};

export const reducer = (state: State = init(), action: Actions) => {
    switch (action.type) {
    case 'SET_CHARACTER':
        return{
            character: action.payload.character
        }
    case 'SET_SKILLS':
        return{
            character:
            {
                ...state,
                skills: action.payload.skills,
            }
        }
    default:
        return state;
    }
};

export const actionCreator = {
    setCharacter,
    setSkills
};