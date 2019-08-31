import React from 'react';
import Hidden from '@material-ui/core/Hidden';

import NavBar_PC from './NavBar_PC';
import NavBar_Mobile from './NavBar_Mobile';

type Props = {
  open : boolean;
  setOpen: (open: boolean) => void;
};

const NavBar: React.SFC<Props> = (props: Props) => {
  return (
    <div>
      {/* タブレット以上なら隠す -- モバイル画面で表示 */}
      <Hidden smUp implementation="css">
        <NavBar_Mobile open={props.open} setOpen={props.setOpen} />
      </Hidden>

      {/* モバイル以下なら隠す -- モバイル画面以外で表示 */}
      <Hidden xsDown implementation="css">
        <NavBar_PC />
      </Hidden>
    </div>
  );
};

export default NavBar;