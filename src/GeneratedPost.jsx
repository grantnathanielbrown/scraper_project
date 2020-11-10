import React from 'react'

export default function GeneratedPost(props) {
    if (props.imageType === "video") {
      return (
        <div className="generated-post">
        <a href={props.url}>
          <video src={props.videoPreview} alt="Reddit post containing a video" autoPlay muted loop/>
          <ul className="post-title">{props.title}</ul>
        </a>
        <ul>Score: {props.score}</ul>
      </div>
      )
    } else {
      return (
        <div className="generated-post">
        <a href={props.url}>
          <img className={props.imageType} src={props.thumbnail} alt="thumbnail of a Reddit post"/>
          <ul className="post-title">{props.title}</ul>
        </a>
        <ul>Score: {props.score}</ul>
      </div>
    )
    }
    
}
