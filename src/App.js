import React, { Component } from 'react';
import anime from 'animejs';
import axios from 'axios';

import GeneratedPost from './GeneratedPost'; 
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
  
      searchTerm: "",
      timeframe: "hour",
      
      postArray: [],
      animationTracker: false,
      selectedForm: "Category",
      
    } 
    this.handleChange = this.handleChange.bind(this);
    this.backendCall = this.backendCall.bind(this);
    this.changeForm = this.changeForm.bind(this);
}


componentDidMount () {
  this.risingAnimation('.page-title');
}

changeForm (state) {
  this.setState({
    selectedForm: state,
    searchTerm: "",
    category: "Best",
  });
}

opacityAnimation(elements,opacity) {
  console.log(elements,opacity);
  anime({
    targets: elements,
    opacity: opacity,
    duration: 0.01,
  })
}

loadingAnimation () {
  console.log('animation has begun');
  let orangeCircle = anime({
    targets: '.orange-circle',
    translateX: 125,
    loop: true,
    easing: 'cubicBezier(0.950, 0.095, 0.060, 0.950)',
    direction: 'alternate',
  })
  orangeCircle.restart();

  let blueCircle = anime({
    targets: '.blue-circle',
    translateX: -125,
    loop: true,
    easing: 'cubicBezier(0.950, 0.095, 0.060, 0.950)',
    direction: 'alternate',
  })
  blueCircle.restart();

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

handleChange(event) {
  // dynamically set the key of the setstate object to be equal to the id of the specific form
  let category = event.target.id;
  this.setState({[category]: event.target.value});
} 
        

backendCall(event) {
  let backendURL = `https://scrappy-gnb.herokuapp.com/${this.state.selectedForm}`
  if (process.env.NODE_ENV === "development") {
    backendURL = `http://localhost:3154/${this.state.selectedForm}`
  }
  console.log(backendURL);

  this.opacityAnimation(['.orange-circle','.blue-circle'],1);
  
  if (this.state.animationTracker === false) {
    this.loadingAnimation();
    this.setState({animationTracker: true});
  }
  
  let that = this;



  axios.get(backendURL, {
    headers: {
      // 'Content-Type': 'text/html',
    },
    params: {
      category: this.state.category,
      searchTerm: this.state.searchTerm,
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

    for (let i = 0; i < parsedJSON.data.length; i++) {
      let lengthChecker = parsedJSON.data[i].title.length < 150 ? parsedJSON.data[i].title : parsedJSON.data[i].title.slice(0,150) + '...'
      let miniPost = {score: parsedJSON.data[i].score,
      title: lengthChecker,
      url: parsedJSON.data[i].url,
      preview: parsedJSON.data[i].preview};
      postArray.push(miniPost);
    };
    that.opacityAnimation(['.orange-circle','.blue-circle'],0)
    that.setState({postArray: postArray});
    console.log(that.state.postArray);
  })
  .then(data => {
    this.risingAnimation('.generated-post');
  })

  event.preventDefault();
}
// undefined = no preview
  render() {

    let posts = this.state.postArray.map( (post) => {
    if (post.preview !== undefined && post.preview.enabled !== false) {
      return (
        <GeneratedPost url={post.url} imageSRC={post.url} title={post.title} score={post.score}/>
      )
    } else {
      return (
        <GeneratedPost url={post.url} imageSRC={placeholder} title={post.title} score={post.score}/>       
      )
    }

    })
    return (
      <div className="App">
        <h1 className="page-title">Scrappy</h1>
        <p>
          <button id="about-button" className="btn btn-primary button-triad" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            About
          </button>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
          The chief goal of this project is to learn more about APIs, scripting, and React. My project has two desired features - first, to allow users to view Reddit posts based on certain queries that Reddit itself does not allow users to search by. Second, to allow users to download searched content in aggregation.
          </div>
          
        </div>        
        <form className="request-form column-children" onSubmit={this.backendCall}>
          
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label onClick={() => this.changeForm("Category")} className="category-label btn btn-secondary active button-triad">
            <input type="radio" name="options" id="option1" autoComplete="off"/>
            Search By Category
          </label>

          <label onClick={() => this.changeForm("Search")} className="search-label btn btn-secondary button-triad">
            <input type="radio" name="options" id="option2" autoComplete="off"/>            
            Search By Term
          </label>
        </div>


          {this.state.selectedForm === "Category" 
          ? <CategoryForm handleChange={this.handleChange.bind(this)}/>
          : <TermForm handleChange={this.handleChange.bind(this)}
          searchTerm={this.state.searchTerm} timeframe={this.state.timeframe} />
          }

          <label htmlFor="minScore">
            Minimum Score (upvotes - downvotes) 	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;
            <input id="minScore" className="rounded min-score" value={this.state.minScore} onChange={this.handleChange} type="number"/>
          </label>

          <label htmlFor="numPosts">
            Number of Posts (up to 25)	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;
            <input id="numPosts" className="rounded num-posts" value={this.state.numPosts} onChange={this.handleChange} type="number"/>
          </label>

          {this.state.category === "Best" && this.state.selectedForm === "Category" ? 
          <label htmlFor="subreddit">
            Subreddit (without the r/)	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;
            <input disabled id="subreddit" className="rounded subreddit" value="Does not work for 'best'" onChange={this.handleChange} type="text"/>
          </label> :
          <label htmlFor="subreddit">
            Subreddit (without the r/)	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;
            <input id="subreddit" className="rounded subreddit" value={this.state.subreddit} onChange={this.handleChange} type="text"/>
          </label>
        }          


            <input className="form-submit rounded" value="Search" type="submit" />        

          </form>
          <div>
            <span data-testid="orange-circle" className="orange-circle" id="orange-circle"></span>
            <span className="blue-circle" id="blue-circle"></span>
          </div>

        <div className="posts-container">
          {posts}
        </div>

      </div>
    );
  }
}