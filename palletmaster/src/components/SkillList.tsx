import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import SkillList_PC from './SkillList_PC';
import SkillList_Mobile from './SkillList_Mobile';

type skill = {
  skillName: string,
  skillValue: number,
  skillType: string,
  skillUnique: boolean,
  skillWorkValue: number,
  skillInterestValue: number,
  defaultValue: number
};

type abilityValue = {
  STR: number,
  CON: number,
  POW: number,
  DEX: number,
  APP: number,
  SIZ: number,
  INT: number,
  EDU: number
};

type characterInfo = {
  characterName: string,
  HP: number,
  MP: number,
  SAN: number,
  damageBonus: string,
  job: string,
  age: number,
  sex: string,
  height: number,
  weight: number,
  origin: string
};

type character = {
  skills: skill[];
  characterBackground: string;
  abilityValues: abilityValue;
  characterInfos: characterInfo;
}

type Props = {
  skills: skill[],
  setCharacter: (character: character) => void;
  setSkillWorkValue: (name: string, work: number) => void;
  setSkillInterestValue: (name: string, interest: number) => void;
};

export default function SimpleList(props: Props) {
  return (
    <div>
      {/* タブレット以上なら隠す -- モバイル画面で表示 */}
      <Hidden smUp implementation="css">
        <SkillList_Mobile
          skills={props.skills} 
          setCharacter={props.setCharacter} 
          setSkillInterestValue={props.setSkillInterestValue}
          setSkillWorkValue={props.setSkillWorkValue}
        />
      </Hidden>

      {/* モバイル以下なら隠す -- モバイル画面以外で表示 */}
      <Hidden xsDown implementation="css">
        <SkillList_PC
          skills={props.skills} 
          setCharacter={props.setCharacter} 
          setSkillInterestValue={props.setSkillInterestValue}
          setSkillWorkValue={props.setSkillWorkValue}
        />
      </Hidden>
    </div>
  );
}
