import React, { useEffect, useState } from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";

import api from '../../api';

import '../../styles/BottomPanel.css';

const BASE_URL = 'http://localhost:8080/song/';

const BottomPanel = (props) => {
  const { song } = props;

  useEffect(() => {
    console.log("changed");
    const audio = document.getElementById('audio-player');
    if (audio) {
      audio.pause();
      audio.load();
      audio.play();
    }
  }, [song]);

  return (
    <Segment
      inverted
      className="bottom-panel"
      textAlign="center">
      <Grid celled
        inverted
        className="bottom-panel-grid"
        background='#000'>
        <Grid.Row className="bottom-panel-row">
          <Grid.Column width={5}
            style={{ fontSize: '1.2rem', boxShadow: 'none', height: '100%' }}
            className="bottom-panel-column">
            {song &&
              <div className="bottom-namecard">
                <img src={props.song.img} className="bottom-namecard-img" />
                <div className="bottom-namecard-info">
                  <h3>{props.song.name}</h3>
                  <p>{props.song.artist}</p>
                </div>
                <Icon name="heart outline" className="bottom-namecard-like" />
              </div>
            }
          </Grid.Column>

          <Grid.Column width={6}
            style={{ fontSize: '1.2rem', boxShadow: 'none', height: '100%' }}
            className="bottom-panel-column">
            <div className="bottom-player">
              <audio controls id="audio-player">
                <source src={song ? `${BASE_URL}${song.filename}` : ''} type="audio/mpeg" />
              </audio>
            </div>
          </Grid.Column>

          <Grid.Column width={5}
            style={{ fontSize: '1.2rem', boxShadow: 'none', height: '100%' }}
            className="bottom-panel-column">
            <div className="">

            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default BottomPanel;