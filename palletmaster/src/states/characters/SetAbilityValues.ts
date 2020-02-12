import { Action } from 'redux';

type AbilityValues = {
    STR: number;
    CON: number;
    POW: number;
    DEX: number;
    APP: number;
    SIZ: number;
    INT: number;
    EDU: number;
};

export type SetAbilityValuesPayload = {
    // todoを追加する時に必要なのはtodoの内容くらい
    abilityValues: AbilityValues;
};

export interface SetAbilityValuesAction extends Action {
    type: 'SET_ABILITY_VALUES';
    payload: SetAbilityValuesPayload;
}

export const setAbilityValues = (
    payload: SetAbilityValuesPayload
): SetAbilityValuesAction => {
    return {
        payload,
        type: 'SET_ABILITY_VALUES',
    };
};
