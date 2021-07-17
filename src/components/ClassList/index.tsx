import React, { FC } from 'react';
import { useClassesQuery } from '../../generated/graphql';

const ClassList: FC = () => {
  const [result] = useClassesQuery();

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <ul>
      {data?.classes.map(({ index, name, subclasses }) => (
        <li key={index} className="mb-6">
          <h2 className="mb-4 text-xl">{name}</h2>
          {subclasses && (
            <div>
              <h3 className="mb-2 text-lg">Subclasses:</h3>
              <ul className="ml-4">
                {subclasses.map((subclass) => {
                  if (!subclass) return null;
                  return <li key={subclass.index}>{subclass.name}</li>;
                })}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ClassList;
