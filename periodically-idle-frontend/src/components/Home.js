import React from 'react';
import Header from "./Header"
import ClickElement from "./ClickElement"
import DisplayWeight from "./DisplayWeight"
import DisplayElement from "./DisplayElement"
import {Grid} from '@material-ui/core';

class Home extends React.Component {
    displayElements = () => {
        let returnObject = []
        for (let i = 0; i < this.props.numbers_owned.length; i++) {
            const numElement = this.props.numbers_owned[i];
            let returnElement = <DisplayElement history={this.props.history} index ={i} key={i} elementName = {this.props.element_names[i]} numOwned = {this.props.numbers_owned[i]}
            elementInDatabase={this.props.element_ids[i]} 
            atomicWeight = {this.props.atomicWeight}
            purchase = {this.props.purchase}/>
            returnObject = [...returnObject, returnElement]
        }
        return returnObject
    }

    render() {
        return (<>
           <Header history={this.props.history} currentPage={0}/>
           <DisplayWeight atomicWeight={this.props.atomicWeight} genPerSec={this.props.genPerSec}/>
           <Grid container>
               <Grid item sm = {6}>

                <ClickElement incrementAtomicWeight = {this.props.incrementAtomicWeight}/>
                </Grid>
                <Grid item sm = {6}>
                {this.displayElements()}
                </Grid>
           </Grid>
           <button onClick={() => this.props.history.push({pathname: "/", state:{...this.state}})}> RESET ALL</button>
           </>
        );
    }
}

export default Home;