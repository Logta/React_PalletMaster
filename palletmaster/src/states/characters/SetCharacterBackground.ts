import { Action } from 'redux';

export type SetCharacterBackgroundPayload = {    // todoを追加する時に必要なのはtodoの内容くらい
    background: string;
};

export interface SetCharacterBackgroundAction extends Action {
    type: 'SET_CHARACTER_BACKGROUND';
    payload: SetCharacterBackgroundPayload;
}

export const setCharacterBackground = (payload: SetCharacterBackgroundPayload): SetCharacterBackgroundAction => {
    return {
        payload,
        type: 'SET_CHARACTER_BACKGROUND',
    };
};