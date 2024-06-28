import React from 'react';
import { Editor } from '@monaco-editor/react';

const CodeEditor = ({ code, setCode }) => {
  return (
    <Editor
      height="100%"
      width={'100%'}
      value={code}
      onChange={(value) => setCode(value || '')}
      theme="vs-dark"
      language='javascript'
      quickSuggestions= {{
        "other": false,
        "comments": false,
        "strings": false
      }}
    />
  );
};

export default CodeEditor;
