import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator, RootState  } from '../states';
import SAN from '../pages/SAN';
  
const mapStateToProps = (state: RootState) => {
    console.log(state.character);
    return {
        SAN: state.character.character.characterInfos.SAN,
        characterName: state.character.character.characterInfos.characterName, 
        skills: state.character.character.skills,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        setSAN: (san: number) => {
            dispatch(actionCreator.character.setSAN({san}));
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SAN);