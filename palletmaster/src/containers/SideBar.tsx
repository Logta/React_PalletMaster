import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator, RootState  } from '../states';
import SideBar from '../components/SideBar';

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

//空でも良いので、mapStateToPropsを記述
const mapStateToProps = (state: RootState) => {
  return {
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        setCharacter: (chara: character) => {
            dispatch(actionCreator.character.setCharacter({chara}));
        },
    }
};

export default connect(
    mapStateToProps, //ここでconnectするのも忘れない
    mapDispatchToProps
)(SideBar);