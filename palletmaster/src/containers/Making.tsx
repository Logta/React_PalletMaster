import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator, RootState  } from '../states';
import Making from '../pages/Making';
  
const mapStateToProps = (state: RootState) => {
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        setCharacter: (chara: character) => {
            dispatch(actionCreator.character.setCharacter({chara}));
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Making);