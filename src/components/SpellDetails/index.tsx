import React from 'react';
import { FC } from 'react';
import { SpellDetailsFragment } from '../../generated/graphql';

const SpellDetails: FC<{ spell: SpellDetailsFragment }> = ({ spell }) => (
  <div className="my-4">
    <h4 className="text-lg">{spell.name}</h4>
    {spell.desc?.map((desc, index) => (
      <p key={index}>{desc}</p>
    ))}
  </div>
);

export default SpellDetails;
