import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { func } from '../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/@types/prop-types';

let model={clicks:0};
function render(){
ReactDOM.render(
  
    <App clicks={model.clicks} onClick={()=> {model.clicks+=1; render();}}/>,
  document.getElementById('root')
      );
}
    render();



serviceWorker.unregister();
