import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { ButtonComponent } from '../ButtonComponent';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PersonImg } from '../table/RowComponent/components';
import { addModerator } from '../../../store/moderators/moderatorsSlice';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

export const ModalComponent = () => {
    const [open, setOpen] = useState(false);
    const [moderatorValueName, setModeratorValueName] = useState('');

    const moderators = useSelector(state => state.moderators.moderatorsList);
    const dispatch = useDispatch();

    const getLastModeratorId = moderators.slice(-1);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setModeratorValueName('')
    };

    const onChangeInputValueName = (e) => {
        setModeratorValueName(e.target.value);
    };

    const onAddModerator = () => {
        if(moderatorValueName) {
            dispatch(addModerator({
                id: getLastModeratorId[0].id + 1,
                name: moderatorValueName,
                img: <PersonImg />,
                status: 'active',
            }));
        }
        handleClose();
        setModeratorValueName('');
    };

    return (
        <>
            <ButtonComponent variant='outlined' onClick={handleClickOpen} text={'Добавить'} />
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby='alert-dialog-slide-description'
            >
                <DialogTitle>{'Добавить нового модератора'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id='alert-dialog-slide-description'>
                        Ф.И.О. <input type='text' value={moderatorValueName} onChange={onChangeInputValueName} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={onAddModerator}>Agree</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};