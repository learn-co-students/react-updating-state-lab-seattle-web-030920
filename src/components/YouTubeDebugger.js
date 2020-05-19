import React from 'react'

class YouTubeDebugger extends React.Component {
    constructor() {
        super()

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

    handleChangeBitrate = () => {
        this.setState({
            settings: {
                ...this.state.setting, 
                bitrate: 12,
                video: {
                    ...this.state.settings.video
                }
            }
        })
    }

    handleChangeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleChangeBitrate}></button>
                <button className='resolution' onClick={this.handleChangeResolution}></button>
            </div>
        )
    }
}

export default YouTubeDebugger;
