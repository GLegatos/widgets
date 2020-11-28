import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Color from './components/Color';
import Header from './components/Header';

const App = () => {

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/color">
                <Color />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};

export default App;