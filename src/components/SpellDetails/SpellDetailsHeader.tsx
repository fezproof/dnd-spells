import React, { FC } from 'react';
import { SpellDetailsHeaderFragment } from '../../generated/graphql';

const spellLevelToText = (level?: number | null): string => {
  if (typeof level !== 'number') return 'unknown';
  if (level === 0) return 'cantrip';
  return `level ${level}`;
};

const SpellDetailsHeader: FC<SpellDetailsHeaderFragment> = ({
  school,
  name,
  classes,
  level,
}) => (
  <div className="flex flex-row flex-nowrap">
    <div className="w-10 h-10">{school?.name}</div>
    <div className="flex-1 text-center">
      <h4 className="text-lg font-bold uppercase">{name}</h4>
      <p className="capitalize">{spellLevelToText(level)}</p>
    </div>
    <div className="w-10 h-10">{classes?.length}</div>
  </div>
);

export default SpellDetailsHeader;
