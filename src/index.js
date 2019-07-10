import React from 'react';
import ReactDOM from 'react-dom';

import Main from './Main';
import { withRenderMessage } from './hoc';
import * as serviceWorker from './serviceWorker';

const MainWithRenderMessage = withRenderMessage(Main, 'Main');

ReactDOM.render(<MainWithRenderMessage />, document.getElementById('root'));

serviceWorker.unregister();
