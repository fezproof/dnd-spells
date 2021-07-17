import React, { FC } from 'react';
import {
  SubClassSpellListQueryVariables,
  useSubClassSpellListQuery,
} from '../../generated/graphql';
import SpellDetails from '../SpellDetails';

const SubClassSpellList: FC<SubClassSpellListQueryVariables> = ({
  subclass,
}) => {
  const [result] = useSubClassSpellListQuery({
    variables: {
      subclass,
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
          : 'This Subclass has no spells'}
      </div>
    </div>
  );
};

export default SubClassSpellList;
