import React, { Component } from 'react';
import anime from 'animejs';
import axios from 'axios';

import CategoryForm from './CategoryForm.js';
import TermForm from './TermForm.js';
import placeholder from './wsi-imageoptim-reddit-marketing-.jpg';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      category: "Best",
      minScore: -100,
      numPosts: 25,
      subreddit: "",
      postArray: [],
    }  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidMount () {
  // When the page opens, animate the title
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
  // dynamically set the key of the setstate object to be equal to the idea of the specific form
  let x = event.target.id;
  console.log(event.target.value);
  this.setState({[x]: event.target.value});
  } 
        

handleSubmit(event) {
  let that = this;
  axios.get("http://localhost:3154", {
    params: {
      category: this.state.category,
      minScore: this.state.minScore,
      numPosts: this.state.numPosts,
      subreddit: this.state.subreddit
    }
  })
  .then(res => {
    return res;
  })
  .then(function(myJson) {
    
    let postArray = [];
    let parsedJSON = myJson;
    console.log(parsedJSON.data[0]);
    for (let i = 0; i < that.state.numPosts; i++) {
      let miniPost = {score: parsedJSON.data[i].score,
      title: parsedJSON.data[i].title,
      url: parsedJSON.data[i].url,
      preview: parsedJSON.data[i].preview};
      postArray.push(miniPost);
    }
    that.setState({postArray: postArray});
    console.log(that.state.postArray);
  })
  event.preventDefault();
}
// undefined = no preview
  render() {
    let posts = this.state.postArray.map( (post, key) => {
    if (post.preview !== undefined && post.preview.enabled !== false) {
      return (
        <div className="generated-post">
          <img src={post.url} alt="thumbnail of a Reddit post"/>
          <ul>{post.title}</ul>
          <ul>{post.score}</ul>
        </div>
      )
    } else {
      return (
        <div className="generated-post">
          <img src={placeholder} alt="Reddit logo"/>
          <ul>{post.title}</ul>
          <ul>{post.score}</ul>
        </div>        
      )
    }

    })
    return (
      <div className="App">
        <h1 className="page-title">Scrappy</h1>
        <p className="blurb">Waste your time on Reddit more efficiently.</p>
        <form className="request-form column-children" onSubmit={this.handleSubmit}>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className="btn btn-secondary active">
            <input type="radio" name="options" id="option1" autoComplete="off" checked/> Search By Category
          </label>
          <label className="btn btn-secondary">
            <input type="radio" name="options" id="option2" autoComplete="off"/> Search By Term
          </label>
        </div>

        <CategoryForm handleChange={this.handleChange.bind(this)}/>
        
        <label htmlFor="minScore">
          Minimum Score (upvotes - downvotes)
          <input id="minScore" className="rounded min-score" value={this.state.minScore} onChange={this.handleChange} type="number"/>
        </label>

        <label htmlFor="numPosts">
          Number of Posts (up to 25)
          <input id="numPosts" className="rounded num-posts" value={this.state.numPosts} onChange={this.handleChange} type="number"/>
        </label>          

        <label htmlFor="subreddit">
          Subreddit (without the r/)
          <input id="subreddit" className="rounded subreddit" value={this.state.subreddit} onChange={this.handleChange} type="text"/>
        </label>

          <input className="rounded" value="Go!" type="submit" />        
        </form>
        <div className="posts-container">
          {posts}
        </div>
      </div>
    );
  }
}