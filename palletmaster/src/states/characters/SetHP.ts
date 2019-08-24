import { Action } from 'redux';

export type SetHPPayload = {    // todoを追加する時に必要なのはtodoの内容くらい
    hp: number;
};

export interface SetHPAction extends Action {
    type: 'SET_HP';
    payload: SetHPPayload;
}

export const setHP = (payload: SetHPPayload): SetHPAction => {
    return {
        payload,
        type: 'SET_HP',
    };
};