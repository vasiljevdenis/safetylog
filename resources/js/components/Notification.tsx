import { observer } from 'mobx-react-lite';
import appState from '../store/appState';
import { useState } from 'react';
import { Alert, Snackbar, SnackbarCloseReason } from '@mui/material';

const Notification = observer(() => {

    const [store] = useState(appState);

    const handleClose = (reason: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return;
        }
        store.closeSnackbar();
    }

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            open={store.snackbarOpen}
            autoHideDuration={5000}
            onClose={(event, reason) => handleClose(reason)}
        >
            <Alert onClose={(event) => handleClose('timeout')} severity={store.snackbarSeverity}>
                <div dangerouslySetInnerHTML={{ __html: store.snackbarText }}></div>
            </Alert>
        </Snackbar>
    );
});
export default Notification;