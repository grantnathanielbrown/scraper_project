import React, { Component } from 'react'

export default class CategoryForm extends Component {
    constructor(props) {
        super(props)
        this.state= {
        }  

    }
             
    render() {
        return (
            <div className="category-form">
        <label>
          Category 	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;       
          <select id="category" value={this.state.categoryValue} onChange={this.props.handleChange}>
            <option value="Best">Best</option>
            <option value="Controversial">Controversial</option>
            <option value="Hot">Hot</option>
            <option value="New">New</option>
            {/* <option value="Random">Random</option> */}
            <option value="Rising">Rising</option>
            <option value="Top">Top</option>
          </select>
        </label>                 
            </div>
        )
    }
}
