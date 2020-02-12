import { Action } from 'redux';

export type SetDiceUrlPayload = {
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
