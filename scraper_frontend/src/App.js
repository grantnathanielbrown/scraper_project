import React, { Component } from 'react';
import anime from 'animejs';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      categoryValue: "best",
      filters: "Filters",
      numPosts: "Number of Posts",
      searchTerm: "Search Term",
      subreddit: "Subreddit"
    }  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
componentDidMount () {
  anime({
    targets: '.page-title',
    translateY: [100,0],
    opacity: [0,1],
    delay: anime.stagger(100, {start: 500}),
    backgroundColor: '#00FFFFFF',
    duration: 1600,
  })
}

handleChange(event) {
  console.log(event.target.value);
  this.setState({categoryValue: event.target.value});
}

handleSubmit(event) {
  console.log(this.state.categoryValue);
  fetch(`https://www.reddit.com/${this.state.categoryValue}.json`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
  event.preventDefault();
}
// handleChange(event) {
//   let x = event.target.className;
//   console.log(x);
//   this.setState({
//     x: event.target.value
//   });
// }


  render() {

    return (
      <div className="App">
        <h1 className="page-title">Scrappy</h1>
        <p className="blurb">Waste your time on Reddit more efficiently.</p>
        <form className="request-form column-children" onSubmit={this.handleSubmit}>
        <label>
          Categories:        
          <select value={this.state.categoryValue} onChange={this.handleChange}>
            <option value="best">Best</option>
            <option value="controversial">Controversial</option>
            <option value="hot">Hot</option>
            <option value="new">New</option>
            <option value="random">Random</option>
            <option value="rising">Rising</option>
            <option value="top">Top</option>
          </select>
        </label> 
          <input className="rounded filters" value={this.state.filters} onChange={this.handleChange} type="text"/>
          <input className="rounded num-posts" value={this.state.numPosts} onChange={this.handleChange} type="text"/>
          <input className="rounded search-term" value={this.state.searchTerm} onChange={this.handleChange} type="text"/>
          <input className="rounded subreddit" value={this.state.subreddit} onChange={this.handleChange} type="text"/>
          <input className="rounded" value="Go!" type="submit" />        
        </form>
  
      </div>
    );
  }
}