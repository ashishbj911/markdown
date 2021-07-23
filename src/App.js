import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown';
function App() {
  const [markdown,setMarkdown] = useState('# MarkDown')
  return (
    <div className="markdown-container">
      <textarea value={markdown} onChange={(e)=>setMarkdown(e.target.value)}></textarea>
      <div className="text">
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
