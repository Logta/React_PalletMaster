import React from 'react';
import Hidden from '@material-ui/core/Hidden';

import SideBar_PC from './SideBar_PC';
import SideBar_Mobile from './SideBar_Mobile';

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
                <SideBar_Mobile
                    character={props.character}
                    setCharacter={props.setCharacter}
                />
            </Hidden>

            {/* モバイル以下なら隠す -- モバイル画面以外で表示 */}
            <Hidden xsDown implementation="css">
                <SideBar_PC
                    character={props.character}
                    setCharacter={props.setCharacter}
                />
            </Hidden>
        </div>
    );
};

export default NavBar;
