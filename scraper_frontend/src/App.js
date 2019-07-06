import React, { Component } from 'react';
import anime from 'animejs';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      category: "Category",
      filters: "Filters",
      numPosts: "Number of Posts",
      searchTerm: "Search Term",
      subreddit: "Subreddit"
    }  
    this.handleChange = this.handleChange.bind(this);
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
  let x = event.target.className;
  this.setState({
  });
}


  render() {

    return (
      <div className="App">
        <h1 className="page-title">Scrappy</h1>
        <p className="blurb">Waste your time on Reddit more efficiently.</p>
        <form className="request-form column-children" action="#">        
          <input className="rounded category" value={this.state.category} onChange={this.handleChange} type="text"/>
          <input className="rounded filters" value={this.state.filters} onChange={this.handleChange} type="text"/>
          <input className="rounded num-posts" value={this.state.numPosts} onChange={this.handleChange} type="text"/>
          <input className="rounded search-term" value={this.state.searchTerm} onChange={this.handleChange} type="text"/>
          <input className="rounded subreddit" value={this.state.subreddit} onChange={this.handleChange} type="text"/>
          <input className="rounded" value="Go!" type="button"/>        
        </form>
  
      </div>
    );
  }
}