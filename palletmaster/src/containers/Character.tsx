import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator, RootState  } from '../states';
import Character from '../pages/Character';
import { statement } from '@babel/template';

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
  
const mapStateToProps = (state: RootState) => {
    return {
        character: state.character,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        setCharacterName: (characterName: string) => {
            dispatch(actionCreator.character.setCharacterName({characterName}));
        },
        setHP: (hp: number) => {
            dispatch(actionCreator.character.setHP({hp}));
        },
        setMP: (mp: number) => {
            dispatch(actionCreator.character.setMP({mp}));
        },
        setSAN: (san: number) => {
            dispatch(actionCreator.character.setSAN({san}));
        },
        setCharacterBackground: (background: string) => {
            dispatch(actionCreator.character.setCharacterBackground({background}));
        },
        setCharacterInfos: (characterInfos: characterInfo) => {
            dispatch(actionCreator.character.setCharacterInfos({characterInfos}));
        },
        setAbilityValues: (abilityValues: abilityValue) => {
            dispatch(actionCreator.character.setAbilityValues({abilityValues}));
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Character);