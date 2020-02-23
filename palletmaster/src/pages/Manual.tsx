import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            margin: 'auto',
            width: '90%',
            [theme.breakpoints.up('md')]: {
                width: 700,
            },
            padding: theme.spacing(3, 2),
        },
        mobile: {
            paddingTop: '100',
        },
    })
);
const Manual: React.SFC = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Paper className={classes.paper}>
                <Hidden smUp implementation="css"></Hidden>
                <Hidden xsDown implementation="css">
                    <ul>
                        <li>Skill: 技能情報を管理するための画面</li>
                        <li>Character: キャラクター情報を管理するための画面</li>
                        <li>Ability: 能力値ロールを実施するための画面</li>
                        <li>SAN: SAN値情報を管理する画面</li>
                        <li>Battle: 戦闘情報を管理する画面</li>
                        <li>Import: .pmjファイルをインポートします</li>
                        <li>
                            Export:
                            キャラクターデータを.pmjファイルとしてエクスポートします
                        </li>
                        <li>
                            Sample:
                            手軽い使用いただくためのサンプルデータをセットします
                        </li>
                    </ul>
                </Hidden>
            </Paper>
        </React.Fragment>
    );
};
export default Manual;
