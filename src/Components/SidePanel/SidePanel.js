import React, { useState } from "react";
import { Segment, Menu, Grid, Header, Icon, Button } from "semantic-ui-react";

import PlayLists from './PlayLists';
import Navs from './Navs';
import UploadModal from "./UploadModal";

import api from '../../api/index';

import '../../styles/SidePanel.css';

const SidePanel = (props) => {
  const { nav, setNav } = props;

  const [modal, setModal] = useState(false);
  const [uploading, setUploading] = useState(false);

  const upload = (data) => {
    api.addSong(data);
  }

  const openModal = () => {
    setModal(true);
  }
  const closeModal = () => {
    setModal(false);
  }


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
      <Navs nav={nav} setNav={setNav} />
      <PlayLists />
      <UploadModal modal={modal} closeModal={closeModal}
        upload={upload} />
      <Button
        onClick={openModal}
        content="Upload Song"
        labelPosition="right"
        icon="cloud upload"
        style={{ letterSpacing: '0.5px', background: '#ddd' }}
        disabled={uploading} />
    </Segment>
  )
}

export default SidePanel;