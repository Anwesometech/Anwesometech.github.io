import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Navbar} from 'react-materialize'
export default class NavbarComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<Navbar brand="Anwesome Tech" className="purple darken-4"></Navbar>)
    }
}
