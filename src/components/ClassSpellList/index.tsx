import React from 'react';
import { FC } from 'react';
import {
  ClassSpellListQueryVariables,
  useClassSpellListQuery,
} from '../../generated/graphql';
import SpellDetails from '../SpellDetails';

const ClassSpellList: FC<ClassSpellListQueryVariables> = ({ index }) => {
  const [result] = useClassSpellListQuery({
    variables: {
      index,
    },
  });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div className="mb-4">
      <h3 className="mb-2 text-lg">Spells</h3>
      <div className="px-4">
        {data?.spells && data.spells.length
          ? data?.spells.map((spell) => (
              <SpellDetails key={spell.index} spell={spell} />
            ))
          : 'This Class has no spells'}
      </div>
    </div>
  );
};

export default ClassSpellList;
