import { Action } from 'redux';

export type SetSANPayload = {
    san: number;
};

export interface SetSANAction extends Action {
    type: 'SET_SAN';
    payload: SetSANPayload;
}

export const setSAN = (payload: SetSANPayload): SetSANAction => {
    return {
        payload,
        type: 'SET_SAN',
    };
};
