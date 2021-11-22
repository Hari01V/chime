import React from "react";
import { Header, Segment, Grid } from "semantic-ui-react";

import ViewCard from "../ViewCard";

import '../../styles/Home.css';

const Home = (props) => {
  const { songs, setSong, deleteSong } = props;

  return (
    <Segment inverted textAlign="left"
      style={{ padding: 0, background: 'inherit' }}>
      <Header as="h2">
        Songs for you
      </Header>
      <div className="songs-container">
        {songs && songs.map((song, index) => (
          <ViewCard data={song}
            key={index}
            setSong={setSong}
            deleteSong={deleteSong} />
        ))}
      </div>
    </Segment>
  )
}

export default Home;