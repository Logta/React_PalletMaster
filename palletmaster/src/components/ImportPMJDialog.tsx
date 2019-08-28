import React from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import onSubmit from '../modules/importPMJ.js';
import { Redirect } from 'react-router';

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

export default function FormDialog(props: Props) {
  const [file, setFile] = React.useState(new File([],""));

  function handleChangeFile(e: any) {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    if(target == null) return;
    if(target.files == null) return;

    const file: File| null = target.files.item(0);
    if(file == null) return;
    setFile(file);
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
            Import .pmj file
          </DialogContentText>
            <input type="file" onChange={(e) => 
            {handleChangeFile(e)}
        }/>

            <button onClick={() => {
                onSubmit(setChara, file);
                handleClose();
                return( <Redirect to="/" /> );
                }}>set</button>
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