import React, { FC } from 'react';
import { SpellDetailsFragment } from '../../generated/graphql';
import SpellDetailsBanners from './SpellDetailsBanners';
import SpellDetailsDesc from './SpellDetailsDesc';
import SpellDetailsHeader from './SpellDetailsHeader';
import SpellDetailsHigherLevels from './SpellDetailsHigherLevels';
import SpellDetailsInfo from './SpellDetailsInfo';

const SpellDetails: FC<{ spell: SpellDetailsFragment }> = ({ spell }) => (
  <div className="flex flex-col flex-nowrap px-4 pt-8 pb-10 my-4 space-y-4 max-w-prose max-h-screen border border-gray-400">
    <SpellDetailsHeader {...spell} />
    <SpellDetailsInfo {...spell} />
    <SpellDetailsDesc {...spell} />
    <SpellDetailsBanners {...spell} />
    {!!spell.higher_level?.length && <SpellDetailsHigherLevels {...spell} />}
  </div>
);

export default SpellDetails;
