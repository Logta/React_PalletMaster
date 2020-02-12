import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fab: {
            margin: theme.spacing(1),
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
        },
    })
);

const FloatingActionButtons: React.FC = () => {
    const classes = useStyles();

    return (
        <div>
            <Fab color="primary" aria-label="add" className={classes.fab}>
                <AddIcon />
            </Fab>
        </div>
    );
};

export default FloatingActionButtons;
