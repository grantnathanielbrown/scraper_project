import React, { Component } from 'react'

export default class TermForm extends Component {
    render() {
        return (
            <div className="term-form">
                <label>
                Search Keyword 	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;       
                <input id="searchTerm" className="rounded search-term" value={this.props.searchTerm} onChange={this.props.handleChange} type="text"/>
                </label>                 
            </div>
        )
    }
}
