import React from "react";
import Navigation from "../Navigation/Navigation"
import './Header.css';
import logo from './logo.svg';



class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    showLogin = () => {console.log('login button click')};
    render() {
        let nav = this.props.navigationElements;
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Navigation navigationElements = {nav}/>
                <button onClick={this.showLogin}>Login</button>
            </header>
        )
    }
}

export default Header;