import React from "react";
import { Header, Segment, Grid } from "semantic-ui-react";

import ViewCard from "../ViewCard";

import '../../styles/Home.css';

const Home = (props) => {
  const { songs } = props;

  return (
    <Segment inverted textAlign="left"
      style={{ padding: 0, background: 'inherit' }}>
      <Header as="h2">
        Songs for you
      </Header>
      <div className="songs-container">
        {songs.map(song => (
          <ViewCard data={song} />
        ))}
      </div>
    </Segment>
  )
}

export default Home;