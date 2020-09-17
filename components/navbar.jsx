import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, CssBaseline, Divider, Drawer, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core'
import { HomeTwoTone as HomeTwoToneIcon, Menu as MenuIcon, WhatshotTwoTone as WhatshotTwoToneIcon, ScheduleTwoTone as ScheduleTwoToneIcon, InsertChartTwoTone as InsertChartTwoToneIcon } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Context } from 'context/store'
import Link from 'next/link'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  selectMode: {
    marginTop: '20px'
  }
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const context = React.useContext(Context);

  const handleDrawerToggle = () => {
    context.dispatch('TOGGLE_NAVBAR')
  };

  const drawer = (
    <div>

      <Toolbar>
        <Typography variant="h6" noWrap>
          {process.env.APP_NAME}
        </Typography>
      </Toolbar>

      <Divider />

      <List>
        <Link href="/" >
          <ListItem button key="Home" onClick={() => context.dispatch('CLOSE_NAVBAR')}>
            <ListItemIcon><HomeTwoToneIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link href="/trending/" >
          <ListItem button key="Trending" onClick={() => context.dispatch('CLOSE_NAVBAR')}>
            <ListItemIcon><WhatshotTwoToneIcon /></ListItemIcon>
            <ListItemText primary="Trending" />
          </ListItem>
        </Link>
        <Link href="/schedule">
          <ListItem button key="Schedule" onClick={() => context.dispatch('CLOSE_NAVBAR')}>
            <ListItemIcon><ScheduleTwoToneIcon /></ListItemIcon>
            <ListItemText primary="Schedule" />
          </ListItem>
        </Link>
        <Link href="/top">
          <ListItem button key="Top" onClick={() => context.dispatch('CLOSE_NAVBAR')}>
            <ListItemIcon><InsertChartTwoToneIcon /></ListItemIcon>
            <ListItemText primary="Top" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {context.state.pageTitle}
          </Typography>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={context.state.navbar}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>

      </nav>


      <main className={classes.content}>
        <div className={classes.toolbar} />

        {props.children}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;