import React from 'react';
import ReactDOM from 'react-dom';
import * as page from './pages';
import './index.css';

const ROOT = document.getElementById('root');

const APP = <page.ListarHorario />;

ReactDOM.render(APP, ROOT);
