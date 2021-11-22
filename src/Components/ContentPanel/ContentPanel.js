import React from "react";
import { Segment } from "semantic-ui-react";

import Home from './Home';

import '../../styles/ContentPanel.css';

const ContentPanel = (props) => {
  const { nav, songs, setSong } = props;

  const getContent = () => {
    if (nav === "home") {
      return <Home songs={songs} setSong={setSong} />;
    }
  }

  return (
    <Segment
      inverted
      className="content-panel"
      style={{ background: 'inherit' }}>
      {getContent()}
    </Segment>
  )
}

export default ContentPanel;