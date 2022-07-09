import React from 'react';
import ArticleItem from './articleItem.jsx';
import './articles.css';
const apiKey = "abc"

// process.env.REACT_APP_ARTICLE_API_KEY

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {articles: []};
  }

  // componentDidMount() {
  //   this.grabArticles('recycling');
  // }


  //Marks API he paid for this do not request alot!

  grabArticles(query) {
    var url = 'https://newsapi.org/v2/everything?' +
    `q=${query}&` +
    'sortBy=published&' +
    'searchIn=title&' +
    'pageSize=10&' +
    'language=en&' +
    `apiKey=${apiKey}`;

    var req = new Request(url);

    fetch(req)
      .then(res => res.json())
      .then(data => this.setState({articles: data.articles}));
  }

  render() {
    const articles = [];
    for (let i = 0; i < this.state.articles.length; i++) {
      articles.push(
        <ArticleItem
          key={i}
          articleData={this.state.articles[i]}
        />
      );
    }

    return (<div className='articles-div'>
      <div className='articles-title'>
        <h1>Articles</h1>
      </div>
      <div className='articles-items'>
        {articles}
      </div>
    </div>)
  }
}

export default Articles;