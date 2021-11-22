import React, { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";

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
      {song &&
        <audio controls id="audio-player">
          <source src={`${BASE_URL}${song.filename}`} type="audio/mpeg" />
        </audio>
      }
    </Segment>
  )
}

export default BottomPanel;