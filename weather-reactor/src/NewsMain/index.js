import React, { Component } from 'react';
import { List, Segment } from 'semantic-ui-react';

class NewsMain extends Component {
  constructor(){
    super();
    // super calls the Component class's constructor,
    // which allows us to use 'this'

  }
  handleInput = (e) => {
    console.log(e.currentTarget.name, ' < --e.currentTarget.name', e.currentTarget.value, ' < --e.currentTarget.value');
    // arrow functions automatically bind this, which means we can use this
    this.setState({

    });
  }
  handleSubmit = (e) => {
    // To stop the page from refreshing
    // We don't want to refresh cuz were making a SPA, (single page application)
    e.preventDefault();
    // this is the messanger function from the app component
    // that will allow us to LIFT UP STATE to the parent component
  }
  render(){

    console.log(this.props.newsData.articles, 'HELLLOOooooooo');

    const newsList = this.props.newsData.articles.map((news, i) => {
    return (
      <li key={i}>
      Key: {i} <br/>
      Author: {news.author} <br/>
      Title: {news.title} <br/>
      Description: {news.description} <br/>
      </li>
    )
  });
    return(
      <div>
      <h2>Hello</h2>
    <ul>
      {newsList}
    </ul>
      </div>
    );
  }
}

export default NewsMain
