// Needed polyfills for React 16 for older browsers
// See https://reactjs.org/blog/2017/09/26/react-v16.0.html#javascript-environment-requirements
import 'core-js/modules/es6.map';
import 'core-js/modules/es6.set';
import React from 'react';
import * as Scrivito from 'scrivito';

window.React = React;
window.Scrivito = Scrivito;
