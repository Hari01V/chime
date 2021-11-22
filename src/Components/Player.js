import React, { useEffect, useState } from "react";

import { Grid } from 'semantic-ui-react'

import BottomPanel from './BottomPanel/BottomPanel';
import SidePanel from './SidePanel/SidePanel';
import ContentPanel from './ContentPanel/ContentPanel';

import api from "../api";

import '../styles/Player.css';

const Player = () => {
  const [nav, setNav] = useState("home");
  const [songs, setSongs] = useState(null);
  const [song, setSong] = useState(null);

  useEffect(() => {
    api.getAllSongsData().then((result) => {
      console.log(result.data);
      setSongs(result.data);
      // setSong(result.data[0]);
    })
  }, []);

  const deleteSong = (id, filename) => {
    api.deleteSong(id, filename);
  }

  return (
    <Grid celled
      inverted
      style={{ margin: 0, height: '100%' }}
      background='#000'>
      <Grid.Row style={{ height: '80%' }}>
        <Grid.Column width={3} className="side-column"
          style={{ background: '#000000', fontSize: '1.2rem', boxShadow: 'none', height: '100%' }}>
          <SidePanel setNav={setNav} nav={nav} />
        </Grid.Column>

        <Grid.Column width={13} className="content-column"
          style={{ background: '#121212', fontSize: '1.2rem', boxShadow: 'none', height: '100%' }}>
          <ContentPanel nav={nav}
            songs={songs}
            setSong={setSong}
            deleteSong={deleteSong} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row centered style={{ height: '20%', boxShadow: 'none' }}>
        <Grid.Column width={16} className="bottom-column"
          style={{ background: '#181818', fontSize: '1.2rem' }}>
          <BottomPanel song={song} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Player;