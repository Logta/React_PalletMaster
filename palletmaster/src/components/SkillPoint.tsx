import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      test:{
          
    position:"sticky", /* 要素をスクロールに応じて固定 */
    top:"30px", /* 縦スクロールに追従 */
    zIndex: 1, /* z-indexで最前面に持ってくる */
      },
    card: {
        margin: 0,
        top: 10,
        right: 'auto',
        bottom: 'auto',
        left: 10,
        position: 'fixed',
        width: "50%",
        [theme.breakpoints.up('sm')]: {
            width: "20%",
            top: 'auto',
            right: 20,
            bottom: 20,
            left: 'auto',
        }
    },
    chip: {
      marginTop: '10px',
      marginBottom: '10px',
      marginLeft: theme.spacing(5),
      marginRight: 'auto',
    },
  }),
);

type Props = {
    workPoint: number;
    interestPoint: number;
};

const SkillPoint: React.SFC<Props> = (props: Props) => {
    const classes = useStyles();
  return (
    <Card className={classes.test}>
      <Chip color="primary" label="Work Point" className={classes.chip}　/> {props.workPoint}
        <Hidden xsDown implementation="css">
          <br />
        </Hidden>
      <Chip color="primary" label="Interest Point" className={classes.chip}　/> {props.interestPoint}
      <br />
    </Card>
  )
};
export default SkillPoint;