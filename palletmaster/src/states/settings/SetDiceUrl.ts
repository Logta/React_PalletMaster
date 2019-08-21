import { Action } from 'redux';

export type SetDiceUrlPayload = {    // todoを追加する時に必要なのはtodoの内容くらい
    url: string;
};

export interface SetDiceUrlAction extends Action {
    type: 'SET_DICE_URL_SETTING';
    payload: SetDiceUrlPayload;
}

export const setDiceUrl = (payload: SetDiceUrlPayload): SetDiceUrlAction => {
    return {
        payload,
        type: 'SET_DICE_URL_SETTING',
    };
};