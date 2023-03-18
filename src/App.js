import React from 'react'

import { Footer, Blog, Features, Title, Header } from './containers';
import { CTA, Navbar } from './components';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Title /> 
      <Features /> 
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
