import React from 'react';
import { FC } from 'react';
import {
  ClassSpellListQueryVariables,
  useClassSpellListQuery,
} from '../../generated/graphql';
import SpellDetails from '../SpellDetails';

const ClassSpellList: FC<ClassSpellListQueryVariables> = ({
  class: classVar,
}) => {
  const [result] = useClassSpellListQuery({
    variables: {
      class: classVar,
    },
  });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <h3 className="mb-2 text-lg">Spells</h3>
      {data?.spells && data.spells.length
        ? data?.spells.map((spell) => (
            <SpellDetails key={spell.index} spell={spell} />
          ))
        : 'This Class has no spells'}
    </div>
  );
};

export default ClassSpellList;
