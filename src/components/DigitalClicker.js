// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }
  }

  handleRes = () => {
    this.setState({
        settings: {
          ...this.state.settings,
          video: {
            resolution: '720p'
          }
        }
      });
  }

  handleBit = () => {
    this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      });
}

  render() {
    return (
        <div>
      <button onClick={this.handleBit} className="bitrate"> bitrate</button>
      <button onClick={this.handleRes} className="resolution"> resolution</button>
      </div>
    );
  }
}

export default DigitalClicker;