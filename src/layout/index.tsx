import React, { Component } from 'react';
import { Header, Footer } from '../components';

export default class Layout extends Component {
    render() {
        return (
            <>
            <Header />
            {this.props.children}
            <Footer />
            </>
        );
    }
}