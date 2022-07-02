import React from 'react';

function ArticleItem(props) {
  const data = props.articleData;
  return (<article><a href={data.url} target='_blank'>
          <h4 className='articleTitle'>{data.title}</h4>
          <span className='articleDate'> {data.date}</span><br/>
          <p className='articleSummary'>{data.summary}</p><br/>
        </a></article>
  );
}


export default ArticleItem;