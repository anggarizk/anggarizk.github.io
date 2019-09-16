import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import Email from '@material-ui/icons/Email';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    margin: -60,
    width: 120,
    height: 120,
  },
  root: {
    justifyContent: 'center'
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  card: {
    minWidth: 500,
    maxWidth: 500,
    paddingTop: '60px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12
  },
}));

function App() {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="App">
      <div className="App-header">
        <Grid container justify="center" alignItems="center">
          <Avatar alt="Angga Rizki Ramadhan" src="/photo.jpg" className={classes.bigAvatar} />
        </Grid>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>

            </Typography>
            <Typography variant="h5" component="h2">
              Angga Rizki Ramadhan
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Software Developer
            </Typography>
            <Typography variant="body2" component="p">
            As a Software Developer, I would like to bring technology to make life easier and increase productivity. I also want to create great products which have good design architecture, high scalability and easy to maintain.
            </Typography>
          </CardContent>
          <CardActions classes={{root: classes.root}}>
            <IconButton color="primary" className={classes.button} aria-label="Instagram" href="http://instagram.com/anggarizk" target="blank">
              <Instagram />
            </IconButton>
            <IconButton color="primary" className={classes.button} aria-label="LinkedIn" href="http://linkedin.com/in/angga-rizki-ramadhan-65a41270" target="blank">
              <LinkedIn />
            </IconButton>
            <IconButton color="primary" className={classes.button} aria-label="Mail">
              <Email />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default App;
