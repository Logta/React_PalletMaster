import { Action } from 'redux';

type skill = {
    skillName: string;
    skillValue: number;
    skillType: string;
    skillUnique: boolean;
    skillWorkValue: number;
    skillInterestValue: number;
    defaultValue: number;
};

export type SetSkillsPayload = {
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
