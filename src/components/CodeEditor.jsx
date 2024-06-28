import React from 'react';
import { Editor } from '@monaco-editor/react';

const CodeEditor = ({ code, setCode }) => {
  return (
    <Editor
      height="100%"
      width={'100%'}
      defaultLanguage="typescript"
      value={code}
      onChange={(value) => setCode(value || '')}
      theme="vs-dark"
    />
  );
};

export default CodeEditor;
