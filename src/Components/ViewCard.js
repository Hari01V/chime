import React from "react";

import '../styles/ViewCard.css';

import YourName from '../samples/YourName.jpg';
import { Icon } from "semantic-ui-react";

const ViewCard = (props) => {
  const { data, setSong } = props;

  const changeSong = () => {
    setSong(data);
  }

  return (
    <div className="viewcard" onClick={changeSong}>
      <div className="viewcard-img-container">
        <img src={YourName} className="viewcard-img" />
        <div className="viewcard-play">
          <Icon name="play circle" color="green" inverted />
        </div>
      </div>
      <div className="viewcard-info">
        <h3 className="viewcard-info-title">{data.name}</h3>
        {data.artist &&
          data.artist.length > 20 ? data.artist.substring(0, 20) + '...' : data.artist}
        {data.desc &&
          data.desc.length > 20 ? data.desc.substring(0, 20) + '...' : data.desc}
      </div>
    </div>
  )
}

export default ViewCard;