import { setUserName, SetUserNameAction } from './SetUserName';

type Actions
    = SetUserNameAction;

export type State = {    // ページ全体で保持しとくべき情報はTodoの配列くらい
    userName: string;
};

const init = (): State => {
    return {
        userName: "",
    };
};

export const reducer = (state: State = init(), action: Actions) => {
    switch (action.type) {
    case 'SET_USER_NAME':
        return{
            setting:
            {
                ...state,
                userName: action.payload.userName,
            }
        }
    default:
        return state;
    }
};

export const actionCreator = {
    setUserName,
};