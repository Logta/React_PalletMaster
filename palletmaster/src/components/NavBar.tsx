import React from 'react';
import Hidden from '@material-ui/core/Hidden';

import NavBarPC from './PC/NavBar_PC';
import NavBarMobile from './Mobile/NavBar_Mobile';

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

const NavBar: React.SFC<Props> = (props: Props) => {
    return (
        <div>
            {/* タブレット以上なら隠す -- モバイル画面で表示 */}
            <Hidden smUp implementation="css">
                <NavBarMobile open={props.open} setOpen={props.setOpen} />
            </Hidden>

            {/* モバイル以下なら隠す -- モバイル画面以外で表示 */}
            <Hidden xsDown implementation="css">
                <NavBarPC />
            </Hidden>
        </div>
    );
};

export default NavBar;
