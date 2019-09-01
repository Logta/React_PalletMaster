import * as React from 'react';
import logo from '../PM_Desine.png';
import Typography from '@material-ui/core/Typography';

const Main: React.FC = () => {
  return (
    <div className="App">
      <br />
      <br />
      <br />
        <img
        src={logo}
        alt="" width="50%" height="40%"
        />
      <br />
      <br />

      <Typography >       
        Discordやオフラインセッションでの
          <br />
        キャラクター情報管理ツール
      </Typography>
    </div>
  );
}

export default Main;
