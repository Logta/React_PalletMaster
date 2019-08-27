import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import ShakeDice from '../modules/sendDiscord';

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
    setOpen(open :boolean) : void;
};

export default function AlertDialog(props: Props) {
  let result :Result = {
    ok: "",
    result: "",
  }
  if(props.open){
    result = ShakeDice(props.item);
  }

  function handleClickOpen() {
    props.setOpen(true);
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
        <DialogTitle id="alert-dialog-title">{"Dice Result"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            { result.ok }
          </DialogContentText><br />
          
          <DialogContentText id="alert-dialog-description">
            { result.result }
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