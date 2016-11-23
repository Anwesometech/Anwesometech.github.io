import React,{Component} from 'react'
import {Row,Col} from 'react-materialize'
export default class GoogleMapComponent extends Component {
    constructor(props) {
       super(props)
       this.state = {w:window.innerWidth,h:window.innerHeight}
    }
    componentDidMount() {
        window.onresize = ()=> {
            this.setState({w:window.innerWidth,h:window.innerHeight})
        }
    }
    render() {
      var myLocation = {lat:12.9964336,lng:77.65546979999999}
      var myApiKey = "AIzaSyBsG_tWoad3I-cGZhPyHUmfn3gSiI5yWIk"

      var imgSrc = `https://maps.googleapis.com/maps/api/staticmap?center=${myLocation.lat},${myLocation.lng},&zoom=13&size=${Math.floor(this.state.w)}x${Math.floor(this.state.h/3)}&maptype=roadmap&markers=color:red%7Clabel:A%7C${myLocation.lat},${myLocation.lng}&key=${myApiKey}`
      return <img className="responsive-img" src={imgSrc}></img>
    }
}
