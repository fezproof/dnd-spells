import React from 'react';
import { useQuery } from 'urql';

const ClassesQuery = `
  query {
    classes {
      index
      name
    }
  }
`;

function App() {
  const [result, reexecuteQuery] = useQuery({
    query: ClassesQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
            Welcome to
          </h2>
          <p className="my-3 text-4xl sm:text-5xl lg:text-6xl font-bold sm:tracking-tight text-gray-900">
            DnD spells
          </p>
        </div>
        <ul>
          {data.classes.map(({ index, name }) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
