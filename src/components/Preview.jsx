import React, { useEffect, useRef } from 'react';
import ts from 'typescript';

const Preview = ({ code }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const transpileOptions = {
        compilerOptions: {
          module: ts.ModuleKind.ESNext,
          jsx: ts.JsxEmit.React,
          target: ts.ScriptTarget.ESNext,
        },
      };
  
      const transpiledCode = ts.transpileModule(code, transpileOptions).outputText;

      const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>React Playground</title>
        </head>
        <body>
          <div id="root"></div>
          <script src="https://unpkg.com/react/umd/react.development.js"></script>
          <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
          <script>
            window.addEventListener('load', () => {
                ${transpiledCode}
                ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
            });
          </script>
        </body>
      </html>
    `;

    if (iframeRef.current) {
      iframeRef.current.srcdoc = html;
    }
  }, [code]);

  return <iframe ref={iframeRef} title="Preview" style={{ width: '100%', height: '100%' }} />;
};

export default Preview;
