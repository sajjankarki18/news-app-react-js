import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Newsitem from './components/Newsitem'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export class App extends Component {
  constructor(){
    super()
    this.state = {
      mode: 'light',
      text: 'Enable Dark mode'
    }
  }
  darkMode = () => {
    if(this.state.mode === 'light'){
      this.setState({
        mode: 'dark',
        text: 'Enable Light mode'
      })
      document.body.style.backgroundColor = 'black'
    }else{
      this.setState({
        mode: 'light',
        text: 'Enable Dark mode'
      })
      document.body.style.backgroundColor = 'white'
    }
  }
  render() {
    const {mode, text} = this.state
    return (
    <>
      <BrowserRouter>
        <Navbar handleClick= {this.darkMode} mode={mode} text={text}/>
        <Routes>
          <Route path='/' element={<Newsitem mode={mode} key='general' pageSize={9} category = 'general'/>}></Route>
          <Route path='/business' element={<Newsitem mode={mode} key='business' pageSize={9} category = 'business'/>}></Route>
          <Route path='/entertainment' element={<Newsitem mode={mode} key='entertainment' pageSize={9} category = 'entertainment'/>}></Route>
          <Route path='/health' element={<Newsitem mode={mode} key='health' pageSize={9} category = 'health'/>}></Route>
          <Route path='/science' element={<Newsitem mode={mode} key='science' pageSize={9} category = 'science'/>}></Route>
          <Route path='/sports' element={<Newsitem mode={mode} key='sports' pageSize={9} category = 'sports'/>}></Route>
          <Route path='/technology' element={<Newsitem mode={mode} key='technology' pageSize={9} category = 'technology'/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
    )
  }
}

export default App
