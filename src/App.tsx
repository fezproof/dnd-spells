import React from 'react';
import { Link } from 'react-router-dom';
import AppRouter from './routes';

function App() {
  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl">
      <header className="mb-16 text-center">
        <Link to="/dnd-spells/">
          <h1 className="pt-3 pb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 border-b-4 border-gray-400 hover:border-black">
            D&D Spellbook
          </h1>
        </Link>
      </header>
      <AppRouter />
    </div>
  );
}

export default App;
