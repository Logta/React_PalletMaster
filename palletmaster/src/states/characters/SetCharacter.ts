import { Action } from 'redux';

export type SetCharacterPayload = {    // todoを追加する時に必要なのはtodoの内容くらい
    character: string;
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