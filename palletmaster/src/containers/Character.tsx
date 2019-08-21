import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator, RootState  } from '../states';
import Home from '../pages/Home';
import { statement } from '@babel/template';

const mapStateToProps = (state: RootState) => {
    return {
        character: {
            character: state.character,
        }
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        setCharacter: (character: string) => {
            dispatch(actionCreator.character.setCharacter({character}));
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);