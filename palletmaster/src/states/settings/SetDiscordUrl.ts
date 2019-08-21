import { Action } from 'redux';

export type SetDiscordUrlPayload = {    // todoを追加する時に必要なのはtodoの内容くらい
    url: string;
};

export interface SetDiscordUrlAction extends Action {
    type: 'SET_DISCORD_URL_SETTING';
    payload: SetDiscordUrlPayload;
}

export const setDiscordUrl = (payload: SetDiscordUrlPayload): SetDiscordUrlAction => {
    return {
        payload,
        type: 'SET_DISCORD_URL_SETTING',
    };
};