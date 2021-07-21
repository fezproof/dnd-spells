import React, { FC } from 'react';
import { SpellDetailsHigherLevelsFragment } from '../../generated/graphql';

const SpellDetailsHigherLevels: FC<SpellDetailsHigherLevelsFragment> = ({
  higher_level,
}) => (
  <div>
    {higher_level?.map((paragraph, index) => (
      <p key={index} className="mb-2">
        {index === 0 && (
          <span className="font-semibold">At Higher Levels: </span>
        )}
        {paragraph}
      </p>
    ))}
  </div>
);

export default SpellDetailsHigherLevels;
