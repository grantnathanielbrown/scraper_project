import React from 'react'

export default function GeneratedPost(props) {
    return (
        <div className="generated-post">
        <a href={props.url}>
          <img src={props.imageSRC} alt="thumbnail of a Reddit post"/>
          <ul className="post-title">{props.title}</ul>
        </a>
        <ul>Score: {props.score}</ul>
      </div>
    )
}
