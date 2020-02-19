export type skill = {
    skillName: string;
    skillValue: number;
    skillType: string;
    skillUnique: boolean;
    skillWorkValue: number;
    skillInterestValue: number;
    defaultValue: number;
};

export type abilityValue = {
    STR: number;
    CON: number;
    POW: number;
    DEX: number;
    APP: number;
    SIZ: number;
    INT: number;
    EDU: number;
};

export type characterInfo = {
    characterName: string;
    HP: number;
    MP: number;
    SAN: number;
    damageBonus: string;
    job: string;
    age: number;
    sex: string;
    height: number;
    weight: number;
    origin: string;
};

export type character = {
    skills: skill[];
    characterBackground: string | undefined;
    abilityValues: abilityValue;
    characterInfos: characterInfo;
};
