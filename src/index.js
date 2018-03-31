import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from './Routes/MainRouter';
//import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

//import HeaderComponent from './func_component/HeaderComponent';
//import MenuComponent from './func_component/MenuComponent';
//import ScrollSpyFirst from './func_component/ScrollSpyFirst';
import CDTTab from './testComponent/CDTTab';
//ReactDOM.render(<CDTTab />, document.getElementById('root'));
ReactDOM.render(<MainRouter />, document.getElementById('root'));
registerServiceWorker();
