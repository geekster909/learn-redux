import React, { Component } from 'react';
import { render } from 'react-dom';

//import css
import css from './styles/style.styl';

//import componenets
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={PhotoGrid}></IndexRoute>
			<Router path="/view/:postId" component={Single}></Router>
		</Route>
	</Router>
)



render(
	router,
	document.getElementById('root')
);