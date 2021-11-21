import React from "react";
import { Segment, Menu, Grid, Header, Icon } from "semantic-ui-react";

import PlayLists from './PlayLists';
import Navs from './Navs';

import '../../styles/SidePanel.css';

const SidePanel = () => {

  return (
    <Segment
      inverted
      className="side-panel"
      style={{ background: '#000000', padding: '0' }}>
      <Segment
        inverted style={{ padding: '4px 0', background: 'inherit' }}>
        <Header inverted
          textAlign="center" as="h2">
          <Header.Content>
            <Icon name="magic" style={{ fontSize: '1em' }} />Chime
          </Header.Content>
        </Header>
      </Segment>
      <Navs />
      <PlayLists />
    </Segment>
  )
}

export default SidePanel;