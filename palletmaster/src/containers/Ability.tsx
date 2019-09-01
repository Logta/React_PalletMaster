import { connect } from 'react-redux';

import { RootState  } from '../states';
import Ability from '../pages/Ability';
  
const mapStateToProps = (state: RootState) => {
    console.log(state.character);
    return {
        abilityValues: state.character.character.abilityValues,
        discordUrl: state.setting.discordUrl,
        characterName: state.character.character.characterInfos.characterName,
    };
};

export default connect(
    mapStateToProps
)(Ability);