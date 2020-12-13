import React from 'react';
import HomeView from './views/Home';
import ChatView from './views/Chat';
import LoginView from './views/Login';
import RegisterView from './views/Register';
import SettingsView from './views/Settings';
import Navbar from './components/Navbar';
import {Provider} from "react-redux";
import initializeStore from './store/index';

import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

const store = initializeStore();

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <Navbar/>
                <div className='content-wrapper'>
                    <Switch>
                        <Route exact path="/chat/:id">
                            <ChatView/>
                        </Route>
                        <Route exact path="/settings">
                            <SettingsView/>
                        </Route>
                        <Route exact path="/login">
                            <LoginView/>
                        </Route>
                        <Route exact path="/register">
                            <RegisterView/>
                        </Route>
                        <Route exact path="/">
                            <HomeView/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    )
}