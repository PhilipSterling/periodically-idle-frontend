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
  const showelements = () => {
    let ra = []
    for (let i = 0; i < props.numbers_owned.length; i++) {
        const element_owned = props.numbers_owned[i];
        const element_name = props.elementnames[i]
        ra.push(<Grid item sm = {12} justify="center" alignItems="center"><h4>{element_owned} {element_name} owned</h4></Grid>)
    }
    return ra
}
  return (<>
  <Header history={props.history} currentPage={1}/>
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src={Hello} className={classes.bigAvatar} />
      <h1>{props.username} </h1>
      <Grid item sm = {12} justify="center" alignItems="center">
      <h4>Most Atomic Weight held at once - {props.maxWeight} </h4>
      </Grid>
      {showelements(props)}
    </Grid>
    </>
      );
    }