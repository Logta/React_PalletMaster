import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator, RootState  } from '../states';
import Character from '../pages/Character';

const mapStateToProps = (state: RootState) => {
    console.log(state.character);
    return {
        characterInfos: state.character.character.characterInfos,
        abilityValues: state.character.character.abilityValues,
        characterBackground: state.character.character.characterBackground,
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