// import React from 'react';
import Header from "./Header"


// class Home extends React.Component {
//     render() {
//         return (
//            <Header history={this.props.history} currentPage={1}/>
//         );
//     }
// }

// export default Home;


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Hello from "../imgs/Philip.jpg"

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

export default function ImageAvatars(props) {
  const classes = useStyles();

  return (<>
  <Header history={props.history} currentPage={1}/>
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src={Hello} className={classes.bigAvatar} />
      <h1>{props.username} </h1>
      <Grid item sm = {12} justify="center">
      <h4>Most Atomic Weight held at once - {props.maxWeight} </h4>
      </Grid>
    </Grid>
    </>
      );
    }