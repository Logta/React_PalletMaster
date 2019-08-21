import { setDiscordUrl, SetDiscordUrlAction } from './SetDiscordUrl';
import { setDiceUrl, SetDiceUrlAction } from './SetDiceUrl';

type Actions
    = SetDiscordUrlAction
    | SetDiceUrlAction;

export type State = {    // ページ全体で保持しとくべき情報はTodoの配列くらい
    discordUrl: string;
    diceUrl: string;
};

const init = (): State => {
    return {
        discordUrl: "",
        diceUrl: "",
    };
};

export const reducer = (state: State = init(), action: Actions) => {
    switch (action.type) {
    case 'SET_DISCORD_URL_SETTING':
        return {
            ...state,
            discordUrl: action.payload.url,
        };
    case 'SET_DICE_URL_SETTING':
        return{
            ...state,
            diceUrl: action.payload.url,
        }
    default:
        return state;
    }
};

export const actionCreator = {
    setDiscordUrl,
    setDiceUrl,
};