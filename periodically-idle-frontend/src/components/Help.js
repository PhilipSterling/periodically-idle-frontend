import React from 'react';
import Header from "./Header"


class Home extends React.Component {
    render() {
        return (<>
           <Header history={this.props.history} currentPage={3}/>
           <h1>This page under construction</h1>
        </>);
    }
}

export default Home;