import {Collapsible,CollapsibleItem,Row,Col} from 'react-materialize'
import React,{Component} from 'react'
import GoogleMapComponent from './GoogleMapComponent'
export default class AboutUs extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        return <Collapsible popout>
          <CollapsibleItem header="Who are we?" icon="whatshot" expanded="true">
          <div className="white">
              Anwesome technologies is founded in 2016 a registered company under the new companies act by a group of NIT engineers having wide range of track record.
          </div>
        </CollapsibleItem>
            <CollapsibleItem header="What we do?" icon="filter_drama" expanded="true">
              <div className="white">
                  The company is passionate about the product. The entrepreneur transform inspired innovation into realistic solutions. We keep on innovating new ideas and make sure our designs are latest and fully functional for the clients.
              </div>
            </CollapsibleItem>

            <CollapsibleItem header="Where are we located" icon="place" expanded="true">
                <Row><Col s={2}></Col><Col><GoogleMapComponent/></Col></Row>
            </CollapsibleItem>
        </Collapsible>
    }
}
