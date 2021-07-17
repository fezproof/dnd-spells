import React from 'react';
import { FC } from 'react';
import {
  ClassSpellListQueryVariables,
  useClassSpellListQuery,
} from '../../generated/graphql';
import SpellDetails from '../SpellDetails';

const ClassSpellList: FC<ClassSpellListQueryVariables> = ({ index, level }) => {
  const [result] = useClassSpellListQuery({
    variables: {
      index,
      level,
    },
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      {data?.spells && data.spells.length
        ? data?.spells.map((spell) => (
            <SpellDetails key={spell.index} spell={spell} />
          ))
        : 'No spells'}
    </div>
  );
};

export default ClassSpellList;
