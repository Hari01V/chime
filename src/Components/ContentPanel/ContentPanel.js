import React from "react";
import { Segment } from "semantic-ui-react";

import { Routes, Route } from "react-router-dom";

import Home from './Home';

import '../../styles/ContentPanel.css';

const ContentPanel = (props) => {
  const { nav } = props;


  return (
    <Segment
      inverted
      className="content-panel">
      <Routes>
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </Segment>
  )
}

export default ContentPanel;