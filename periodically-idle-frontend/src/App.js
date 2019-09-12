import React from 'react';
import Home from "./components/Home"
import Help from "./components/Help"
import Login from "./components/Login"
import Element from "./components/ElementShow"
import Achievements from "./components/Achievements"
import Profile from "./components/Profile"
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
const elementnames = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen"]
const routes = [
  {
    path: "/help",
    component: Help
  }
]

class App extends React.Component {
  state = {atomicWeight: 0 , element_ids: [], numbers_owned: [], max_owned: 0, fiftyElementsAccepted: false, tenHydrogenAccepted: false, tenHeliumAccepted: false}
  componentDidMount() {
    fetch("http://localhost:7777/user_elements").then(res => res.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        const element = json[i];
        let element_id = element.element_id
        let number_owned = element.number_owned
        this.setState({element_ids: [...this.state.element_ids, element_id]})
        this.setState({numbers_owned: [...this.state.numbers_owned, number_owned]})
      }
    }).then(this.autoIncrementAtomicWeight())
  }

  genPerSec = () => {
    let generatePerSec = 0 
    for (let i = 0; i < this.state.numbers_owned.length; i++) {
        const elementNum = this.state.numbers_owned[i];
        switch(i) {
            case 0:
                for (let j = 0; j < elementNum; j++) {
                    generatePerSec += 0.1
                }
                break;
            case 1:
                for (let j = 0; j < elementNum; j++) {
                    generatePerSec += 1
                }
                break;
            case 2:
                for (let j = 0; j < elementNum; j++) {
                    generatePerSec += 10
                }
                break;
            case 3:
                for (let j = 0; j < elementNum; j++) {
                    generatePerSec += 100
                }
                break;
                case 4:
                    for (let j = 0; j < elementNum; j++) {
                        generatePerSec += 1000
                    }
                    break;
                    case 5:
                for (let j = 0; j < elementNum; j++) {
                    generatePerSec += 10000
                }
                break;
                case 6:
                for (let j = 0; j < elementNum; j++) {
                    generatePerSec += 75000
                }
                break;
                case 7:
                for (let j = 0; j < elementNum; j++) {
                    generatePerSec += 500000
                }
                break;
            default:
              generatePerSec = generatePerSec
          }
    }
    return generatePerSec
}
autoIncrementAtomicWeight = (nonWholeNumber = 0) => {
  const generation = this.genPerSec() / 4
  if (generation % 1 != 0){
    nonWholeNumber = generation % 1 + nonWholeNumber
  }
  let incrementValue = generation - (generation % 1)
  if(nonWholeNumber > 1){
    incrementValue += nonWholeNumber - (nonWholeNumber % 1)
    nonWholeNumber = nonWholeNumber % 1    
  }
  incrementValue = Math.ceil(incrementValue)
  if(this.state.atomicWeight + incrementValue > this.state.max_owned){
    this.setState({max_owned: this.state.atomicWeight + incrementValue})
  }
  this.setState({atomicWeight: this.state.atomicWeight + incrementValue})
    setTimeout(() => { 
      this.autoIncrementAtomicWeight(nonWholeNumber)
    }, 250);
}
  incrementAtomicWeight = () => {
    let numadd = 1
    if(this.state.fiftyElementsAccepted){
      numadd = numadd * 100
    }
    if(this.state.tenHydrogenAccepted){
      numadd = numadd * 4
    }
    if(this.state.tenHeliumAccepted){
      numadd = numadd * 4
    }
    this.setState({atomicWeight: this.state.atomicWeight + numadd})
  }
  purchase = (i, cost) => {
    this.state.numbers_owned[i]++
    this.setState({numbers_owned: this.state.numbers_owned,
    atomicWeight: this.state.atomicWeight - cost})
  }
  sumElements50 = () => {
    let rv = 0;
    for (let i = 0; i < this.state.numbers_owned.length; i++) {
      const element = this.state.numbers_owned[i];
      rv += element
    }
    if(rv >= 50){
      return true
    } else
    {
      return false
    }
  }
  sumHydrogen10 = () => {
    if(this.state.numbers_owned[0] >= 10){
      return true
    } else
    {
      return false
    }
  }
  sumHelium10 = () => {
    if(this.state.numbers_owned[1] >= 10){
      return true
    } else
    {
      return false
    }
  }
  fiftyElementsOwned = () => {
    this.setState({fiftyElementsAccepted: true})
  }
  tenHydrogenOwned = () => {
    this.setState({tenHydrogenAccepted: true})
  }
  tenHeliumOwned = () => {
    this.setState({tenHeliumAccepted: true})
  }

  render(){
  return (
    <Router> 
      <Route exact path = "/" render={(props) => <Login {...props} currentPage= {this.state.currentPage}/>}/>
      <Route exact path = "/home" render={(props) => <Home {...props} incrementAtomicWeight={this.incrementAtomicWeight} atomicWeight={this.state.atomicWeight} numbers_owned={this.state.numbers_owned} element_names={elementnames} 
      genPerSec = {this.genPerSec}
      doSomething = {this.props.doSomething}
      purchase = {this.purchase}
      element_ids = {this.state.element_ids}/>}/>
      <Route exact path = "/achievements" render={(props) => <Achievements {...props} incrementAtomicWeight={this.incrementAtomicWeight} atomicWeight={this.state.atomicWeight} numbers_owned={this.state.numbers_owned} element_names={elementnames} 
      fiftyElementsRequired={this.sumElements50()}
      fiftyElementsOwned={this.fiftyElementsOwned}
      fiftyElementsAccepted={this.state.fiftyElementsAccepted}
      tenHydrogenRequired={this.sumHydrogen10()}
      tenHydrogenOwned={this.tenHydrogenOwned}
      tenHydrogenAccepted={this.state.tenHydrogenAccepted}
      tenHeliumRequired={this.sumHelium10()}
      tenHeliumOwned={this.tenHeliumOwned}
      tenHeliumAccepted={this.state.tenHeliumAccepted}
      genPerSec = {this.genPerSec}/>}/>
      <Route exact path = "/profile" render={(props) => <Profile {...props} incrementAtomicWeight={this.incrementAtomicWeight} maxWeight={this.state.max_owned} username={"Philip"} 
      genPerSec = {this.genPerSec}/>}/>
      <Route path = "/element" render = {(props) => <Element {...props} incrementAtomicWeight={this.incrementAtomicWeight} atomicWeight={this.state.atomicWeight} numbers_owned={this.state.numbers_owned} element_names={elementnames} 
      genPerSec = {this.genPerSec}/>}/>
      {routes.map(({path, component : C}, index) => (
        <Route
        path={path}
        key = {index}
        render={(props) => <C {...props} />}
        />
      ))}
    </Router>
  );
      }
}

export default App;
