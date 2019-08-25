import { setCharacter, SetCharacterAction } from './SetCharacter';
import { setSkills, SetSkillsAction } from './SetSkills';
import { setAbilityValues, SetAbilityValuesAction } from './SetAbilityValues';
import { setCharacterInfos, SetCharacterInfosAction } from './SetCharacterInfos';
import { setCharacterName, SetCharacterNameAction } from './SetCharacterName';
import { setHP, SetHPAction } from './SetHP';
import { setMP, SetMPAction } from './SetMP';
import { setSAN, SetSANAction } from './SetSAN';
import { setCharacterBackground, SetCharacterBackgroundAction } from './SetCharacterBackground';

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

type character = {
    skills: skill[];
    characterBackground: string | undefined;
    abilityValues: abilityValue;
    characterInfos: characterInfo;
}

export type State = {    // ページ全体で保持しとくべき情報はTodoの配列くらい
    character: character;
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
            },
        },
    };
};

export const reducer = (state: State = init(), action: Actions) => {
    switch (action.type) {
        case 'SET_CHARACTER':
            return{
                ...state,
                character: action.payload.character,
            };
        case 'SET_SKILLS':
            return{
                ...state,
                character:{
                    ...state.character,
                    skills: action.payload.skills,
                }
            };
        case 'SET_ABILITY_VALUES':
            return{
                ...state,
                character:
                {
                    ...state.character,
                    abilityValues: action.payload.abilityValues,
                }
            };
        case 'SET_CHARACTER_INFOS':
            return{
                ...state,
                character:
                {
                    ...state.character,
                    characterInfos: action.payload.characterInfos,
                }
            };
        case 'SET_CHARACTER_NAME':
            return{
                ...state,
                character:
                {
                    ...state.character,
                    characterInfos: {
                        ...state.character.characterInfos,
                        characterName: action.payload.characterName,
                    }
                }
            };
        case 'SET_HP':
            return{
                ...state,
                character:
                {
                    ...state.character,
                    characterInfos: {
                        ...state.character.characterInfos,
                        HP: action.payload.hp,
                    }
                }
            };
        case 'SET_MP':
            return{
                ...state,
                character:
                {
                    ...state.character,
                    characterInfos: {
                        ...state.character.characterInfos,
                        MP: action.payload.mp,
                    }
                }
            };
        case 'SET_CHARACTER_BACKGROUND':
            return{
                ...state,
                character:
                {
                    ...state.character,
                    characterBackground: action.payload.background,
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