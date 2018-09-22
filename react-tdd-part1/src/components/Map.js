import React from 'react';
import './Map.css';

class Map extends React.Component {
  render() {
    let imagePath;
    if (this.props.imageName) {
      imagePath = `images/${this.props.imageName}`;
    } else {
      imagePath = 'images/none.png';
    }
    return (
      <div className="MapBox">
        <img src={imagePath} alt={this.props.location} />
      </div>
    )
  }
}

export default Map;
