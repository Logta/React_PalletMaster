import React from 'react';
import Hidden from '@material-ui/core/Hidden';

import SideBar_PC from './SideBar_PC';
import SideBar_Mobile from './SideBar_Mobile';

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
  characterBackground: string | undefined;
  abilityValues: abilityValue;
  characterInfos: characterInfo;
}

type Props = {
  setCharacter: (character: any) => void,
  character: character,
};

const NavBar: React.SFC<Props> = (props: Props) => {
  return (
    <div>
      {/* タブレット以上なら隠す -- モバイル画面で表示 */}
      <Hidden smUp implementation="css">
        <SideBar_Mobile character={props.character} setCharacter={props.setCharacter}/>
      </Hidden>

      {/* モバイル以下なら隠す -- モバイル画面以外で表示 */}
      <Hidden xsDown implementation="css">
        <SideBar_PC character={props.character} setCharacter={props.setCharacter}/>
      </Hidden>
    </div>
  );
};

export default NavBar;