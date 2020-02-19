import { connect } from 'react-redux';

import { RootState } from '../states';
import Home from '../pages/Home';

const mapStateToProps = (state: RootState) => {
    return {
        character: state.character.character,
    };
};

export default connect(mapStateToProps)(Home);
