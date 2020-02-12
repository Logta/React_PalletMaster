import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import ShakeDice from '../modules/ShakeDice';
import Chip from '@material-ui/core/Chip';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        chip: {
            textAlign: 'center',
        },
    })
);

interface Item {
    name: string;
    url: string;
    user: string;
    value: string;
}

interface Result {
    ok: string;
    result: string;
}

type Props = {
    open: boolean;
    item: Item;
    setOpen(open: boolean): void;
};

export default function AlertDialog(props: Props) {
    const classes = useStyles();

    let result: Result = {
        ok: '',
        result: '',
    };

    if (props.open) {
        result = ShakeDice(props.item);
    }

    function handleClose() {
        props.setOpen(false);
    }

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {'Dice Result'}
                </DialogTitle>
                <DialogContent>
                    {result.ok === '失敗' ? (
                        <DialogContentText id="alert-dialog-description">
                            <Chip
                                color="default"
                                label={result.ok}
                                className={classes.chip}
                            />
                        </DialogContentText>
                    ) : result.ok === '成功' ? (
                        <DialogContentText id="alert-dialog-description">
                            <Chip
                                color="primary"
                                label={result.ok}
                                className={classes.chip}
                            />
                        </DialogContentText>
                    ) : (
                        <DialogContentText id="alert-dialog-description">
                            <Chip
                                color="secondary"
                                label={result.ok}
                                className={classes.chip}
                            />
                        </DialogContentText>
                    )}
                    <br />

                    <DialogContentText id="alert-dialog-description">
                        {result.result}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
