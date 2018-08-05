import React, { Component } from 'react';

class VideoListItem extends Component {
	render() {
		const { snippet } = this.props.video;
		return (
			<li className="list-group-item" onClick={this.props.onSelectVideo}>
				<div className="video-list media">
					<div className="media-left">
						<img src={snippet.thumbnails.default.url} alt={snippet.title} className="media-object" />
					</div>
					<div className="media-body">
						<div className="media-heading">{snippet.title}</div>
					</div>
				</div>
			</li>
		);
	}
}

export default VideoListItem;
