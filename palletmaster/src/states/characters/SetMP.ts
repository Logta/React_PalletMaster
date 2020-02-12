import { Action } from 'redux';

export type SetMPPayload = {
    mp: number;
};

export interface SetMPAction extends Action {
    type: 'SET_MP';
    payload: SetMPPayload;
}

export const setMP = (payload: SetMPPayload): SetMPAction => {
    return {
        payload,
        type: 'SET_MP',
    };
};
