import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css'; // Tailwind should be imported here

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Tailwind Test Block */}
      <div className="bg-blue-500 text-white p-4 rounded mb-6 w-full max-w-md text-center shadow">
        Tailwind CSS is working!
      </div>

      {/* Logo Row */}
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="h-16 hover:scale-110 transition-transform" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="h-16 hover:scale-110 transition-transform" alt="React logo" />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">Vite + React + Tailwind</h1>

      {/* Counter Card */}
      <div className="bg-white shadow-md rounded p-6 w-full max-w-md text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="bg-gray-200 px-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Footer */}
      <p className="mt-6 text-sm text-gray-500 text-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
