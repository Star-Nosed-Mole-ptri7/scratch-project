import React from 'react';
import ArticleItem from './articleItem.jsx';
import './articles.css';
import jsonArticles from './sampleArticles.json' // Where does this data come from?

class Articles extends React.Component {

  render() {
    const articles = [];
    for (let i = 0; i < jsonArticles.length; i++) {
      articles.push(
        <ArticleItem
          key={i}
          articleData={jsonArticles[i]}
        />
      );
    }

    return (<div className='articles-div'>
      <h1>Articles</h1>
      {articles}
    </div>)
  }
}

export default Articles;