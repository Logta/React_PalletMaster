import { setCharacter, SetCharacterAction } from './SetCharacter';

type Actions
    = SetCharacterAction;

export type State = {    // ページ全体で保持しとくべき情報はTodoの配列くらい
    setting: {
        character: string;
    };
};

const init = (): State => {
    return {
        setting:{
            character: "",
        },
    };
};

export const reducer = (state: State = init(), action: Actions) => {
    switch (action.type) {
    case 'SET_CHARACTER':
        return{
            setting:
            {
                ...state.setting,
                character: action.payload.character,
            }
        }
    default:
        return state;
    }
};

export const actionCreator = {
    setCharacter,
};