/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
 
import './App.css';
import ReactMarkdown from "react-markdown";

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here is some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.


\`\`\`
// this is a multi-line code:


function anotherExample(FirstLine, lastLine) {
if (FirstLine == '\`\`\`' && lastLine == '\`\`\`') {
return multiLineCode
}
  
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **both!_**

There is also [links](https://freecodecamp.com), And
> Block Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
- That looks like this.
`;


function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown);

  return <>
    <div>
      <h1 style={{textAlign: "center"}}>Markdown Previewer</h1>
      <div className="boxes-container">
        <textarea name="editor" id="editor" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
        <div id="preview">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
    </>
  
  }

export default App
