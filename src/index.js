import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import { HashRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import ScrollToTop from './utility-components/scroll-to-top'; //scroll to top after each route change

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<ScrollToTop>
				<PersistGate persistor={persistor}>
					<App />
				</PersistGate>
			</ScrollToTop>
		</Router>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.register();
