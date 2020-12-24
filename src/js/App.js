import React, { useEffect } from 'react';
import HomeView from './views/Home';
import ChatView from './views/Chat';
import WelcomeView from './views/Welcome';
import SettingsView from './views/Settings';
import Navbar from './components/Navbar';
import {Provider} from "react-redux";
import initializeStore from './store/index';

import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { listenForAuthChanges } from './actions/auth';

const store = initializeStore();

export default function App() {
    
    useEffect(() => {
        store.dispatch(listenForAuthChanges());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Navbar/>
                <div className='content-wrapper'>
                    <Switch>
                        <Route exact path="/">
                            <WelcomeView/>
                        </Route>
                        <Route exact path="/chat/:id">
                            <ChatView/>
                        </Route>
                        <Route exact path="/settings">
                            <SettingsView/>
                        </Route>
                        <Route exact path="/home">
                            <HomeView/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    )
}