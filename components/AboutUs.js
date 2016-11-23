import {Collapsible,CollapsibleItem,Row,Col} from 'react-materialize'
import React,{Component} from 'react'
import GoogleMapComponent from './GoogleMapComponent'
export default class AboutUs extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        return <Collapsible popout>
            <CollapsibleItem header="What we do" icon="filter_drama">
              We are trying to solve problems that people face on daily basis with technology
            </CollapsibleItem>
            <CollapsibleItem header="Who are we" icon="whatshot">
              We are bunch of like minded people who have rich experience in technology,marketting and sales
            </CollapsibleItem>
            <CollapsibleItem header="Where are we located" icon="place">
                <Row><Col s={2}></Col><Col><GoogleMapComponent/></Col></Row>
            </CollapsibleItem>
        </Collapsible>
    }
}
