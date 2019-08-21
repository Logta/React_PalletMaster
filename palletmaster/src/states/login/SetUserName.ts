import { Action } from 'redux';

export type SetUserNamePayload = {    // todoを追加する時に必要なのはtodoの内容くらい
    userName: string;
};

export interface SetUserNameAction extends Action {
    type: 'SET_USER_NAME';
    payload: SetUserNamePayload;
}

export const setUserName = (payload: SetUserNamePayload): SetUserNameAction => {
    return {
        payload,
        type: 'SET_USER_NAME',
    };
};