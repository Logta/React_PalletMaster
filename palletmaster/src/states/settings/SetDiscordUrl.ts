import { Action } from 'redux';

export type SetDiscordUrlPayload = {
    url: string;
};

export interface SetDiscordUrlAction extends Action {
    type: 'SET_DISCORD_URL_SETTING';
    payload: SetDiscordUrlPayload;
}

export const setDiscordUrl = (
    payload: SetDiscordUrlPayload
): SetDiscordUrlAction => {
    return {
        payload,
        type: 'SET_DISCORD_URL_SETTING',
    };
};
