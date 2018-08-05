import React, { Component } from 'react';
import { equals } from 'ramda';
import './App.css';
import SearchBar from './features/YoutubePlayeer/search-bar';
import VideoList from './features/YoutubePlayeer/video-list';
import VideoDetail from './features/YoutubePlayeer/video-detail';
import withDebounceSearch from './features/hoc/withDebounceSearch';

class App extends Component {
	state = {
		videos: [],
		term: '',
		selectedVideo: null,
		loading: false,
	};

	handleChangeSearch = term => {
		this.setState(prevState => {
			if (!prevState.term !== term) {
				if (term === '') {
					return {
						...prevState,
						loading: false,
						videos: [],
					};
				}

				this.props.onSearch(term, videos => {
					this.setState({
						videos,
						loading: false,
						selectedVideo: videos.length > 0 ? videos[0] : this.state.selectedVideo,
					});
				});
				return {
					...prevState,
					term,
					loading: true,
				};
			}
			return null;
		});
	};

	handleSelectyVideo = video => {
		this.setState(prevState => {
			if (!equals(prevState.selectedVideo, video)) {
				return {
					...prevState,
					selectedVideo: video,
				};
			}
			return null;
		});
	};

	render() {
		const { loading, videos, selectedVideo, searchText } = this.state;
		let templateList = <VideoList videos={this.state.videos} onSelectVideo={this.handleSelectyVideo} />;

		if (loading) {
			templateList = <p>Loading...</p>;
		}

		return (
			<div className="App">
				<div className="search-container col-md-12">
					<SearchBar searchText={searchText} onChange={this.handleChangeSearch} placeholder="Search video" />
				</div>
				{selectedVideo && <VideoDetail video={selectedVideo} />}
				{templateList}
			</div>
		);
	}
}

export default withDebounceSearch(300)(App);
