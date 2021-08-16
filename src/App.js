import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./App.css";
let marked = require("marked");

const initialstate = `
This is a paragraf
> Block Quotes!

**Bolded text**
- list item 1
- list item 2
- list item 3
# Header
## A sub header
[link](https://www.google.com/)
This is a inline \`<div></div>\`
Code block: 
\`\`\` 
  let a = 1 ;
  let b = 2 ;
  let c = a * b;
\`\`\`
![React](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png)
`;
function App() {
  const [text, setText] = useState(initialstate)

  marked(text);

  
 
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Markdown Previewer</h1>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="col text-center">
              <h4>Markdown Input</h4>
              <div className="input">
                <textarea className="mark_input" id="editor" value={text} onChange={(e) => setText(e.target.value)}>
                 
                </textarea>
              </div>
              
            </div>
          </div>
          <div className="col-md-6">
            <div className="col text-center">
              <h4>Preview</h4>
              <div className="input" >
                <div className="preview_input" id="preview"
                dangerouslySetInnerHTML={{
                  __html: marked(text, {breaks: true}),
                }}
              ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
