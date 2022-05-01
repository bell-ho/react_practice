import React from 'react';
import ReactDomServer from 'react-dom/server';

const html = ReactDOMServer.renderToString(<div>서버 사이드 렌더링</div>);

console.log(html);
