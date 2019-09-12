import React from 'react';


class DisplayWeight extends React.Component {
    render() {
        return (<>
           {this.props.atomicWeight ? <h1>{this.props.atomicWeight} Atomic Weight</h1> :
           <h1>0 Atomic Weight</h1>}
           {<h5>Generating {(Math.round( this.props.genPerSec() * 10 ) / 10)} Atoms/s</h5>}
           </>
        );
    }
}

export default DisplayWeight;