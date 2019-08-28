import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import ShakeNDNDice from '../modules/shakeNDNDice';

interface ItemNDN {
  count: number;
  number: number;
}

interface Result {
    ok: string;
    result: string;
}

type Props = {
    open: boolean;
    item: ItemNDN;
    setOpen(open :boolean) : void;
};

export default function AlertDialog(props: Props) {
  let result :Result = {
    ok: "",
    result: "",
  }
  if(props.open){
    result = ShakeNDNDice(props.item);
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