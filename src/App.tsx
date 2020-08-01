import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoadSpinner from './components/loadspinner';
import Layout from './layout';

const Home = lazy(() => import('./routes/home'));
const Encyclopedia = lazy(() => import('./routes/encyclopedia'));

function App() {
    return (
        <Layout>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/encyclopedia" component={Encyclopedia} />
                    </Switch>
                </Suspense>
            </Router>
        </Layout>
    );
}

export default App;