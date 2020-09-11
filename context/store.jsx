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