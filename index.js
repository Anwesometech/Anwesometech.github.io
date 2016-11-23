import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import NavbarComponent from './components/NavbarComponent'
import TabComponent from './components/TabComponent'
import {Row,Col} from 'react-materialize'
class MainComponent extends Component {
    getInitialState() {
       return {counter:0}
    }
    constructor(props) {
      super(props)
      this.state = this.getInitialState()
    }
    componentDidMount() {
        setInterval(()=>{
          var counter = this.state.counter
          counter++
          this.setState({counter})
        },1000)
    }
    render() {
        return <div><NavbarComponent/><Row><Col s={1}></Col><Col s={10}><TabComponent/></Col><Col s={1}></Col></Row><Row>{this.state.counter}</Row></div>
    }
}
ReactDOM.render(<MainComponent/>,document.getElementById('container'))
