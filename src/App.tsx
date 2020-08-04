import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//import LoadSpinner from './components/loadspinner';
import Layout from './layout';

const Home = lazy(() => import('./routes/home'));
const News = lazy(() => import('./routes/news'));
const Encyclopedia = lazy(() => import('./routes/encyclopedia'));
const NotFound = lazy(() => import('./routes/not-found'));

function App() {
    return (

        <Router>
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/news" component={News} />
                        <Route path="/encyclopedia" component={Encyclopedia} />
                        <Route path="/404" component={NotFound} />
                        <Redirect to="/404" />
                    </Switch>
                </Suspense>
            </Layout>
        </Router>
    );
}

export default App;