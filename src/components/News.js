import React, { Component } from 'react'

export class News extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, mode, author, date} = this.props
    return (
      <div className="container">
        <div className="card">
        <img src={!imageUrl?'https://cdn.abcotvs.com/dip/images/13290984_052323-kgo-facebook-generic-img.jpg?w=1600':imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body" style={{backgroundColor: `${mode === 'dark'?'black':'white'}`, color: `${mode === 'dark'?'white':'black'}`}}>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p>By {author?author: 'unknown'}, Published on {new Date(date).toGMTString()}</p>
            <a href={newsUrl} target='_blank' className="btn btn-primary">Read more</a>
        </div>
        </div>
      </div>
    )
  }
}

export default News
