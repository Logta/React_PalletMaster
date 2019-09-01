import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator, RootState  } from '../states';
import Skill from '../pages/Skill';

type skill = {
    skillName: string,
    skillValue: number,
    skillType: string,
    skillUnique: boolean,
    skillWorkValue: number,
    skillInterestValue: number,
    defaultValue: number
};
  
const mapStateToProps = (state: RootState) => {
    return { 
        skills: state.character.character.skills,
        discordUrl: state.setting.discordUrl,
        characterName: state.character.character.characterInfos.characterName,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        setSkills: (skills: skill[]) => {
            dispatch(actionCreator.character.setSkills({skills}));
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Skill);