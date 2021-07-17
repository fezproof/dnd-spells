import React from 'react';
import { FC } from 'react';
import { SpellDetailsFragment } from '../../generated/graphql';

const SpellDetails: FC<{ spell: SpellDetailsFragment }> = ({ spell }) => (
  <div className="my-4 max-w-prose">
    <h4 className="mb-2 text-lg">{spell.name}</h4>
    {spell.desc?.map((desc, index) => (
      <p key={index} className="mb-2">
        {desc}
      </p>
    ))}
  </div>
);

export default SpellDetails;
