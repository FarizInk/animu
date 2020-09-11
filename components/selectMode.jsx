import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, MenuItem, Menu } from '@material-ui/core';
import { Context } from 'context/store'
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const options = ['Anime', 'Manga'];

export default function SimpleListMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const context = React.useContext(Context)
  const { enqueueSnackbar } = useSnackbar();

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
    const mode = options[index].toLowerCase()
    const oldMode = context.state.mode

    if ((mode === 'anime' || mode === 'manga') && oldMode !== mode) {
      context.dispatch('CLOSE_NAVBAR')
      context.dispatch('CHANGE_MODE', { mode: mode, modeIndex: index })
      enqueueSnackbar('Change Mode to ' + options[index]);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Change Mode">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="Mode"
          onClick={handleClickListItem}
        >
          <ListItemText primary="Current Mode: " secondary={options[context.state.modeIndex]} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === context.state.modeIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
