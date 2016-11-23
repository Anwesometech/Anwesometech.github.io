import React,{Component} from 'react'
import {Tabs,Tab} from 'react-materialize'
import AboutUs from './AboutUs'
export default class TabComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {


        return (<Tabs className="light-blue darken-1 white-text z-depth-1 ">
          <Tab className="white-text" title="About Us"><AboutUs/></Tab>
          <Tab className="white-text" title="Products">Coming Soon</Tab>
          <Tab className="white-text" title="Team">Coming Soon</Tab>
          <Tab className="white-text" title="Contact US">Coming Soon</Tab>
        </Tabs>)
    }
}
