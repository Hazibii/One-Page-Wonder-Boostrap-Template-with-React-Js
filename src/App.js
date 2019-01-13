import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Navigation from './component/nav';
import SectionOne from './component/sectionOne';
import SectionTwo from './component/sectionTwo';
import SectionThree from './component/sectionThree';
import Footer from './component/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header /> 
        <Navigation />
        <SectionOne />
        <SectionTwo /> 
        <SectionThree />
        <Footer /> 
      </div>
    );
  }
}

export default App;
