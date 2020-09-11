import React from 'react';
import { Context } from 'context/store'
import { useSnackbar } from 'notistack';

export default function Snackbar() {
  // const classes = useStyles();
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const context = React.useContext(Context)
  const { enqueueSnackbar } = useSnackbar();

  const runSnackbar = () => {
      enqueueSnackbar('KEKW');
  };

  return null
}
