import React, { FC } from 'react';
import { SpellDetailsDescFragment } from '../../generated/graphql';

const SpellDetailsDesc: FC<SpellDetailsDescFragment> = ({ desc }) => (
  <div className="flex-1">
    {desc?.map((paragraph, index) => (
      <p key={index} className="mb-2">
        {paragraph}
      </p>
    ))}
  </div>
);

export default SpellDetailsDesc;
