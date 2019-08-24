import { setCharacter, SetCharacterAction } from './SetCharacter';
import { setSkills, SetSkillsAction } from './SetSkills';
import { setAbilityValues, SetAbilityValuesAction } from './SetAbilityValues';
import { setCharacterInfos, SetCharacterInfosAction } from './SetCharacterInfos';
import { setCharacterName, SetCharacterNameAction } from './SetCharacterName';
import { setHP, SetHPAction } from './SetHP';
import { setMP, SetMPAction } from './SetMP';
import { setSAN, SetSANAction } from './SetSAN';
import { setCharacterBackground, SetCharacterBackgroundAction } from './SetCharacterBackground';
import { Reducer } from 'redux';

type Actions
    = SetCharacterAction | 
    SetSkillsAction| 
    SetAbilityValuesAction| 
    SetCharacterInfosAction| 
    SetCharacterNameAction| 
    SetHPAction| 
    SetMPAction|
    SetSANAction|
    SetCharacterBackgroundAction ;

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

export type State = {    // ページ全体で保持しとくべき情報はTodoの配列くらい
    character: {
        skills: skill[],
        characterBackground: string | undefined,
        abilityValues: abilityValue,
        characterInfos: characterInfo,
    };
};

const init = (): State => {
    return {
        character: {
            skills: [],
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

export const reducer: Reducer<any, Actions> = (state = init(), action) => {
    switch (action.type) {
        case 'SET_CHARACTER':
            return{
                character: action.payload.character,
            }
        case 'SET_SKILLS':
            return{
                character:
                {
                    ...state,
                    skills: action.payload.skills,
                }
            }
        case 'SET_ABILITY_VALUES':
            return{
                character:
                {
                    ...state,
                    abilityValues: action.payload.abilityValues,
                }
            };
        case 'SET_CHARACTER_INFOS':
            return{
                character:
                {
                    ...state,
                    characterInfos: action.payload.characterInfos,
                }
            };
        case 'SET_CHARACTER_NAME':
            return{
                character:
                {
                    ...state,
                    characterInfos: {
                        characterName: action.payload.characterName,
                    }
                }
            };
        case 'SET_HP':
            return{
                character:
                {
                    ...state,
                    characterInfos: {
                        HP: action.payload.hp,
                    }
                }
            };
        case 'SET_MP':
            return{
                character:
                {
                    ...state,
                    characterInfos: {
                        MP: action.payload.mp,
                    }
                }
            };
        case 'SET_CHARACTER_BACKGROUND':
            return{
                character:
                {
                    ...state,
                    characterInfos: {
                        characterBackground: action.payload.background,
                    }
                }
            };
        default:
            return state;
    }
};

export const actionCreator = {
    setCharacter,
    setSkills,
    setAbilityValues,
    setCharacterInfos,
    setCharacterName,
    setHP,
    setMP,
    setSAN,
    setCharacterBackground
};