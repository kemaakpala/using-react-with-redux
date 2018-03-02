import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { WidgetTableContainer } from './components/widget-table-container';
import { appStore } from './app-store';

ReactDOM.render(<Provider store={appStore}>
	<WidgetTableContainer />
</Provider>, document.querySelector('main'));