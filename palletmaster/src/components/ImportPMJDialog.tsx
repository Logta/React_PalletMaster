import React from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import onSubmit from '../modules/importPMJ';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import { character } from '../modules/commonType';

type Props = {
    open: boolean;
    setOpen(open: boolean): void;
    setCharacter(character: character): void;
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
            opacity: 0,
            appearance: 'none',
            position: 'absolute',
        },
        inputButton: {
            textTransform: 'none',
        },
    })
);
export default function FormDialog(props: Props) {
    const classes = useStyles();
    const [file, setFile] = React.useState<File>(new File([], ''));
    const [fileName, setFileName] = React.useState<string>(
        'Select or Drop File Here'
    );

    function handleChangeFile(e: any) {
        const target: HTMLInputElement = e.target as HTMLInputElement;
        if (target == null) return;
        if (target.files == null) return;

        const targetFile: File | null = target.files.item(0);
        if (targetFile == null) return;
        setTimeout(setCharaDatas, 500, targetFile, targetFile.name);
    }

    const setCharaDatas = (targetFile: File, targetFileName: string) => {
        setFile(targetFile);
        setFileName(targetFileName);
    };

    function setChara(character: any) {
        let chara: character = {
            skills: character.skills,
            characterBackground: character.characterBackground,
            abilityValues: character.abilityValues,
            characterInfos: character.characterInfos,
        };

        props.setCharacter(chara);
    }

    function handleClose() {
        props.setOpen(false);
    }

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Import Character
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please select and set .pmj file
                    </DialogContentText>
                    <Button
                        color="primary"
                        component="label"
                        variant="outlined"
                        className={classes.inputButton}
                    >
                        {fileName}
                        <input
                            type="file"
                            className={classes.nputFileBtnHide}
                            onChange={e => {
                                handleChangeFile(e);
                            }}
                        />
                    </Button>
                    <br />
                    <br />
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => {
                            onSubmit(setChara, file);
                            handleClose();
                        }}
                    >
                        ok
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
