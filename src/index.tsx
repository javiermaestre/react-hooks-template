import React from 'react';
import { render } from 'react-dom';

/* Local imports */
import AppRouter from './components/router/router';
import './shared/i18n/i18n';

// CSS
import 'bootstrap/scss/bootstrap.scss';
import './styles/main.scss';

render(<AppRouter />, document.getElementById('root'));
