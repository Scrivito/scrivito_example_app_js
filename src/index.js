// Needed polyfills for React 16 for older browsers
// See https://reactjs.org/blog/2017/09/26/react-v16.0.html#javascript-environment-requirements
import 'core-js/modules/es6.map';
import 'core-js/modules/es6.set';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './Objs';
import './Widgets';
import App from './App';
import './config';

ReactDOM.render(<App />, document.getElementById('application'));

// TODO: Remove once https://github.com/infopark/rails_connector/issues/3829 is resolved.
window.React = React;
