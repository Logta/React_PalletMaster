import { Action } from 'redux';

export type SetMPPayload = {    // todoを追加する時に必要なのはtodoの内容くらい
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