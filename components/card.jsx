import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, CardHeader, Avatar } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: '130px',
  },
  avatar: {
    backgroundColor: blue[500],
  },
  description: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
    minHeight: '81px',
  },
  header: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    minHeight: '20px',
  },
});

export const MyCard = (props) => {
  const classes = useStyles();
  // console.log(props.items);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {props.position}
            </Avatar>
          }
          title={props.title}
          subheader={props.jpTitle}
          classes={{ subheader: classes.header, title: classes.header }}
        />

        <CardMedia
          component="img"
          alt={props.title}
          height="130"
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export const CardSkeleton = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardHeader
          avatar={<Skeleton animation="wave" variant="circle" width={40} height={40} />}
          action={null}
          title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}
          subheader={<Skeleton animation="wave" height={10} width="40%" />}
        />
        <Skeleton animation="wave" variant="rect" className={classes.media} />

        <CardContent>
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Skeleton animation="wave" height={50} width={100} style={{ marginLeft: 9 }} />
        <Skeleton animation="wave" height={50} width={70} />
      </CardActions>
    </Card>
  );
}
