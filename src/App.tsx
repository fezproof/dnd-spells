import React from 'react';
import AppRouter from './routes';

function App() {
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl">
        <header className="mb-16 text-center">
          <a href="/">
            <h1 className="my-3 text-4xl sm:text-5xl lg:text-6xl font-bold sm:tracking-tight text-gray-900">
              D&D Spellbook
            </h1>
          </a>
        </header>
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
