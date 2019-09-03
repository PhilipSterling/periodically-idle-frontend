import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ElementCard from "./element"

const useStyles = makeStyles({
  card: {
    minWidth: 275,
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
    marginBottom: 12,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 1,
    textAlign: 'center',
    color: "#FFF",
  },
});


export default function NestedGrid() {
  const classes = useStyles();
  function FormRow() {
    return (
      <>
        <Grid item xs={.2}>
          <ElementCard minWidth={400} minHeight={150}/>
        </Grid>
        <Grid item xs={.2} minWidth={200} minHeight={150}>
          <ElementCard />
        </Grid>
        <Grid item xs={.2}>
            <ElementCard />
        </Grid>
        <Grid item xs={.2}>
          <ElementCard minWidth={400} minHeight={150}/>
        </Grid>
        <Grid item xs={.2} minWidth={200} minHeight={150}>
          <ElementCard />
        </Grid>
        <Grid item xs={.2}>
            <ElementCard />
        </Grid>
      </>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}