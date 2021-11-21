import React from "react";
import { Segment, Menu, Icon, Item } from "semantic-ui-react";

import '../../styles/Navs.css';

const Navs = (props) => {
  const { nav, setNav } = props;

  return (
    <Segment inverted textAlign="left"
      style={{ padding: '0', background: 'inherit' }}>
      <Menu vertical inverted
        style={{ width: '100%', background: 'inherit' }}>
        <Menu.Item
          className="nav-link"
          active={nav === "home"}
          onClick={() => { setNav("home") }}>
          <span>
            <Icon name="exchange" /> HOME
          </span>
        </Menu.Item>
      </Menu>
    </Segment>
  )
}

export default Navs;