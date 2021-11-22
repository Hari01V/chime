import React, { useState } from 'react';

import { Modal, Input, Button, Icon } from 'semantic-ui-react';

import '../../styles/UploadModal.css';

const UploadModal = (props) => {
  const { modal, closeModal, upload } = props;

  const [name, setName] = useState('');
  const [artist, setArtist] = useState('');
  const [file, setFile] = useState(null);

  const uploadData = () => {
    if (isFormValid()) {
      // const data = {
      //   name: name,
      //   artist: artist,
      //   file: file
      // }
      const formData = new FormData();
      formData.append('name', name);
      formData.append('artist', artist);
      formData.append('file', file);

      upload(formData);
      closeModal();
      setName('');
      setArtist('');
      setFile(null);
    }
  }

  const isFormValid = () => {
    return name && artist && file;
  }

  const handleChange = (e, setValue) => {
    setValue(e.target.value);
  }

  const changeFile = (e) => {
    const files = e.target.files;
    if (files) {
      setFile(files[0]);
    }
  }

  return (
    <Modal basic open={modal} onClose={closeModal}>
      <Modal.Header>Upload a Song</Modal.Header>
      <Modal.Content className="modal-content">
        <Input fluid name="songName"
          style={{ marginBottom: 'o.7em' }}
          label={<Button icon={'add'} />}
          labelPosition="left"
          placeholder="Song Name"
          onChange={(e) => { handleChange(e, setName) }}
          value={name}
          className="modal-input" />
        <Input fluid name="artistName"
          style={{ marginBottom: 'o.7em' }}
          label={<Button icon={'add'} />}
          labelPosition="left"
          placeholder="Artist Name"
          onChange={(e) => { handleChange(e, setArtist) }}
          value={artist}
          className="modal-input" />
        <Input fluid label="File types: mp3"
          name="file" type="file" onChange={changeFile}
          className="modal-input" />
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" inverted onClick={uploadData}>
          <Icon name="checkmark" /> Send
        </Button>
        <Button color="red" inverted onClick={closeModal}>
          <Icon name="remove" /> Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default UploadModal;