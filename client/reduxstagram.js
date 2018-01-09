import React, { Component } from 'react';
import { render } from 'react-dom';

//import css
import css from './styles/style.styl';

//import componenets
import Main from './components/Main';

class Reduxstagram extends Component {
	render() {
		return (
			<div>
				<p>Hi</p>
			</div>
		);
	}
}

render(
	<Main />,
	document.getElementById('root')
);