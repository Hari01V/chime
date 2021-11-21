import React, { useState } from "react";

import { Grid } from 'semantic-ui-react'

import BottomPanel from './BottomPanel/BottomPanel';
import SidePanel from './SidePanel/SidePanel';
import ContentPanel from './ContentPanel/ContentPanel';

import '../styles/Player.css';

const Player = () => {
  const [nav, setNav] = useState();


  return (
    <Grid celled
      inverted
      style={{ margin: 0, height: '100%' }}
      background='#000'>
      <Grid.Row style={{ height: '80%' }}>
        <Grid.Column width={3} className="side-column"
          style={{ background: '#000000', fontSize: '1.2rem', boxShadow: 'none' }}>
          <SidePanel setNav={setNav} />
        </Grid.Column>

        <Grid.Column width={13} className="content-column"
          style={{ background: '#121212', fontSize: '1.2rem', boxShadow: 'none' }}>
          <ContentPanel nav={nav} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row centered style={{ height: '20%', boxShadow: 'none' }}>
        <Grid.Column width={16} className="bottom-column"
          style={{ background: '#181818', fontSize: '1.2rem' }}>
          <BottomPanel />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Player;