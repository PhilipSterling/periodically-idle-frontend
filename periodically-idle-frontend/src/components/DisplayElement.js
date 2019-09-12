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
        Helium: ["The word helium comes from the Greek word meaning sun (helios). It was named by Lockyer and English chemist Edward Frankland.","French and English astronomers Pierre Janssen and Norman Lockyer are jointly credited with discovering helium after spectral analysis of sunlight following a solar eclipse in 1868.","The USA is the world’s largest supplier of helium, with many reserves found in large natural gas fields.","Because helium is less dense than normal air, when inhaled from a source such as a helium balloon it briefly changes the sound of a person’s voice, making it much sound much higher.","Helium is the second most common element in the Universe (after hydrogen), making up around 24% of its mass."],
        Lithium: ["Although it is a metal, it is soft enough to cut with a knife.","Because it is the lightest metal, it can be alloyed with other metals such as aluminum and copper to make strong lightweight metals.","Along with hydrogen and helium, lithium was one of the three elements produced in large quantities by the Big Bang.","When burning, lithium gives off a bright red flame.","It is so light it can float on water."],
        Beryllium: ["Beryllium played a role in the discovery of the neutron when James Chadwick bombarded beryllium with alpha particles and discovered the subatomic particle with no net electric charge.","Louis Nicolas Vauquelin — the chemist who discovered beryllium also discovered another element — chromium.","The U.S. Department of Defense classifies beryllium as a strategic and critical material as it can be found in products that are essential to national security, according to the U.S. Geological Survey.","Beryllium-containing materials are used in cell phones, other portable devices and cameras, according to the Beryllium Science & Technology Association.","Beryllium is highly transparent to X-rays and is therefore used in windows for X-ray tubes, according to Jefferson Lab."],
        Boron: ["Boron, in its crystalline form, is the second-hardest element behind carbon (in its diamond form), according to Chemicool.","Unlike many elements, which form in fusion reactions within stars, boron formed after the Big Bang by a process called cosmic ray spallation.","Boron may have been the key to the evolution of life on Earth. The element stabilizes ribose, part of RNA, the self-assembling molecule that may have preceded DNA. (Viruses are essentially roving RNA strands.) A June 2014 study found that boron is present in the oldest rocks on Earth, which date back 3.8 billion years.","Boiling point: 7,232 degrees F (4,000 degrees C)","In 1909, when U.S. chemist Ezekiel Weintraub isolated 99 percent pure boron."],
        Carbon: ["Carbon gets its name from the Latin word carbo, which means coal","Diamonds and graphite are among the hardest and softest natural materials known, respectively. The only difference between the two is their crystal structure.","The tattoos of Ötzi the Iceman, a 5,300-year-old corpse found frozen in the Alps, were inked from carbon", "Carbon makes up 0.032 percent of the Earth's lithosphere (crust and outer mantle) by weight, according to the Encyclopedia of Earth.","Melting Point: 6,422 degrees Fahrenheit (3,550 degrees C)"],
        Nitrogen: ["Nitrogen makes up around 78% of the air you breathe.","Nitrogen gas is often used as an alternative to carbon dioxide for storing beer in pressurized kegs.","Nitrous oxide (also known as laughing gas or by its chemical formula N2O) is used in hospitals and dental clinics as an anesthetic.","Nitrous oxide is a considerable greenhouse gas and air pollutant. By weight is has nearly 300 times more impact than carbon dioxide.","Under normal conditions nitrogen is a colorless, odorless and tasteless gas."],
        Oxygen: ["Dry air is 21 percent oxygen.","Just five elements make up over 90 percent of the weight in the Earth’s crust. Almost half of the weight of the crust comes from oxygen.","The Northern (and Southern) Lights: The green and dark-red colors in the aurora borealis (and australis) are caused by oxygen atoms.","Oxygen is the third most abundant element in the universe.","Oxygen does not burn. It does, however, support the combustion of other substances."],
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