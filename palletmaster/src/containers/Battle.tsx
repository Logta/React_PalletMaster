import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator, RootState  } from '../states';
import Battle from '../pages/Battle';

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
        damageBonus: state.character.character.characterInfos.damageBonus,
        hp: state.character.character.characterInfos.HP,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        setSkills: (skills: skill[]) => {
            dispatch(actionCreator.character.setSkills({skills}));
        },
        setHP: (hp: number) => {
            dispatch(actionCreator.character.setHP({hp}));
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Battle);