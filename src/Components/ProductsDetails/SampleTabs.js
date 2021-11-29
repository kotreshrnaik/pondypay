import { useState } from 'react';
import {Tabs, Tab} from 'react-bootstrap'

function SampleTabs() {
    const [key, setKey] = useState('home');
  
    return (
      <Tabs justify
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Benefits">
          Benefits
        </Tab>
        <Tab eventKey="profile" title="Cooking">
          Cooking Information
        </Tab>
        {/* <Tab eventKey="contact" title="Contact">
          world
        </Tab> */}
      </Tabs>
    );
  }
  
  export default SampleTabs