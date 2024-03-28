import logo from './logo.svg';
import { createElement } from 'react';
import './App.css';
const nowYear = new Date().getFullYear();

export const App = () => {
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }, null),
			createElement(
				'p',
				null,
				'Edit ',
				createElement('code', null, 'src/App.js'),
				' and save to reload',
			),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('p', null, nowYear),
		),
	);
};
