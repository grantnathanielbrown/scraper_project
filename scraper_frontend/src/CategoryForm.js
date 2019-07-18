import React, { Component } from 'react'

export default class CategoryForm extends Component {
    constructor(props) {
        super(props)
        this.state= {
          // categoryValue: "best",
        }  
        // this.handleChange = this.handleChange.bind(this);
    }

    // handleChange(event) {
    //     console.log(event.target.value);
    //     this.setState({categoryValue: event.target.value});
    //   } 
             
    render() {
        return (
            <div className="category-form">
        <label>
          Category        
          <select id="category" value={this.state.categoryValue} onChange={this.props.handleChange}>
            <option value="Best">Best</option>
            <option value="Controversial">Controversial</option>
            <option value="Hot">Hot</option>
            <option value="New">New</option>
            <option value="Random">Random</option>
            <option value="Rising">Rising</option>
            <option value="Top">Top</option>
          </select>
        </label>                 
            </div>
        )
    }
}
