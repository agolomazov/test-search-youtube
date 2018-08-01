import React from 'react';

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

export default ms => {
	return function(Component) {
		return class withDebounce extends React.Component {
			render() {
				const debounceSearch = debounce(search, ms);
				return <Component {...this.props} onSearch={debounceSearch} />;
			}
		};
	};
};
