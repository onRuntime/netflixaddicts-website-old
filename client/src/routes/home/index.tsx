import React from 'react';
import { Helmet } from 'react-helmet';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>{process.env.REACT_APP_BASE_TITLE} - Accueil</title>
            </Helmet>
        </>
    );
}