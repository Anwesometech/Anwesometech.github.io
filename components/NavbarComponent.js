import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Navbar} from 'react-materialize'
export default class NavbarComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<Navbar brand="Anwesome Tech" className="cyan darken-1"></Navbar>)
    }
}
