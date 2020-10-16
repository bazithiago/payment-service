import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Routes from './routes';
import Global from './components/global';

const App = () => (
	<>
		<BrowserRouter>
			<Global />
			<Routes />
		</BrowserRouter>
		<GlobalStyle />
	</>
);

export default App;
