import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator, RootState  } from '../states';
import Setting from '../pages/Setting';

const mapStateToProps = (state: RootState) => {
    return {
        discordUrl: state.setting.discordUrl,
        diceUrl: state.setting.diceUrl,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        setDiceUrl: (url: string) => {
            dispatch(actionCreator.setting.setDiceUrl({url}));
        },
        setDiscordUrl: (url: string) => {
            dispatch(actionCreator.setting.setDiscordUrl({url}));
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Setting);