import React from 'react';

export const Context = React.createContext();

export class Provider extends React.Component {
    state = {
        pageTitle: "ANIMU",
        mode: "anime",
        modeIndex: 0
    }

    dispatch = (action, value = null) => {
        if (action === 'CHANGE_PAGE_TITLE') {
            this.setState({
                pageTitle: value
            })
        }

        else if (action === 'CHANGE_MODE') {
            const mode = value.mode.toLowerCase()
            if (mode === 'anime' || mode === 'manga') {
                this.setState({
                    mode: mode,
                    modeIndex: value.modeIndex
                })
            }
        }
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