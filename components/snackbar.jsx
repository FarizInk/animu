import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Context } from 'context/store'
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

const SlideTransition = (props) => {
  return <Slide {...props} direction="up" />;
}

export default function ConsecutiveSnackbars() {
  const context = useContext(Context)
  const snackPack = context.state.snackpack
  const status = context.state.snackbar
  const [messageInfo, setMessageInfo] = React.useState(undefined);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      context.dispatch('SLICE_SNACKPACK')
      context.dispatch('SET_SNACKBAR', true)
    } else if (snackPack.length && messageInfo && status) {
      // Close an active snack when a new one is added
      context.dispatch('SET_SNACKBAR', false)
    }
  }, [snackPack, messageInfo, status]);

  // const handleClick = (message) => () => {
  //   setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    context.dispatch('SET_SNACKBAR', false)
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  const classes = useStyles();
  return (
    <div>
      {/* <Button onClick={handleClick('Message A')}>Show message A</Button>
      <Button onClick={handleClick('Message B')}>Show message B</Button> */}
      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={status}
        autoHideDuration={messageInfo ? messageInfo.time : 999999}
        onClose={handleClose}
        onExited={handleExited}
        message={messageInfo ? messageInfo.message : undefined}
        TransitionComponent={SlideTransition}
        action={
          <React.Fragment>
            <IconButton
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}