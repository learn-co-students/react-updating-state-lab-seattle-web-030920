import React from 'react';

export default class YouTubeDebugger extends React.Component
{
    constructor()
    {
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
            ...this.state.settings,
            bitrate: 12
          }
        });
      };

    handleResolutionChange = () =>
    {
        this.setState({
            settings: {...this.state.settings,
                video: {...this.state.settings.video, resolution: '720p'}
            }
        })
    }

    render() 
    {
        return (<div>
            <button className="bitrate" onClick={this.handleChangeBitrate}>Change bitrate</button>            
            <button className="resolution" onClick={this.handleResolutionChange}></button>
        </div>)
    }
}