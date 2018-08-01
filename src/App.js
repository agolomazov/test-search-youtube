import React, { Component } from 'react';
import SearchBar from './features/YoutubePlayeer/search-bar';
import VideoList from './features/YoutubePlayeer/video-list';
import withDebounceSearch from './features/hoc/withDebounceSearch';

class App extends Component {
	state = {
		videos: [],
		term: '',
		loading: false,
	};

	handleChangeSearch = term => {
		this.setState(prevState => {
			if (!prevState.term !== term) {
				this.props.onSearch(term, videos => {
					this.setState({
						videos,
						loading: false,
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

export default withDebounceSearch(1000)(App);
