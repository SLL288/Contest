import React from "react";

import App from "../../App.css";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Button from '@material-ui/core/Button';

import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  const gotoLogin=()=>{
  
  }
  
  
  const Topbar = () =>{
  
    const classes= useStyles();
  
    return(
        <div className="App">
          <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            {/* <Link href="/" color="inherit">News</Link> */}
              {/* <Link href="/abc" color="inherit">Profile</Link> */}
              <Button href="/" color="inherit">News</Button>
              {/* <Link href="/student" color="inherit">Students</Link> */}
              <Button href="/posts" color="inherit">Posts</Button>
              <Button href="/student" color="inherit">Students</Button>

            </Typography>
            
            <Button color="inherit" onClick={()=> gotoLogin()}>Login</Button>
          </Toolbar>
        </AppBar>
        </div>
    )
  }

  export default Topbar;