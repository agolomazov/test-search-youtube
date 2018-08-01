import React, { Component } from 'react';
import SearchBar from './features/YoutubePlayeer/search-bar';
import VideoList from './features/YoutubePlayeer/video-list';
import YTSearch from 'youtube-api-search';
import debounce from 'lodash/debounce';

const API_KEY = 'AIzaSyATQflWNhavrZvEk4liPUHGlVYAvmHeCSA';

const search = (term, cb) => {
	YTSearch(
		{
			key: API_KEY,
			term,
		},
		data => cb(data)
	);
};

const debounceSearch = debounce(search, 500);

class App extends Component {
	state = {
		videos: [],
		term: '',
	};

	handleChangeSearch = term => {
		this.setState(prevState => {
			if (!prevState.term !== term) {
				debounceSearch(term, videos => {
					this.setState({
						videos,
					});
				});
				return {
					...prevState,
					term,
				};
			}
			return null;
		});
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
