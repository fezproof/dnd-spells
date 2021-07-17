import React from 'react';
import { FC } from 'react';
import { SpellDetailsFragment } from '../../generated/graphql';

const SpellDetails: FC<{ spell: SpellDetailsFragment }> = ({ spell }) => {
  console.log(spell);
  return <pre>{JSON.stringify(spell, null, 2)}</pre>;
};

export default SpellDetails;
