import React from 'react';
import Header from "./Header";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ElementFacts from "./ElementFacts.js"

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledExpansionPanels(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const chooseColor = (yes) => {
      if(yes){
          return {backgroundColor: "green"}
      } else
      {
          return {backgroundColor: "red"}
      }
  }

  const handleChange = (panel, yes) => (event, isExpanded) => {
      if(yes){
        setExpanded(isExpanded ? panel : false);
      }
  };
  return (<>
    <Header history={props.history}/>
    <div className={classes.root}>
    
      <ExpansionPanel style={chooseColor(props.tenHydrogenRequired)} expanded={expanded === 'panel1'} onChange={handleChange('panel1', props.tenHydrogenRequired)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Own 10 total Hydrogen</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
              Generate 4 Times more Atomic Weight per click -      
          <button hidden={props.tenHydrogenAccepted} onClick={props.tenHydrogenOwned}>Claim Reward</button>
          <p hidden ={!props.tenHydrogenAccepted}>CLAIMED!</p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
      
    <ExpansionPanel style={chooseColor(props.tenHeliumRequired)} expanded={expanded === 'panel2'} onChange={handleChange('panel2', props.tenHeliumRequired)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Own 10 total Helium</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
              Generate 4 Times more Atomic Weight per click -      
          <button hidden={props.tenHeliumAccepted} onClick={props.tenHeliumOwned}>Claim Reward</button>
          <p hidden ={!props.tenHeliumAccepted}>CLAIMED!</p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={chooseColor(props.fiftyElementsRequired)} expanded={expanded === 'panel'} onChange={handleChange('panel', props.fiftyElementsRequired)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Own 50 total Elements</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
              Generate 100 Times more Atomic Weight per click -      
          <button hidden={props.fiftyElementsAccepted} onClick={props.fiftyElementsOwned}>Claim Reward</button>
          <p hidden ={!props.fiftyElementsAccepted}>CLAIMED!</p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
    </>
  );
}