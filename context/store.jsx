import React from 'react';
import { state } from './state'

export const Context = React.createContext();

export class Provider extends React.Component {
    state = state

    dispatch = async (action, value = null) => {
        if (action === 'CHANGE_PAGE_TITLE') this.setState({ pageTitle: value })
        else if (action === 'SET_LOADING') this.setState({ isLoading: value })
        else if (action === 'CHANGE_ERROR_MESSAGE') this.setState({ errorMessage: value })
        else if (action === 'TOGGLE_NAVBAR') this.setState({ navbar: !this.state.navbar })
        else if (action === 'CLOSE_NAVBAR') this.setState({ navbar: false })
        else if (action === 'CHANGE_MODE') this.setState({ mode: value.mode, modeIndex: value.modeIndex })
        else if (action === 'CHANGE_TRENDING_ANIME') this.setState({ trendingAnime: value })

        // START Snackbar Section -------------
        else if (action === 'SET_SNACKBAR') this.setState({ snackbar: value })
        else if (action === 'ADD_SNACKPACK') {
            this.setState({
                snackpack: [...this.state.snackpack, {
                    key: new Date().getTime(),
                    message: (value.message !== null) ? value.message : null,
                    time: (value.time !== null) ? value.time : 9999999
                }]
            })
        }
        else if (action === 'SLICE_SNACKPACK') {
            this.setState({snackpack: this.state.snackpack.slice(1)})
        }
        // END Snackbar Section -------------
    }

    render() {
        return (
            <Context.Provider value={
                {
                    state: this.state,
                    dispatch: this.dispatch
                }
            }>
                {this.props.children}
            </Context.Provider>
        )
    }
}