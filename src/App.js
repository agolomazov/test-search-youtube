import React, { Component } from 'react';
import SearchBar from './features/YoutubePlayeer/search-bar';
import VideoList from './features/YoutubePlayeer/video-list';
import YTSearch from 'youtube-api-search';
import debounce from 'lodash/debounce';

const API_KEY = 'AIzaSyATQflWNhavrZvEk4liPUHGlVYAvmHeCSA';

const debouncedSearch = (term, cb) => {
	return debounce(() => {
		return YTSearch(
			{
				key: API_KEY,
				term,
			},
			data => cb(data)
		);
	}, 1000);
};

class App extends Component {
	state = {
		videos: [],
		term: '',
	};

	handleChangeSearch = term => {
		this.setState(prevState => {
			if (!prevState.term !== term) {
				const searchVideo = text => {
					this.handleSearchVideos(text);
				};

				const getVideos = debouncedSearch(term, data =>
					this.setState({
						videos: data,
					})
				);
				getVideos();
				return {
					...prevState,
					term,
				};
			}
			return null;
		});
	};

	handleSearchVideos = term => {
		YTSearch(
			{
				key: API_KEY,
				term,
			},
			data => {
				this.setState({
					videos: data,
				});
			}
		);
	};

	render() {
		return (
			<div className="App">
				<SearchBar
					searchText={this.state.searchText}
					onChange={this.handleChangeSearch}
					placeholder="Search video"
				/>
			</div>
		);
	}
}

export default App;
