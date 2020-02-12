import { Action } from 'redux';

type CharacterInfos = {
    characterName: string;
    HP: number;
    MP: number;
    SAN: number;
    damageBonus: string;
    job: string;
    age: number;
    sex: string;
    height: number;
    weight: number;
    origin: string;
};

export type SetCharacterInfosPayload = {
    // todoを追加する時に必要なのはtodoの内容くらい
    characterInfos: CharacterInfos;
};

export interface SetCharacterInfosAction extends Action {
    type: 'SET_CHARACTER_INFOS';
    payload: SetCharacterInfosPayload;
}

export const setCharacterInfos = (
    payload: SetCharacterInfosPayload
): SetCharacterInfosAction => {
    return {
        payload,
        type: 'SET_CHARACTER_INFOS',
    };
};
