import React, { useState } from "react";

import { Grid } from 'semantic-ui-react'

import BottomPanel from './BottomPanel/BottomPanel';
import SidePanel from './SidePanel/SidePanel';
import ContentPanel from './ContentPanel/ContentPanel';

import '../styles/Player.css';

const desc = "Best Anime OST, Songs, Music Opening & Ending with Tokyo Ghoul, Death Note, Full Metal, Naruto... Top OP | Musica | Japanese, Los mejores. Also inc a few gaming picks."

const SONGS = [
  {
    id: 'asdasd',
    name: 'hari-song',
    artist: 'hari',
    desc: null
  },
  {
    id: 'asdasd',
    name: 'hari-song',
    artist: 'hari',
    desc: null
  },
  {
    id: 'asdasd',
    name: 'hari-song',
    artist: 'hari',
    desc: null
  },
  {
    id: 'asdasd',
    name: 'hari-song',
    artist: null,
    desc: desc
  },
  {
    id: 'asdasd',
    name: 'hari-song',
    artist: null,
    desc: desc
  },
  {
    id: 'asdasd',
    name: 'hari-song',
    artist: 'hari',
    desc: null
  },
  {
    id: 'asdasd',
    name: 'hari-song',
    artist: null,
    desc: desc
  }
];

const Player = () => {
  const [nav, setNav] = useState("home");
  const [songs, setSongs] = useState(SONGS);


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
          <ContentPanel nav={nav} songs={songs} />
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