import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
    render() {
        return (
            <div>
                <h2>Hello!</h2>
            </div>
        )
    }
}

class Goodbye extends React.Component {
    render() {
        return (
            <div>    
                <h2>Goodbye!</h2>
            </div>
        )
    }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <h1>Greeting app</h1>
            <a href="/hello">Say hello</a>
            <a href="goodbye">Say goodbye</a>            
            <Route path="/hello" component={Hello}/>
            <Route path="/goodbye" component={Goodbye}/>
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
