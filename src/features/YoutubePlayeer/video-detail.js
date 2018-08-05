import React from 'react';

const VideoDetail = ({ video }) => {
	if (!video) {
		return null;
	}
	const videoId = video.id.videoId;
	const videoUrl = `https://youtube.com/embed/${videoId}`;
	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe src={videoUrl} frameBorder="0" className="embed-responsive-item" />
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;
