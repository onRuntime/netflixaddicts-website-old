import React, { Component } from 'react';

import Axios, { AxiosResponse } from 'axios';

export default class Encyclopedia extends Component<{}, { sheets: string }> {

    constructor(props: any) {
        super(props);
        this.setState({
            sheets: 'Loading data...'
        })
    }

    componentDidMount() {
        Axios.get('https://localhost:8000/api/sheets').then((response: AxiosResponse) => {
            this.setState({
                sheets: response.data,
            });
        });
    }

    render() {
        return (
            <div id="sheet-list">{this.state.sheets}</div>
        );
    }
}