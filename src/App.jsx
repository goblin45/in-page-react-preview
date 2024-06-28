// src/App.js
import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import Preview from './components/Preview';
import './App.css';

const App = () => {
  const [code, setCode] = useState(`function App() {
    return <h2>Hello, React!</h2>;
  }`);

  return (
    <div className="App">
      	<div style={{ display: 'flex', height: '100vh' }}>
        	<div style={{ width: '50%' }}>
				<CodeEditor code={code} setCode={setCode} />
        	</div>
			<div style={{ width: '50%', border: '1px solid black' }}>
				<Preview code={code} />
			</div>
		</div>
    </div>
  );
};

export default App;
