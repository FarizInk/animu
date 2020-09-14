import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import { Context } from 'context/store'
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

const TransitionUp = (props) => {
  return <Slide {...props} direction="up" />;
}

export default function PositionedSnackbar() {
  const context = useContext(Context)
  const handleClose = () => {
    context.dispatch('SET_SNACKBAR', false)
  };

  const vertical = 'bottom'
  const horizontal = 'right'
  const time = context.state.snackbar_value.time
  const message = context.state.snackbar_value.message

  const classes = useStyles();
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={context.state.snackbar}
        autoHideDuration={(time === null || time === undefined) ? 9999999 : time}
        onClose={handleClose}
        TransitionComponent={TransitionUp}
        message={message}
        key={vertical + horizontal}
        action={
          <>
            <IconButton
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </>
        }
      />
    </div>
  );
}
