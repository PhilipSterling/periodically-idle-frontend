import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Hydrogen from "../imgs/hydrogen.jpg";
import Helium from "../imgs/helium.jpg";
import Lithium from "../imgs/lithium.jpg";
import Beryllium from "../imgs/beryllium.jpg";
import Boron from "../imgs/boron.jpg";
import Carbon from "../imgs/carbon.jpg";
import Nitrogen from "../imgs/nitrogen.jpg";
import Oxygen from "../imgs/oxygen.jpg";


export default class ImgMediaCard extends React.Component {
    goToElementShow = () => {
        this.props.history.push({pathname: `/element/?id=${this.props.elementInDatabase}`, neededItems:{numOwned: this.props.numOwned,
        elementName: this.props.elementName,
    facts: {
        Hydrogen: ["About 10 percent of the weight of living organisms is hydrogen – mainly in water, proteins and fats.",
        "Hydrogen forms both positive and negative ions. It does this more readily than any other element.",
    "Liquid hydrogen has the lowest density of any liquid.",
    "We owe most of the energy on our planet to hydrogen. The Sun’s nuclear fires convert hydrogen to helium releasing a large amount of energy.","Hydrogen is believed to be one of three elements produced in the Big Bang; the others are helium and lithium."],
        Helium: [],
        Lithium: [],
        Beryllium: [],
        Boron: [],
        Carbon: [],
        Nitrogen: [],
        Oxygen: [],
    }}})
    }
    imageToDisplay = () => {
        switch(this.props.elementName) {
            case "Hydrogen":
              return Hydrogen
            case "Helium":
              return Helium
            case "Lithium":
              return Lithium
            case "Beryllium":
              return Beryllium
            case "Boron":
                return Boron
            case "Carbon":
                return Carbon
            case "Nitrogen":
                return Nitrogen
            case "Oxygen":
                return Oxygen
            default:
              return Hydrogen
          }
    }
    calculateCost = () => {
        let cost
        switch(this.props.elementName) {
            case "Hydrogen":
                cost = 10
                if(this.props.numOwned > 0){
                    cost = cost * (Math.pow(1.15, this.props.numOwned))
                }
                return Math.floor(cost)
            case "Helium":
                cost = 100
                if(this.props.numOwned > 0){
                    cost = cost * (Math.pow(1.15, this.props.numOwned))
                }
                return Math.floor(cost)
            case "Lithium":
                cost = 1000
                if(this.props.numOwned > 0){
                    cost = cost * (Math.pow(1.15, this.props.numOwned))
                }
                return Math.floor(cost)
            case "Beryllium":
                cost = 10000
                if(this.props.numOwned > 0){
                    cost = cost * (Math.pow(1.15, this.props.numOwned))
                }
                return Math.floor(cost)
            case "Boron":
                cost = 100000
                if(this.props.numOwned > 0){
                    cost = cost * (Math.pow(1.15, this.props.numOwned))
                }
                return Math.floor(cost)
            case "Carbon":
                cost = 1000000
                if(this.props.numOwned > 0){
                    cost = cost * (Math.pow(1.15, this.props.numOwned))
                }
                return Math.floor(cost)
            case "Nitrogen":
                cost = 10000000
                if(this.props.numOwned > 0){
                    cost = cost * (Math.pow(1.15, this.props.numOwned))
                }
                return Math.floor(cost)
            case "Oxygen":
                cost = 100000000
                if(this.props.numOwned > 0){
                    cost = cost * (Math.pow(1.15, this.props.numOwned))
                }
                return Math.floor(cost)
            default:
              return NaN
          }
    }
    concatNameAndOwned = () => {
        return `${this.props.elementName}, ${this.props.numOwned} owned`
    }
    notEnoughMoney = () => {
        if(this.props.atomicWeight >= this.calculateCost()){
            return false
        } else {
            return true
        }
    }
  render() {
  return (
    <Card style = {{maxWidth: 345}}>
      <CardActionArea onClick={this.goToElementShow}>
        <CardMedia
          component="img"
          alt={this.props.elementName}
          height="140"
          image={this.imageToDisplay()}
          title={this.props.elementName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.concatNameAndOwned()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" disabled={this.notEnoughMoney()} onClick ={() => this.props.purchase(this.props.index, this.calculateCost())}>
          Buy for {this.calculateCost()} A.W
        </Button>
        <Button size="small" color="primary" onClick={this.goToElementShow}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
  }
}