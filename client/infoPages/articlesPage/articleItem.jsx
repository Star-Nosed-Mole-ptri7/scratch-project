import React from 'react';

function ArticleItem(props) {
  const data = props.articleData;
  return (<article><a href={data.url} target='_blank'>
          <img className="article-image" src={data.urlToImage}/>
          <h4 className='articleTitle'>{data.title}</h4>
          <span className='articleDate'> {data.publishedAt.slice(0, 10)}</span><br/>
          <p className='articleSummary'>{data.content}</p><br/>
        </a></article>
  );
}


export default ArticleItem;