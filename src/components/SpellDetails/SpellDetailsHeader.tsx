import React, { FC } from 'react';
import { SpellDetailsHeaderFragment } from '../../generated/graphql';
import AbjurationIcon from '../../assets/schools/abjuration.svg';
import ConjurationIcon from '../../assets/schools/conjuration.svg';
import DivinationIcon from '../../assets/schools/divination.svg';
import EnchantmentIcon from '../../assets/schools/enchantment.svg';
import EvocationIcon from '../../assets/schools/evocation.svg';
import IllusionIcon from '../../assets/schools/illusion.svg';
import NecromancyIcon from '../../assets/schools/necromancy.svg';
import TransmutationIcon from '../../assets/schools/transmutation.svg';

const schoolToIcon = (school: string) => {
  if (school.toLowerCase() === 'abjuration') return AbjurationIcon;
  if (school.toLowerCase() === 'conjuration') return ConjurationIcon;
  if (school.toLowerCase() === 'divination') return DivinationIcon;
  if (school.toLowerCase() === 'enchantment') return EnchantmentIcon;
  if (school.toLowerCase() === 'evocation') return EvocationIcon;
  if (school.toLowerCase() === 'illusion') return IllusionIcon;
  if (school.toLowerCase() === 'necromancy') return NecromancyIcon;
  if (school.toLowerCase() === 'transmutation') return TransmutationIcon;
  return undefined;
};

const SpellSchool: FC<{ school: string }> = ({ school }) => (
  <div className="flex flex-col flex-nowrap justify-center items-center place-self-start min-w-0 text-sm text-center">
    <img
      src={schoolToIcon(school)}
      className="mb-1 w-8 h-8"
      alt={school}
      title={school}
    />
    <span className="overflow-hidden max-w-[8ch] sm:max-w-none overflow-ellipsis whitespace-nowrap">
      {school}
    </span>
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
  <div className="grid grid-cols-3 grid-rows-1">
    {school?.name && <SpellSchool school={school?.name} />}
    <div className="flex-1 text-center">
      <h4 className="text-lg font-bold uppercase">{name}</h4>
      <p className="capitalize">{spellLevelToText(level)}</p>
    </div>
    <div className="place-self-end w-10 h-10">{classes?.length}</div>
  </div>
);

export default SpellDetailsHeader;
