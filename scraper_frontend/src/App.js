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

risingAnimation (element) {
  anime({
    targets: element,
    translateY: [100,0],
    opacity: [0,1],
    delay: anime.stagger(100, {start: 500}),
    backgroundColor: '#00FFFFFF',
    duration: 1600,
  })
}
componentDidMount () {
  this.risingAnimation('.page-title');
}

handleChange(event) {
  // dynamically set the key of the setstate object to be equal to the idea of the specific form
  let x = event.target.id;
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
  .then(function(parsedJSON) {
    
    let postArray = [];

    console.log(parsedJSON.data.length);

    for (let i = 0; i < parsedJSON.data.length; i++) {
      let lengthChecker = parsedJSON.data[i].title.length < 150 ? parsedJSON.data[i].title : parsedJSON.data[i].title.slice(0,150) + '...'
      console.log(parsedJSON.data[i].title.length);
      let miniPost = {score: parsedJSON.data[i].score,
      title: lengthChecker,
      url: parsedJSON.data[i].url,
      preview: parsedJSON.data[i].preview};
      postArray.push(miniPost);
    }
    that.setState({postArray: postArray});
    console.log(that.state.postArray);
  })
  .then(data =>{
    this.risingAnimation('.generated-post');
  })

  event.preventDefault();
}
// undefined = no preview
  render() {
    let posts = this.state.postArray.map( (post, key) => {
    if (post.preview !== undefined && post.preview.enabled !== false) {
      return (
        <div className="generated-post rounded">
          <img src={post.url} alt="thumbnail of a Reddit post"/>
          <ul className="post-title">{post.title}</ul>
          <ul>{post.score}</ul>
        </div>
      )
    } else {
      return (
        <div className="generated-post">
          <img src={placeholder} alt="Reddit logo"/>
          <ul className="post-title">{post.title}</ul>
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