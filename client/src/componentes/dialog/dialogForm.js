import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props){

    const handleClickOpen = () => {

        props.setOpen(true);
    };

    const handleClose = () => {
        props.setOpen(false);
    };

    return (
        
            
        <Dialog open={props.open} onClose={handleClose} aria-labelledby='form-dialog-title'>
            <DialogTitle id="form-dialog-title">Editar</DialogTitle>
            <DialogContent>                
                <TextField
                autoFocus
                margin='dense'
                id="nome"
                label="Nome do Jogo"
                defaultValue={props.nome}
                type='text'
                fullWidth         
                />
                <TextField
                autoFocus
                margin='dense'
                id="preco"
                label="Preço do jogo"
                defaultValue={props.preco}
                type='text'
                fullWidth         
                />
                <TextField
                autoFocus
                margin='dense'
                id="categoria"
                label="Categoria do jogo"
                defaultValue={props.categoria}
                type='text'
                fullWidth         
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color='primary'>
                    Salvar
                </Button>
                <Button onClick={handleClose} color='primary'>
                    Excluir
                </Button>
                <Button onClick={handleClose} color='primary'>
                    Cancelar
                </Button>
            </DialogActions>
        </Dialog>
        
    );
}