import React, { Component } from 'react'

export default class TermForm extends Component {
    render() {
        return (
            <div className="term-form">
                <label>
                Search Keyword 	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;       
                <input id="timeframe" className="rounded timeframe" value={this.props.timeframe} onChange={this.props.handleChange} type="text"/>
                </label>

                <label>
                Timeframe 	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;       
                <select id="category" onChange={this.props.handleChange}>
                    <option value="Hour">Hour</option>
                    <option value="Day">Day</option>
                    <option value="Week">Week</option>
                    <option value="Month">Month</option>
                    {/* <option value="Random">Random</option> */}
                    <option value="Year">Year</option>
                    <option value="All">All</option>
                </select>
                </label> 

            </div>
        )
    }
}
