import { Action } from 'redux';

export type SetHPPayload = {
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
