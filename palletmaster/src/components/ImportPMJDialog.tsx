import React from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import onSubmit from '../modules/importPMJ.js';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

type skill = {
    skillName: string,
    skillValue: number,
    skillType: string,
    skillUnique: boolean,
    skillWorkValue: number,
    skillInterestValue: number,
    defaultValue: number
};

type abilityValue = {
    STR: number,
    CON: number,
    POW: number,
    DEX: number,
    APP: number,
    SIZ: number,
    INT: number,
    EDU: number
};
  
type characterInfo = {
    characterName: string,
    HP: number,
    MP: number,
    SAN: number,
    damageBonus: string,
    job: string,
    age: number,
    sex: string,
    height: number,
    weight: number,
    origin: string
};

type character = {
    skills: skill[];
    characterBackground: string | undefined;
    abilityValues: abilityValue;
    characterInfos: characterInfo;
}

type Props = {
    open: boolean;
    setOpen(open :boolean) : void;
    setCharacter(character: character) : void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '75%',
      margin: 'auto',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    nputFileBtnHide: {
      opacity:0,
      appearance: 'none',
      position: 'absolute',
    },
  })
)
export default function FormDialog(props: Props) {
  const classes = useStyles();
  const [file, setFile] = React.useState<File>(new File([],""));
  const [fileName, setFileName] = React.useState<string>("No Select");

  function handleChangeFile(e: any) {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    if(target == null) return;
    if(target.files == null) return;

    const file: File| null = target.files.item(0);
    if(file == null) return;
    setFile(file);
    setFileName(file.name);
  }

  function setChara(character: any){
    let chara: character = {
        skills: character.skills,
        characterBackground: character.characterBackground,
        abilityValues: character.abilityValues,
        characterInfos: character.characterInfos
    };
        
    console.log(chara);
    props.setCharacter(chara);
  }

  function handleClose() {
    props.setOpen(false);
  }

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Import Character</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Please select and set .pmj file
          </DialogContentText>
            <Button color="primary"
              component="label"
            >
              Select
              <input
                type="file"
                className={classes.nputFileBtnHide}
                onChange={(e) => 
                  {handleChangeFile(e)}
              }/>
            </Button>
            {fileName}
            <br />
            <br />
            <Button color="primary" variant="contained" onClick={() => {
              onSubmit(setChara, file);
              handleClose();
              }}>set
            </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}