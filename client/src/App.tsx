import React, { Suspense, lazy, FC } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './App.scss';

import Layout from './components/layout';

const Home = lazy(() => import('./routes/home'));
const Encyclopedia = lazy(() => import('./routes/encyclopedia'));
const NotFound = lazy(() => import('./routes/not-found'));

const App: FC = () => {
    return (
        <Router>
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/encyclopedia" component={Encyclopedia} />
                        <Route path="/404" component={NotFound} />
                        <Redirect to="/404" />
                    </Switch>
                </Suspense>
            </Layout>
        </Router>
    );
}

export default hot(App);