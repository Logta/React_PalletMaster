import { combineReducers } from 'redux';
import * as Settings from './settings';
import * as Characters from './characters';

export type RootState = {
    setting: Settings.State;
    character: Characters.State;
};

export const rootReducer = combineReducers({
    setting: Settings.reducer,
    character: Characters.reducer,
});

export const actionCreator = {
    setting: Settings.actionCreator,
    character: Characters.actionCreator,
};
