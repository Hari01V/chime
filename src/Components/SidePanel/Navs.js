import React from "react";
import { Segment, Menu, Icon, Item } from "semantic-ui-react";

import '../../styles/Navs.css';

const Navs = () => {

  return (
    <Segment inverted textAlign="left"
      style={{ padding: '0', background: 'inherit' }}>
      <Menu vertical inverted
        style={{ width: '100%', background: 'inherit' }}>
        <Menu.Item
          className="nav-link"
          onClick={() => { }}>
          <span>
            <Icon name="exchange" /> HOME
          </span>
        </Menu.Item>
      </Menu>
    </Segment>
  )
}

export default Navs;