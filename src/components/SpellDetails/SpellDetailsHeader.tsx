import React, { FC } from 'react';
import { SpellDetailsHeaderFragment } from '../../generated/graphql';
import classToIcon from '../../utils/classToIcon';
import spellSchoolToIcon from '../../utils/spellSchoolToIcon';

const SpellSchool: FC<{ school: string }> = ({ school }) => (
  <div className="flex flex-col flex-nowrap justify-center items-center place-self-start min-w-0 text-sm text-center">
    <img
      src={spellSchoolToIcon(school)}
      className="mb-1 w-8 h-8"
      alt={school}
      title={school}
    />
    <span className="overflow-hidden max-w-[5ch] sm:max-w-none overflow-ellipsis whitespace-nowrap">
      {school}
    </span>
  </div>
);

const SpellClasses: FC<{ classIndexes: string[] }> = ({ classIndexes }) => (
  <div className="flex flex-row flex-nowrap justify-end items-center -space-x-4">
    {classIndexes.map((classIndex) => (
      <div
        key={classIndex}
        className="flex flex-col flex-nowrap justify-center items-center place-self-start min-w-0 text-sm text-center"
      >
        <img
          src={classToIcon(classIndex)}
          className="mb-1 w-8 h-8"
          alt={classIndex}
          title={classIndex}
        />
      </div>
    ))}
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
  classes,
  level,
}) => (
  <div className="spell-header-grid">
    {school?.name && <SpellSchool school={school?.name} />}
    <div className="flex-1 text-center">
      <h4 className=" text-lg font-bold uppercase">{name}</h4>
      <p className="capitalize">{spellLevelToText(level)}</p>
    </div>
    <SpellClasses
      classIndexes={
        classes?.reduce<string[]>((acc, classs) => {
          if (classs?.index) acc.push(classs.index);
          return acc;
        }, []) || []
      }
    />
  </div>
);

export default SpellDetailsHeader;
