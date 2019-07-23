import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Icon } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Card from "@material-ui/core/Card";
import './style.css';

import {
  Link
} from "react-router-dom";
import { relative } from 'path';
// import { height } from '@material-ui/system';


function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="#">
        Lovable KIITians
      </Link>
      {' team.'}
    </Typography>
  );
}

const mystyle = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: 100,
  },
  avatar: {
    // margin: theme.spacing(2),
    margin: 'auto',
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  mycard:{
    padding:25,
    marginTop:22,
    marginBottom:22,
    BackgroudColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 20,
    alignSelf: "center"
  }
});

class SignUp extends React.Component {
  // componentDidMount(){
  //   const classes = useStyles();
  // }
  render(){
    const {classes} = this.props;

  return (
    <div className='cover'>
    <Grid container justify="center">
      {/* <CssBaseline /> */}
      <Grid item xs={12} sm={4}>
      <Card className={classes.mycard}>

      {/* <div className={classes.paper}> */}
        <Avatar className={classes.avatar}>
        <Icon>account_circle</Icon>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="uid"
                name="userId"
                variant="outlined"
                required
                fullWidth
                id="userId"
                label="User Id"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
                Already have an account? <Link to="/" variant="body2">Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      {/* </div> */}
      <Box mt={5}>
        <MadeWithLove />
      </Box>
      </Card>
    </Grid>
    </Grid>
    </div>
  );
}
}

export default withStyles(mystyle)(SignUp);