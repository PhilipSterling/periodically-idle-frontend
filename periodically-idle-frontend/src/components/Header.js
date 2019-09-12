import React from 'react';
import {Tabs, Paper, Tab} from '@material-ui/core'

class Header extends React.Component {
    handleHome = () => {
      this.props.history.push({pathname: "/home", state:{...this.state}})
    }
    handleProfile = () => {
      this.props.history.push({pathname: "/profile", state:{...this.state}})
    }
    handleAchieve = () => {
      this.props.history.push({pathname: "/achievements", state:{...this.state}})
    }
    handleHelp = () => {
      this.props.history.push({pathname: "/help", state:{...this.state}})
    }
    handleLogout = () => {
      localStorage.setItem("LogInToken", null)
      this.props.history.push({pathname: "/", state:{...this.state}})
    }
    index = "Hi";
    render() {
        return (
            <Paper square>
    <Tabs
        value={this.props.currentPage}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab onClick={this.handleHome} label="Home" />
        <Tab onClick={this.handleProfile} label="Profile Page" />
        <Tab onClick={this.handleAchieve} label="Achievements"/>
        <Tab onClick={this.handleHelp} label="Help" />
        <Tab onClick={this.handleLogout} label="Log Out" />
      </Tabs>
    </Paper>
        );
    }
}

export default Header;