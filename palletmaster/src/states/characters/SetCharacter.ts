import { Action } from 'redux';

type skill = {
    skillName: string,
    skillValue: number,
    skillType: string,
    skillUnique: boolean,
    skillWorkValue: number,
    skillInterestValue: number,
    defaultValue: number
};

export type SetCharacterPayload = {    // todoを追加する時に必要なのはtodoの内容くらい
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

export interface SetCharacterAction extends Action {
    type: 'SET_CHARACTER';
    payload: SetCharacterPayload;
}

export const setCharacter = (payload: SetCharacterPayload): SetCharacterAction => {
    return {
        payload,
        type: 'SET_CHARACTER',
    };
};