import { Action } from 'redux';

type skill = {
    skillName: string,
    skillValue: number,
    skillType: string,
    skillUnique: boolean,
    skillWorkValue: number,
    skillInterestValue: number,
    defaultValue: number
};

export type SetSkillsPayload = {    // todoを追加する時に必要なのはtodoの内容くらい
    skills: skill[];
};

export interface SetSkillsAction extends Action {
    type: 'SET_SKILLS';
    payload: SetSkillsPayload;
}

export const setSkills = (payload: SetSkillsPayload): SetSkillsAction => {
    return {
        payload,
        type: 'SET_SKILLS',
    };
};