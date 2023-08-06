import React, { Component } from 'react'
import News from './News'
import Spinner from './Spinner'

export class Newsitem extends Component {
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    constructor(props){
        super(props)
        this.state = {
            articles: [],
            page: 1,
            Loading: false
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsToday`
    }
    async componentDidMount(){
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=a0f61cd860dd4dfe8e893367d0739fa9&page=1&pageSize=${this.props.pageSize}`
        const data = await fetch(url)
        const parsedData = await data.json()
        
        this.setState({
            articles: parsedData.articles
        })
    }
    handlePrev = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=a0f61cd860dd4dfe8e893367d0739fa9&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({Loading: true})
        const data = await fetch(url)
        const parsedData = await data.json()
        this.setState({Loading: false})

        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            Loading: false
        })
    }
    handleNext = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=a0f61cd860dd4dfe8e893367d0739fa9&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({Loading: true})
        const data = await fetch(url)
        const parsedData = await data.json()
        this.setState({Loading: false})
        
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1,
            Loading: false
        })
    }
  render() {
    const {mode} = this.props
    return (
      <div className="container">
       <h2 className={`text-center text-${mode=='dark'?'white':'dark'}`} style={{margin: '30px'}}>NewsToday - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
       <div className="container d-flex justify-content-center align-items-center">
         {this.state.Loading && <Spinner/>}
       </div>
        <div className="row">
        {!this.state.Loading && this.state.articles.map((element) => {
           return <div className="col-md-4">
              <News mode={mode} title= {element.title?element.title.slice(0.20):""} description={element.description?element.description.slice(0,80):""} imageUrl= {element.urlToImage} newsUrl= {element.url} author={element.author} date={element.publishedAt}/>
            </div>
        })} 
        </div>
        <div className='container d-flex justify-content-between my-4'>
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default Newsitem
