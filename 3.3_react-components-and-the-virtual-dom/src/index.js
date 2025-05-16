import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from './components/main-view/main-view';

const App = () => {
    return <MainView />;
};

ReactDOM.render(<App />, document.getElementById('root'));