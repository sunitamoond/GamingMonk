import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MoviesComponent from './src/components/movies.component';
import store from './src/store';

export default class App extends React.Component {


    render() {
        return (
            <Provider store={store}>
                <MoviesComponent/>
            </Provider>
        )
    }
}