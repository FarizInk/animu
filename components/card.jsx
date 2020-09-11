import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { blue } from '@material-ui/core/colors';

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

export default function MediaCard(props) {
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
          // height="140"
          image={props.image}
          title={props.title}
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography> */}
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
