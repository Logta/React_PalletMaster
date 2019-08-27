import { connect } from 'react-redux';

import { RootState  } from '../states';
import Ability from '../pages/Ability';
  
const mapStateToProps = (state: RootState) => {
    console.log(state.character);
    return {
        abilityValues: state.character.character.abilityValues,
    };
};

export default connect(
    mapStateToProps
)(Ability);