import './polyfills';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Scrivito from 'scrivito';
import './Objs';
import './Widgets';
import App from './App';
import './config';

window.prerenderReady = false;
ReactDOM.render(<App />, document.getElementById('application'));
Scrivito.finishLoading().then(() => { window.prerenderReady = true; });
