import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator, RootState  } from '../states';
import SAN from '../pages/SAN';
  
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
    console.log(state.character);
    return {
        SAN: state.character.character.characterInfos.SAN,
        characterName: state.character.character.characterInfos.characterName, 
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