import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = props => {
	return (
		<ul className="col-md-4 list-group">
			{props.videos.map(video => (
				<VideoListItem video={video} onSelectVideo={() => props.onSelectVideo(video)} key={video.id.videoId} />
			))}
		</ul>
	);
};

export default VideoList;
