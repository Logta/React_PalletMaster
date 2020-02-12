import { Action } from 'redux';

export type SetCharacterNamePayload = {
    // todoを追加する時に必要なのはtodoの内容くらい
    characterName: string;
};

export interface SetCharacterNameAction extends Action {
    type: 'SET_CHARACTER_NAME';
    payload: SetCharacterNamePayload;
}

export const setCharacterName = (
    payload: SetCharacterNamePayload
): SetCharacterNameAction => {
    return {
        payload,
        type: 'SET_CHARACTER_NAME',
    };
};
