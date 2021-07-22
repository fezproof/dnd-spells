import React, { FC } from 'react';
import { SpellDetailsHeaderFragment } from '../../generated/graphql';
import spellSchoolToIcon from '../../utils/spellSchoolToIcon';

const SpellSchool: FC<{ school: string }> = ({ school }) => (
  <div className="flex flex-col flex-nowrap justify-center items-center place-self-end text-sm text-center">
    <img
      src={spellSchoolToIcon(school)}
      className="mb-1 w-8 h-8"
      height={32}
      width={32}
      alt={school}
      title={school}
    />
    <span>{school}</span>
  </div>
);

const spellLevelToText = (level?: number | null): string => {
  if (typeof level !== 'number') return 'unknown';
  if (level === 0) return 'cantrip';
  return `level ${level}`;
};

const SpellDetailsHeader: FC<SpellDetailsHeaderFragment> = ({
  school,
  name,
  level,
}) => (
  <div className="flex flex-row flex-nowrap justify-center items-center">
    <div className="flex-1">
      <h4 className="text-lg font-bold uppercase">{name}</h4>
      <p className="capitalize">{spellLevelToText(level)}</p>
    </div>
    {school?.name && <SpellSchool school={school?.name} />}
  </div>
);

export default SpellDetailsHeader;
