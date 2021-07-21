import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useClassesQuery } from '../../generated/graphql';

const ClassList: FC = () => {
  const [result] = useClassesQuery();

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <main>
      <ul>
        {data?.classes.map(
          ({ index, name, subclasses }) =>
            index && (
              <li key={index} className="mb-6">
                <h2 className="mb-4 text-xl">{name}</h2>
                <Link to={`class/${index}`}>Go to</Link>
                {subclasses && (
                  <div>
                    <h3 className="mb-2 text-lg">Subclasses:</h3>
                    <ul className="ml-4">
                      {subclasses.map((subclass) => {
                        if (!subclass || !subclass?.index) return null;
                        return (
                          <li key={subclass.index}>
                            <h4>{subclass.name}</h4>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
            ),
        )}
      </ul>
    </main>
  );
};

export default ClassList;
