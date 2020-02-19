import React from 'react';
import Hidden from '@material-ui/core/Hidden';

import SideBarPC from './SideBar_PC';
import SideBarMobile from './SideBar_Mobile';

import { character } from '../modules/commonType';

type Props = {
    setCharacter: (character: any) => void;
    character: character;
};

const NavBar: React.SFC<Props> = (props: Props) => {
    return (
        <div>
            {/* タブレット以上なら隠す -- モバイル画面で表示 */}
            <Hidden smUp implementation="css">
                <SideBarMobile
                    character={props.character}
                    setCharacter={props.setCharacter}
                />
            </Hidden>

            {/* モバイル以下なら隠す -- モバイル画面以外で表示 */}
            <Hidden xsDown implementation="css">
                <SideBarPC
                    character={props.character}
                    setCharacter={props.setCharacter}
                />
            </Hidden>
        </div>
    );
};

export default NavBar;
