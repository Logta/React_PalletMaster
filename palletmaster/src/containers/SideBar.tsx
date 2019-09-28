import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator, RootState  } from '../states';
import SideBar from '../components/SideBar';

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