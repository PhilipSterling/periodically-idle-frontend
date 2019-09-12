// import React from 'react';
import Header from "./Header"


// class Home extends React.Component {
//     render() {
//         return (<>
//            <Header history={this.props.history}/>
//         </>);
//     }
// }

// export default Home;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
  const chooseColor = (owned, req) => {
      if(owned >= req){
          return {backgroundColor: "green"}
      } else
      {
          return {backgroundColor: "red"}
      }
  }

  const handleChange = (panel, owned, req) => (event, isExpanded) => {
      if(owned >= req){
        setExpanded(isExpanded ? panel : false);
      }
  };
  return (<>
    <Header history={props.history}/>
    <div className={classes.root}>
      
      
    <ExpansionPanel style={chooseColor(props.location.neededItems.numOwned, 5)} expanded={expanded === 'panel'} onChange={handleChange('panel', props.location.neededItems.numOwned, 5)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Fact 1 - 5 {props.location.neededItems.elementName}s Required - {props.location.neededItems.numOwned} {props.location.neededItems.elementName}s Owned</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          {props.location.neededItems.facts[props.location.neededItems.elementName][0]}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={chooseColor(props.location.neededItems.numOwned, 10)} expanded={expanded === 'panel1'} onChange={handleChange('panel1', props.location.neededItems.numOwned, 10)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Fact 1 - 10 {props.location.neededItems.elementName}s Required - {props.location.neededItems.numOwned} {props.location.neededItems.elementName}s Owned</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          {props.location.neededItems.facts[props.location.neededItems.elementName][1]}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={chooseColor(props.location.neededItems.numOwned, 25)} expanded={expanded === 'panel2'} onChange={handleChange('panel2', props.location.neededItems.numOwned, 25)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Fact 1 - 25 {props.location.neededItems.elementName}s Required - {props.location.neededItems.numOwned} {props.location.neededItems.elementName}s Owned</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          {props.location.neededItems.facts[props.location.neededItems.elementName][2]}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={chooseColor(props.location.neededItems.numOwned, 50)} expanded={expanded === 'panel3'} onChange={handleChange('panel3', props.location.neededItems.numOwned, 50)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Fact 1 - 50 {props.location.neededItems.elementName}s Required - {props.location.neededItems.numOwned} {props.location.neededItems.elementName}s Owned</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          {props.location.neededItems.facts[props.location.neededItems.elementName][3]}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={chooseColor(props.location.neededItems.numOwned, 100)} expanded={expanded === 'panel4'} onChange={handleChange('panel4', props.location.neededItems.numOwned, 100)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Fact 1 - 100 {props.location.neededItems.elementName}s Required - {props.location.neededItems.numOwned} {props.location.neededItems.elementName}s Owned</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          {props.location.neededItems.facts[props.location.neededItems.elementName][4]}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
    </>
  );
}